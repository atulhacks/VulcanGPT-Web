# Vulcan GPT Website

A modern, responsive website for the Vulcan GPT AI framework built with React, TypeScript, and Tailwind CSS.

## Visit - https://github.com/atulhacks/VulcanGPT-Web/

## Features

- **Modern Design**: Clean, professional interface with dark theme
- **Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Complete meta tags and structured data
- **PWA Ready**: Service worker and manifest for offline functionality

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/VulcanGPT-Web.git
cd VulcanGPT-Web
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Fork or create this repository on GitHub**

2. **Update the homepage in package.json:**
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/VulcanGPT-Web"
   ```

3. **Install gh-pages (if not already installed):**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click Save

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents to your GitHub Pages repository**

3. **Enable GitHub Pages in repository settings**

### Important Notes for GitHub Pages

- The site will be available at: `https://YOUR_USERNAME.github.io/VulcanGPT-Web`
- Replace `YOUR_USERNAME` with your actual GitHub username
- The base path is automatically configured for GitHub Pages
- All routing will work correctly with the included 404.html redirect

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Static assets
└── styles/        # CSS files

public/
├── manifest.json  # PWA manifest
├── robots.txt     # SEO robots file
├── sitemap.xml    # SEO sitemap
└── 404.html       # GitHub Pages SPA redirect
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Lucide React** - Icons

## Customization

1. **Update repository name in vite.config.ts if different:**
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/VulcanGPT-Web/' : '/',
   ```

2. **Update URLs in sitemap.xml and robots.txt**

3. **Replace placeholder content with your actual information**

## License

MIT License - see LICENSE file for details.
