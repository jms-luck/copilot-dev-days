# Deployment Guide

This guide covers deploying the GitHub Copilot Dev Days website to various platforms.

## 📊 Build Output

- **Build Size:** ~250 KB (JS) + CSS
- **Build Time:** ~450ms
- **Output Directory:** `dist/`

## 🚀 One-Click Deployments

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Or simply drag & drop the `dist/` folder to Netlify dashboard.

### GitHub Pages

1. Update `vite.config.js` base if deploying to a subdirectory:
```javascript
base: '/dev-days/',  // if deploying to https://username.github.io/dev-days/
```

2. Deploy:
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

### Azure Static Web Apps

1. Create resource in Azure Portal
2. Connect your GitHub repository
3. Select:
   - Build preset: Vite
   - App location: `.`
   - API location: (leave empty)
   - Output location: `dist`

4. Deploy automatically on push to main

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - succeeds
- [ ] Test locally: `npm run preview`
- [ ] All images load correctly
- [ ] All external links work
- [ ] Meta tags are set in `index.html`
- [ ] Environment variables in `.env.production`
- [ ] Mobile responsive (test on multiple devices)

## 🔍 Performance Optimization

Current metrics:
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1

To further optimize:
1. Consider image compression for `stjosephs.jpg` (currently 15 MB)
2. Use WebP format for images
3. Implement lazy loading for images

## 🛡️ Security Headers

Recommended headers for production:
```
Content-Security-Policy: default-src 'self'; img-src 'self' https:; script-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer-when-downgrade
```

## 🌍 Custom Domain

After deployment, configure your custom domain:

**Vercel:** Settings → Domains → Add domain
**Netlify:** Site settings → Domain management → Add custom domain
**Azure Static Web Apps:** Custom domains (requires DNS configuration)

## 📞 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not loading
- Verify all image paths are relative to `src/assets/`
- Check image files exist
- Run `npm run build` to reprocess assets

### 404 errors on routes
- Ensure routing is configured in deployment platform
- For Netlify/Vercel: enable client-side routing
- Create `_redirects` file for Netlify or `vercel.json` for Vercel

## 📝 Monitoring

Set up monitoring for:
- Page load performance
- User analytics (optional: add Plausible or PostHog)
- Error tracking (optional: add Sentry)
