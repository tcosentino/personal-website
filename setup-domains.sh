#!/bin/bash
set -e

# Domain Setup Script for Troy's Apps
# Automatically configures custom domains with CloudFront + Cloudflare

CLOUDFLARE_TOKEN=$(cat ~/.openclaw/workspace/.credentials/cloudflare-api-token.txt)

echo "🔍 Checking SSL certificate status..."
echo ""

# Check troycosentino.com certificate
TROY_STATUS=$(aws acm describe-certificate \
  --region us-east-1 \
  --certificate-arn arn:aws:acm:us-east-1:541894706864:certificate/54245934-db5e-44dc-a111-8edd27b6e2e3 \
  --query 'Certificate.Status' \
  --output text)

echo "troycosentino.com: $TROY_STATUS"

# Check parsleypdf.com certificate
PARSLEY_STATUS=$(aws acm describe-certificate \
  --region us-east-1 \
  --certificate-arn arn:aws:acm:us-east-1:541894706864:certificate/7f3511be-54c5-4b1c-a510-48c68ed559ff \
  --query 'Certificate.Status' \
  --output text)

echo "parsleypdf.com: $PARSLEY_STATUS"
echo ""

if [ "$TROY_STATUS" != "ISSUED" ] || [ "$PARSLEY_STATUS" != "ISSUED" ]; then
  echo "⏳ Certificates still validating. Check back in a few minutes."
  echo "Run this script again when both show ISSUED status."
  exit 0
fi

echo "✅ Both certificates validated!"
echo ""
echo "📝 Updating CloudFront distributions with custom domains..."
echo ""

# Get current CloudFront config for troycosentino.com
aws cloudfront get-distribution-config --id E2S92XY4CW2GOH > /tmp/troy-cf-config.json

# Extract ETag
TROY_ETAG=$(jq -r '.ETag' /tmp/troy-cf-config.json)

# Update config with custom domain and SSL
jq '.DistributionConfig.Aliases.Quantity = 2 | 
    .DistributionConfig.Aliases.Items = ["troycosentino.com", "www.troycosentino.com"] |
    .DistributionConfig.ViewerCertificate = {
      "ACMCertificateArn": "arn:aws:acm:us-east-1:541894706864:certificate/54245934-db5e-44dc-a111-8edd27b6e2e3",
      "SSLSupportMethod": "sni-only",
      "MinimumProtocolVersion": "TLSv1.2_2021",
      "Certificate": "arn:aws:acm:us-east-1:541894706864:certificate/54245934-db5e-44dc-a111-8edd27b6e2e3",
      "CertificateSource": "acm"
    }' /tmp/troy-cf-config.json | jq '.DistributionConfig' > /tmp/troy-cf-update.json

aws cloudfront update-distribution \
  --id E2S92XY4CW2GOH \
  --distribution-config file:///tmp/troy-cf-update.json \
  --if-match "$TROY_ETAG" > /dev/null

echo "✅ troycosentino.com CloudFront updated"

# Get current CloudFront config for parsleypdf.com
aws cloudfront get-distribution-config --id EWUWP2636A1JC > /tmp/parsley-cf-config.json

# Extract ETag
PARSLEY_ETAG=$(jq -r '.ETag' /tmp/parsley-cf-config.json)

# Update config with custom domain and SSL
jq '.DistributionConfig.Aliases.Quantity = 2 | 
    .DistributionConfig.Aliases.Items = ["parsleypdf.com", "www.parsleypdf.com"] |
    .DistributionConfig.ViewerCertificate = {
      "ACMCertificateArn": "arn:aws:acm:us-east-1:541894706864:certificate/7f3511be-54c5-4b1c-a510-48c68ed559ff",
      "SSLSupportMethod": "sni-only",
      "MinimumProtocolVersion": "TLSv1.2_2021",
      "Certificate": "arn:aws:acm:us-east-1:541894706864:certificate/7f3511be-54c5-4b1c-a510-48c68ed559ff",
      "CertificateSource": "acm"
    }' /tmp/parsley-cf-config.json | jq '.DistributionConfig' > /tmp/parsley-cf-update.json

aws cloudfront update-distribution \
  --id EWUWP2636A1JC \
  --distribution-config file:///tmp/parsley-cf-update.json \
  --if-match "$PARSLEY_ETAG" > /dev/null

echo "✅ parsleypdf.com CloudFront updated"
echo ""
echo "🌐 Adding DNS records in Cloudflare..."
echo ""

# Add DNS records for troycosentino.com
TROY_ZONE="065ecb818b69f408d4d23d6cf7341d26"

curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$TROY_ZONE/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "troycosentino.com",
    "content": "d1rw72ttjo2aq6.cloudfront.net",
    "ttl": 1,
    "proxied": false
  }' > /dev/null

curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$TROY_ZONE/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "www",
    "content": "d1rw72ttjo2aq6.cloudfront.net",
    "ttl": 1,
    "proxied": false
  }' > /dev/null

echo "✅ troycosentino.com DNS records added"

# Add DNS records for parsleypdf.com
PARSLEY_ZONE="0fff167c7ee22afcc6e826000e37cac9"

curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$PARSLEY_ZONE/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "parsleypdf.com",
    "content": "d19f32uxc46hkh.cloudfront.net",
    "ttl": 1,
    "proxied": false
  }' > /dev/null

curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$PARSLEY_ZONE/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "www",
    "content": "d19f32uxc46hkh.cloudfront.net",
    "ttl": 1,
    "proxied": false
  }' > /dev/null

echo "✅ parsleypdf.com DNS records added"
echo ""
echo "🎉 Setup complete!"
echo ""
echo "Your domains are now live:"
echo "  • https://troycosentino.com"
echo "  • https://www.troycosentino.com"
echo "  • https://parsleypdf.com"
echo "  • https://www.parsleypdf.com"
echo ""
echo "Note: DNS propagation can take a few minutes. Sites should be live within 5-10 minutes."
