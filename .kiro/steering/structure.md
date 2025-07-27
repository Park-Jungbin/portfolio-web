# Project Structure

## File Organization

```
/
├── .kiro/                    # Kiro configuration and steering
│   └── steering/            # AI assistant guidance documents
├── .vscode/                 # VS Code workspace settings
│   └── settings.json       # Editor configuration
└── Sketch.html             # Main application file (single-page app)
```

## Main Application Structure

The entire application is contained within `Sketch.html` and follows this internal structure:

### HTML Sections
- **Header**: Sticky navigation with smooth scroll links
- **Hero Section**: Profile introduction with photo and narrative
- **Performance Section**: Main content area with tabbed model displays
- **Projects Section**: Vertical list of research projects with media
- **Contact Section**: Contact information and links

### CSS Organization (within HTML)
- Tailwind utility classes for styling
- Custom CSS for specific interactions and animations
- Responsive breakpoints: `sm:`, `md:`, `lg:` prefixes

### JavaScript Organization (within HTML)
- Tab switching functionality
- Card expansion/collapse logic
- Media lightbox system
- Smooth scrolling navigation
- Event delegation for dynamic content

## Content Structure

### Performance Models
- **Korean Stocks**: KR-Momentum, KR-MeanReversion, KR-StatArb, KR-Value
- **US Stocks**: US-MeanReversion, US-Momentum, US-StatArb, US-Pairs, US-Quality
- **Market Regime**: Regime-Switch

### Model Card Components
- Header with model name and benchmark
- Performance metrics (Sharpe, Max DD, OOS period)
- Placeholder charts for visualization
- Expandable details panel with assumptions and validation info

## Development Conventions

### Naming Patterns
- Use kebab-case for HTML IDs and classes
- Use camelCase for JavaScript variables and functions
- Use descriptive names for model IDs (e.g., `details-kr-mom`)

### Responsive Design
- Mobile-first approach with progressive enhancement
- Grid layouts that stack on smaller screens
- Consistent spacing using Tailwind's spacing scale

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for modal interactions