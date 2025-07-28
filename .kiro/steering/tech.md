# Technology Stack

## Frontend Framework
- **HTML5** with semantic markup and accessibility features
- **Tailwind CSS** via CDN for styling and responsive design
- **Vanilla JavaScript ES6+** with class-based architecture
- **Component-based architecture** for maintainable code

## Key Libraries & Dependencies
- Tailwind CSS (via CDN): `https://cdn.tailwindcss.com`
- No build system or package manager required
- Modular JavaScript files for separation of concerns

## Architecture
- **Modular file structure**: Separate HTML, CSS, JS, and data files
- **Component-based UI**: Reusable component generators
- **Tab-based navigation**: Cached content loading for performance
- **Modal/lightbox functionality**: Media display with keyboard support
- **Responsive design**: Mobile-first approach with progressive enhancement

## File Structure
```
/
├── index.html          # Main HTML file
├── data.js            # Model and project data
├── components.js      # UI component generators
├── app.js            # Main application logic
├── styles.css        # Custom CSS enhancements
├── server.py         # Local development server
└── assets/           # Media files
    └── projects/     # Project images/videos
```

## Development Workflow

### Local Development
```bash
# Recommended: Use Python server for proper CORS handling
python server.py

# Alternative methods
python -m http.server 8080
npx http-server
```

### Performance Optimizations
- **Tab content caching**: Load once, display instantly
- **Lazy loading**: Content loaded only when needed
- **Minimal DOM manipulation**: Efficient event delegation
- **No artificial delays**: Removed loading delays for speed

### Testing
- Cross-browser testing in Chrome, Firefox, Safari, Edge
- Mobile responsiveness testing across different screen sizes
- Accessibility testing for keyboard navigation and screen readers
- Performance testing for tab switching and content loading

### Deployment
- Static file hosting (no server-side processing required)
- Can be deployed to GitHub Pages, Netlify, Vercel, AWS S3
- No build process needed - direct file deployment

## Code Style Guidelines
- **ES6+ JavaScript**: Use modern syntax with classes and modules
- **Semantic HTML5**: Proper ARIA labels and roles for accessibility
- **Tailwind CSS**: Utility-first approach with custom CSS for animations
- **Component pattern**: Reusable generators for consistent UI
- **Error handling**: Graceful degradation and user feedback
- **Performance first**: Optimize for speed and responsiveness