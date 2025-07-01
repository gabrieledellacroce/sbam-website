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