# Akash Ahmed - Full-Stack Developer Portfolio 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://akashmed.vercel.app)

> A modern, responsive, and SEO-optimized portfolio showcasing my journey as a Full-Stack Developer specializing in React, Next.js, Node.js, and .NET technologies.

## 👨‍💻 About Me

Hi! I'm **Akash Ahmed**, a passionate Full-Stack Developer and third-year Computer Science student from Dhaka, Bangladesh. With over 1 year of hands-on experience, I specialize in building scalable web applications, REST APIs, and modern user interfaces.

🌐 **Live Site**: [akashmed.vercel.app](https://akashmed.vercel.app)  
💼 **LinkedIn**: [linkedin.com/in/akash-ahmed-dev](https://www.linkedin.com/in/akash-ahmed-dev)  
💻 **GitHub**: [github.com/akashmed](https://github.com/akashmed)  
📧 **Email**: akashmed3@gmail.com

## ✨ Features

- ⚡ **Lightning Fast**: Built with Next.js 15 and optimized for performance
- 🎨 **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- 🔍 **SEO Optimized**: Comprehensive SEO with structured data, sitemap, and meta tags
- 📱 **Fully Responsive**: Perfect viewing experience across all devices
- 🌙 **Dark Mode Support**: Seamless theme switching
- 🎯 **Type-Safe**: Built entirely with TypeScript
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🚀 **PWA Ready**: Manifest and service worker support

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.5 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.0
- **Components**: Radix UI
- **Icons**: Lucide React
- **TypeScript**: Type-safe development

### Backend & Tools
- **Languages**: TypeScript, JavaScript, C#, Python
- **Backend**: Node.js, .NET, Express.js
- **Databases**: PostgreSQL, MongoDB
- **Cloud**: AWS, Azure, Vercel
- **Version Control**: Git, GitHub

## 📁 Portfolio Component Structure

This portfolio has been refactored into a clean, modular structure for better maintainability and organization.

## 📁 File Structure

```
src/
├── app/
│   └── page.tsx                 # Main page (now clean and minimal)
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx       # Navigation bar component
│   │   └── Footer.tsx           # Footer component
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero/landing section
│   │   ├── AboutSection.tsx     # About me section
│   │   ├── ProjectsSection.tsx  # Projects showcase
│   │   ├── ExperienceSection.tsx # Work experience timeline
│   │   └── ContactSection.tsx   # Contact information
│   └── ui/                      # Reusable UI components (existing)
└── data/
    ├── constants.ts             # Shared constants and personal info
    ├── projects.ts              # Projects data and types
    └── experience.ts            # Experience data and types
```

## 🎯 Benefits of This Structure

1. **Modularity**: Each section is a separate component, making it easy to modify individual parts
2. **Reusability**: Components can be easily reused or moved around
3. **Maintainability**: Data is separated from presentation logic
4. **Scalability**: Easy to add new sections or modify existing ones
5. **Type Safety**: TypeScript interfaces for all data structures

## 📝 How to Update Content

### Personal Information
Edit `src/data/constants.ts` to update:
- Name, title, location
- Social media links
- Quick stats

### Projects
Edit `src/data/projects.ts` to:
- Add new projects
- Update existing project details
- Modify project structure

### Experience
Edit `src/data/experience.ts` to:
- Add new work experience
- Update job details and achievements
- Modify experience structure

### Styling
Each component can be styled independently:
- `HeroSection.tsx` - Landing page styling
- `AboutSection.tsx` - About section styling
- `ProjectsSection.tsx` - Project cards styling
- `ExperienceSection.tsx` - Timeline styling
- `ContactSection.tsx` - Contact form styling

## 🔧 Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add it to the main page in `src/app/page.tsx`
3. Update navigation if needed in `src/components/layout/Navigation.tsx`

## 🎨 Customization

### Colors and Themes
- Update Tailwind classes in individual components
- Modify the gradient backgrounds in `AboutSection.tsx`
- Adjust hover effects and animations

### Layout
- Each section is self-contained and can be reordered
- Responsive design is handled within each component
- Grid layouts can be modified independently

## 📱 Responsive Design

All components are built with responsive design in mind:
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

## 🚀 Performance

- Components are lazy-loaded by default
- Images are optimized with Next.js Image component
- Minimal bundle size with efficient imports

## 🔄 State Management

- Local state is managed within components (e.g., expanded jobs in ExperienceSection)
- No external state management needed for current features
- Easy to add global state if needed in the future 