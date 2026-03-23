# GitHub Copilot Dev Days Chennai 2026

Event website for GitHub Copilot Dev Days at St. Joseph's Institute of Technology, Chennai.

## 📋 Overview

**Event Date:** March 28, 2026  
**Time:** 8:00 AM - 1:00 PM IST  
**Venue:** St. Joseph's Institute of Technology, Chennai  
**Capacity:** 200 students

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

The app will run on `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 Deployment

The `dist/` folder contains the production build. Deploy using:

- **Vercel:** `vercel`
- **Netlify:** Drag & drop the `dist/` folder
- **GitHub Pages:** Push to `gh-pages` branch
- **Azure Static Web Apps:** Connect your repository

### Environment Variables

Create `.env.production` for production URLs:

```
VITE_LUMA_EVENT_URL=https://luma.com/6zv3rbj1
VITE_SPEAKER_CALL_URL=https://www.linkedin.com/company/github/jobs/
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 📝 Tech Stack

- **React 19** with Hooks
- **Vite** for fast builds
- **React Router** for navigation
- **CSS** for styling

## 📄 License

Copyright 2026 GitHub Copilot Dev Days Chennai.
