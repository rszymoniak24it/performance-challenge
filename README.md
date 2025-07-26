# Senior Frontend Developer Performance Challenge

## Project File Structure

```
/Challenge
├── index.html                # Main HTML entry point
├── /js
│   ├── main.js               # App entry point, event wiring, initialization
│   ├── users.js              # Fetching, filtering users
│   ├── render.js             # Rendering user cards and language filters
│   ├── dom.js                # DOM element references
│   ├── state.js              # App state management (current filters, users, etc.)
│   ├── stats.js              # Stats calculation
│   ├── infiniteScroll.js     # Infinite scroll logic and scroll event throttling
├── /styles
│   ├── main.css              # Main styles for the app
│   ├── vendor.css               # lib imports from node modules
├── /lighthouse # Lighthouse reports
├── /stats # Bundle analysis snapshots
└── ...
```

## Changelog

Removed redundant styles (cdn and files)
Moved critical-styles to body
Removed redundant scripts (cdn and files)
Split main js for readability
Removed scroll and resize listeners for console logs
Removed redundant functions for image processing
Removed dependencies from package json
Added minify in vite config
Removed moment loadash axios (redundant libs)
Removed timestamp from img url to enable image cache
Change eager to lazy option in images
Fix for all languages button to be clickable 
If statement to not re render list if clicked same active button
Implemented infinite scroll if results set to more than 10 
Minified critical css in head
Removed unused styles from main.css

## Documentation

**/lighthouse** contains 3 lighthouse reports and metrics from network tab from 3 different versions
**/stats** contains bundle size analyzer report from 3 different versions

## Technical Requirements

- **Framework**: Vanilla JavaScript (no React/Vue/Angular)
- **Build Tool**: Vite
- **Styling**: CSS/SCSS
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```