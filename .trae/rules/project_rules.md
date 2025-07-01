every 10 prompts I ask you, do a backup of the project on GitHub.
every time we make a modification, deploy automatically to Firebase.
github repository is already created and here is it: https://github.com/gabrieledellacroce/sbam-website
the project is for now in english language only

## Site Structure Rules
- The site MUST use folder-based structure with index.html files instead of .html files
- Main website: main-site/index.html (NOT main-site.html)
- Dashboard: dashboard/index.html (NOT dashboard.html)
- 404 page: 404/index.html (NOT 404.html)
- Root index.html remains the password protection page
- All internal links must use clean URLs (e.g., /main-site/, /dashboard/, /404/)
- Image and CSS paths must be relative to the folder structure (e.g., ../images/, ../style.css)
- ALL pages MUST include the favicon (images/favicon.svg) with proper relative paths

## SBAM Official Color Palette
All pages MUST use the official SBAM color palette in Tailwind configuration:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#E738C7',  // SBAM Magenta
                cyan: '#00E7FF',     // SBAM Cyan
                violet: '#8B16C9',   // SBAM Violet
                dark: '#0A0A0A',     // SBAM Dark
            }
        }
    }
}
```
- **Primary (#E738C7)**: Main brand color, used for buttons, links, accents
- **Cyan (#00E7FF)**: Secondary accent color, used in gradients and highlights
- **Violet (#8B16C9)**: Tertiary color, used for variety and depth
- **Dark (#0A0A0A)**: Primary dark color for text and backgrounds

NEVER use different color values. Always maintain brand consistency across all pages.

## Performance and Speed Rules
**MAXIMUM PRIORITY: SITE SPEED AND NAVIGATION PERFORMANCE**

The ultimate goal of this project is to achieve the fastest possible website and navigation experience. All development decisions must prioritize speed and performance:

### Core Performance Principles:
- **Speed First**: Every feature, component, and optimization must be evaluated based on its impact on loading speed
- **Minimal Dependencies**: Use only essential libraries and frameworks. Prefer vanilla JavaScript over heavy frameworks when possible
- **Optimized Assets**: All images must be optimized (prefer SVG for icons, WebP for photos)
- **Efficient Code**: Write lean, efficient code that executes quickly
- **Fast Navigation**: SPA navigation must be instantaneous with no loading delays

### Technical Requirements:
- **Lazy Loading**: Implement lazy loading for all non-critical content
- **Code Splitting**: Split JavaScript bundles to load only necessary code
- **Caching Strategy**: Implement aggressive caching for static assets
- **Minification**: All CSS and JavaScript must be minified in production
- **CDN Usage**: Use CDNs for external libraries (Tailwind, Firebase, etc.)
- **Preloading**: Preload critical resources and next-page content

### Performance Monitoring:
- Target: Page load time < 2 seconds
- Target: Navigation between pages < 100ms
- Target: First Contentful Paint < 1.5 seconds
- Target: Lighthouse Performance Score > 95

### Development Guidelines:
- Always test performance impact before implementing new features
- Use `requestAnimationFrame()` for DOM updates instead of timeouts
- Minimize DOM queries and cache element references
- Avoid blocking operations in the main thread
- Implement efficient event handling with delegation when possible

**Remember: If a feature slows down the site, it should be reconsidered or optimized until it meets performance standards.**