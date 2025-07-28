# Project Structure

## File Organization

```
/
├── .kiro/                    # Kiro configuration and steering
│   └── steering/            # AI assistant guidance documents
├── .vscode/                 # VS Code workspace settings
│   └── settings.json       # Editor configuration
├── assets/                  # Static media files
│   └── projects/           # Project images and videos
├── index.html              # Main HTML file (production)
├── Sketch.html             # Original prototype file
├── data.js                 # Model and project data
├── components.js           # UI component generators
├── app.js                  # Main application logic
├── styles.css              # Custom CSS enhancements
├── server.py               # Local development server
└── README.md               # Project documentation
```

## Main Application Architecture

The application follows a modular structure with clear separation of concerns:

### HTML Structure (index.html)
- **Header**: Sticky navigation with mobile menu support
- **Hero Section**: Profile introduction with photo and narrative
- **Performance Section**: Tabbed model displays with caching
- **Projects Section**: Dynamic project cards with media
- **Contact Section**: Contact information and links
- **Modal**: Media lightbox for project images/videos

### Data Layer (data.js)
```javascript
const DATA = {
  models: {
    kr: [...],      // Korean stock models
    us: [...],      // US stock models  
    regime: [...]   // Market regime models
  },
  projects: [...]   // Project information
}
```

### Component Layer (components.js)
- `ComponentGenerator.generateModelCard()`: Model performance cards
- `ComponentGenerator.generateProjectCard()`: Project showcase cards
- `ComponentGenerator.generateSimpleMetrics()`: Clean metric display
- Error and loading state generators

### Application Layer (app.js)
- `PortfolioApp` class with event handling
- Tab switching with content caching
- Modal management for media display
- Accessibility and keyboard navigation

## Content Structure

### Performance Models
- **Korean Stocks**: KR-Momentum, KR-MeanReversion, KR-StatArb, KR-Value
- **US Stocks**: US-MeanReversion, US-Momentum, US-StatArb, US-Pairs, US-Quality
- **Market Regime**: Regime-Switch

### Model Card Components
- Header with model name, benchmark, and capacity
- **Simplified metrics**: In-Sample and Out-Sample Sharpe/CAGR only
- Chart placeholders for future visualization
- Expandable details panel with assumptions and validation

### Project Cards
- Title with status badges and completion dates
- Description text
- **Selective media**: Only essential images/videos displayed
- Media lightbox for full-size viewing

## Data Schema

### Model Data Structure
```javascript
{
  id: 'model-id',
  name: 'Model Name',
  benchmark: 'Benchmark Index',
  capacity: 'Capacity Range',
  metrics: {
    inSample: { sharpe: '1.85', cagr: '18.4%' },
    outSample: { sharpe: '1.72', cagr: '16.8%' }
  },
  description: 'Model description',
  assumptions: ['assumption1', 'assumption2'],
  validation: ['validation1', 'validation2']
}
```

### Project Data Structure
```javascript
{
  id: 'project-id',
  title: 'Project Title',
  status: 'Status',
  badge: 'Optional Badge',
  period: 'Time Period',
  description: 'Description',
  media: [
    { type: 'image|video', src: 'path', title: 'Title' }
  ]
}
```

## Development Conventions

### Naming Patterns
- **Files**: kebab-case (e.g., `components.js`)
- **CSS Classes**: Tailwind utilities + custom classes
- **JavaScript**: camelCase variables, PascalCase classes
- **IDs**: kebab-case with descriptive names

### Performance Optimizations
- **Tab caching**: Content loaded once and cached
- **Event delegation**: Efficient event handling
- **Lazy loading**: Media loaded only when needed
- **Minimal reflows**: Efficient DOM manipulation

### Accessibility Standards
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA attributes**: Labels, roles, and states
- **Keyboard navigation**: Full keyboard accessibility
- **Focus management**: Proper focus handling in modals
- **Screen reader support**: Descriptive text and labels

### Responsive Design
- **Mobile-first**: Progressive enhancement approach
- **Breakpoints**: `sm:`, `md:`, `lg:` for different screen sizes
- **Flexible layouts**: CSS Grid and Flexbox
- **Touch-friendly**: Appropriate touch targets