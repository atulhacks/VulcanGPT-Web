# GitHub Pages Deployment Guide for Vulcan GPT Website

This guide will walk you through deploying your Vulcan GPT React website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed
- Your Vulcan GPT website project ready

## Step 1: Prepare Your Repository

### 1.1 Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `vulcan-gpt-website`)
5. Make it public (required for free GitHub Pages)
6. Don't initialize with README, .gitignore, or license (we'll add these)
7. Click "Create repository"

### 1.2 Clone and Setup Local Repository

```bash
# Clone your empty repository
git clone https://github.com/YOUR_USERNAME/vulcan-gpt-website.git
cd vulcan-gpt-website

# Copy your Vulcan GPT website files to this directory
# (Copy all files from your current project)

# Initialize git if not already done
git init
```

## Step 2: Install GitHub Pages Dependencies

### 2.1 Install gh-pages Package

```bash
# Install gh-pages as a dev dependency
npm install --save-dev gh-pages
```

### 2.2 Update package.json

Add the following to your `package.json`:

```json
{
  "name": "vulcan-gpt-website",
  "homepage": "https://YOUR_USERNAME.github.io/vulcan-gpt-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Configure Vite for GitHub Pages

### 3.1 Update vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vulcan-gpt-website/', // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### 3.2 Update Router Configuration

Update your `src/App.tsx` to handle GitHub Pages routing:

```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Change BrowserRouter to use basename
function App() {
  return (
    <Router basename="/vulcan-gpt-website"> {/* Add basename */}
      <div className="min-h-screen bg-black text-white">
        {/* Rest of your app */}
      </div>
    </Router>
  );
}
```

## Step 4: Create Deployment Files

### 4.1 Create .github/workflows/deploy.yml

Create the directory structure and file:

```bash
mkdir -p .github/workflows
```

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4.2 Create .gitignore

```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/
```

## Step 5: Deploy to GitHub Pages

### 5.1 Commit and Push Your Code

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Vulcan GPT website"

# Add remote origin (if not already added)
git remote add origin https://github.com/YOUR_USERNAME/vulcan-gpt-website.git

# Push to main branch
git push -u origin main
```

### 5.2 Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 5.3 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

## Step 6: Configure Custom Domain (Optional)

### 6.1 Add Custom Domain

If you have a custom domain:

1. In your repository settings, go to "Pages"
2. Under "Custom domain", enter your domain (e.g., `vulcangpt.dev`)
3. Check "Enforce HTTPS"

### 6.2 Create CNAME File

Create `public/CNAME` file:

```
vulcangpt.dev
```

### 6.3 Configure DNS

Add these DNS records with your domain provider:

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

## Step 7: Verify Deployment

### 7.1 Check GitHub Actions

1. Go to your repository
2. Click "Actions" tab
3. Verify the deployment workflow completed successfully

### 7.2 Access Your Website

Your website will be available at:
- `https://YOUR_USERNAME.github.io/vulcan-gpt-website`
- Or your custom domain if configured

## Step 8: Update and Redeploy

### 8.1 Making Updates

```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update website content"
git push origin main

# The GitHub Action will automatically redeploy
```

### 8.2 Manual Redeploy

```bash
# If using manual deployment
npm run deploy
```

## Troubleshooting

### Common Issues and Solutions

#### 1. 404 Error on Page Refresh

**Problem:** React Router pages show 404 when accessed directly.

**Solution:** Create `public/404.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Vulcan GPT</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

And update your `index.html`:

```html
<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

#### 2. Assets Not Loading

**Problem:** CSS, JS, or images not loading.

**Solution:** Ensure `base` in `vite.config.ts` matches your repository name.

#### 3. Build Fails

**Problem:** GitHub Action fails during build.

**Solution:** Check the Actions log and ensure all dependencies are in `package.json`.

#### 4. Routing Issues

**Problem:** Navigation doesn't work properly.

**Solution:** Ensure `basename` in Router matches your repository path.

## Best Practices

### 1. Environment Variables

For production builds, create `.env.production`:

```env
VITE_APP_TITLE=Vulcan GPT
VITE_APP_DESCRIPTION=Advanced AI Framework
```

### 2. SEO Optimization

Ensure your `index.html` has proper meta tags:

```html
<meta name="description" content="Vulcan GPT - Advanced AI Framework">
<meta property="og:title" content="Vulcan GPT">
<meta property="og:description" content="Advanced AI Framework">
<meta property="og:url" content="https://YOUR_USERNAME.github.io/vulcan-gpt-website">
```

### 3. Performance

- Enable gzip compression in your build
- Optimize images before deployment
- Use lazy loading for components

### 4. Security

- Keep dependencies updated
- Use HTTPS (enabled by default on GitHub Pages)
- Validate all external links

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Monitoring

- Check GitHub Actions regularly
- Monitor website performance
- Update content as needed

## Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review GitHub Actions logs
3. Check browser console for errors
4. Verify all file paths are correct

Your Vulcan GPT website should now be successfully deployed to GitHub Pages!