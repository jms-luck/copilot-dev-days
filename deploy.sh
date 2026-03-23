#!/bin/bash
# Quick deployment script - Choose your platform

echo "GitHub Copilot Dev Days Chennai - Deployment Script"
echo "===================================================="
echo ""
echo "Choose your deployment platform:"
echo "1) Vercel (Recommended - zero config)"
echo "2) Netlify (Easy drag & drop)"
echo "3) GitHub Pages"
echo "4) Azure Static Web Apps"
echo "5) Manual (just build)"
echo ""

read -p "Enter choice (1-5): " choice

case $choice in
  1)
    echo "Deploying to Vercel..."
    npm install -g vercel
    vercel --prod
    ;;
  2)
    echo "Deploying to Netlify..."
    npm install -g netlify-cli
    npm run build
    netlify deploy --prod --dir=dist
    ;;
  3)
    echo "Preparing for GitHub Pages..."
    npm run build
    echo "Push dist folder to gh-pages branch"
    ;;
  4)
    echo "Connect your repository to Azure Static Web Apps"
    echo "Settings:"
    echo "  App location: ."
    echo "  Build preset: Vite"
    echo "  Output location: dist"
    ;;
  5)
    echo "Building for manual deployment..."
    npm run build
    echo "✓ Build complete! Upload the 'dist' folder to your server."
    ;;
  *)
    echo "Invalid choice"
    exit 1
    ;;
esac
