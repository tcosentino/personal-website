# Troy Cosentino - Personal Website

Personal website built with React, TypeScript, and Vite. Showcases projects, resume, and blog.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Structure

```
src/
├── components/      # Reusable components (Nav, Footer)
├── pages/          # Page components (Home, Projects, Resume, Blog, Contact)
├── App.tsx         # Main app with routing
├── main.tsx        # Entry point
└── index.css       # Global styles + Tailwind
```

## 🎨 Features

- **Home**: Hero section, what you do, featured project (AgentForge)
- **Projects**: Showcase of AgentForge and Contuit with details
- **Resume**: Full resume with download link
- **Blog**: Blog post listing (ready for content)
- **Contact**: Contact info and what you're looking for

## 📝 Adding Blog Posts

Blog posts are currently placeholders. To add real posts:

### Option 1: Markdown Files (Simple)
1. Create `posts/` folder
2. Write posts in Markdown
3. Use a library like `react-markdown` to render

### Option 2: Headless CMS (Scalable)
- Contentful
- Sanity
- Strapi

### Option 3: MDX (Interactive)
- Install `@mdx-js/react`
- Write posts with React components

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically on push

### GitHub Pages
1. Update `vite.config.ts` base path
2. Run `npm run build`
3. Deploy `dist/` folder

### Custom Domain (troycosentino.com)
1. Buy domain (Namecheap, Vercel Domains, etc.)
2. Add domain in hosting provider
3. Update DNS settings

## ✨ Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#3498db',   // Blue
  secondary: '#2c3e50', // Dark gray
  accent: '#27ae60',    // Green
}
```

### Content
All content is in `src/pages/`. Edit directly:
- Home: `src/pages/Home.tsx`
- Projects: `src/pages/Projects.tsx`
- Resume: `src/pages/Resume.tsx`
- Blog: `src/pages/Blog.tsx`
- Contact: `src/pages/Contact.tsx`

### Resume PDF
Place your resume PDF in `public/Troy-Cosentino-Resume.pdf`

## 🔧 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation

## 📱 Mobile Responsive

Fully responsive design with Tailwind breakpoints:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

## 🐧 Built by Peggy

Your friendly neighborhood penguin assistant. Questions? Let me know!
