# Design Document

## Overview

This design document outlines the improvements to the project card layout in the portfolio website. The changes focus on three main areas: enlarging the media display area, repositioning status/duration information for better information hierarchy, and adding a tech stack display capability. The design maintains the existing responsive principles while enhancing visual impact and information organization.

## Architecture

### Current Structure Analysis
The existing project card uses a flex layout with:
- Header section containing title, badges, status, and period
- Content section with description (1/3 width) and media grid (2/3 width)
- Media buttons in a 3-column grid with small aspect-video containers

### Proposed Structure
The new structure will reorganize the layout as follows:
- Header section with title and tech stack side-by-side
- Status/period information positioned below the title
- Enlarged media area with improved button sizing
- Maintained responsive behavior with mobile-first approach

## Components and Interfaces

### Project Card Component Structure

```javascript
// Enhanced project card structure
{
  header: {
    titleRow: {
      left: "project title + completion badge",
      right: "tech stack display area"
    },
    statusRow: {
      left: "status badge + period information",
      right: "empty (reserved for future use)"
    }
  },
  content: {
    description: "project description (maintains current width)",
    media: "enlarged media grid with bigger buttons"
  }
}
```

### Tech Stack Data Structure

The project data structure will be extended to include tech stack information:

```javascript
// Extended project data model
{
  id: 'project-id',
  title: 'Project Title',
  status: 'Status',
  badge: 'Optional Badge',
  period: 'Time Period',
  description: 'Description',
  techStack: ['React', 'Node.js', 'MongoDB'], // New field
  media: [...]
}
```

### Media Button Enhancements

Media buttons will be enlarged with the following specifications:
- Minimum height increased from 60px to 80px
- Improved aspect ratio handling for better visual balance
- Enhanced hover states and accessibility features
- Maintained 3-column grid layout with better spacing

## Data Models

### Project Data Model Extension

```javascript
const projectSchema = {
  id: String,           // Unique identifier
  title: String,        // Project title
  status: String,       // '진행중' | '완료'
  badge: String,        // Optional completion badge
  period: String,       // Time period (e.g., '2024.10')
  description: String,  // Project description
  techStack: [String],  // New: Array of technology names
  media: [{
    type: String,       // 'image' | 'video'
    src: String,        // Media file path
    title: String       // Media title/description
  }]
}
```

### CSS Class Structure

```css
/* New CSS classes for enhanced layout */
.project-card-header {
  /* Container for title row and status row */
}

.project-title-row {
  /* Flex container for title/badge and tech stack */
}

.project-status-row {
  /* Container for status badge and period */
}

.tech-stack-container {
  /* Container for tech stack display */
}

.tech-stack-tag {
  /* Individual tech stack item styling */
}

.media-btn-large {
  /* Enhanced media button with larger size */
}
```

## Error Handling

### Missing Tech Stack Data
- When `techStack` array is empty or undefined, the tech stack area remains empty
- No error messages or placeholders are shown
- Layout maintains proper spacing regardless of tech stack presence

### Media Display Fallbacks
- Existing media fallback behavior is maintained
- Empty media arrays continue to hide the media section
- Media loading errors are handled by existing error states

### Responsive Layout Degradation
- On very small screens, tech stack may wrap to new line
- Status information maintains readability at all screen sizes
- Media buttons scale appropriately while maintaining minimum touch targets

## Testing Strategy

### Visual Regression Testing
- Compare before/after screenshots of project cards
- Test with various combinations of data (with/without tech stack, different media counts)
- Verify layout consistency across different project types

### Responsive Testing
- Test layout behavior at key breakpoints (320px, 768px, 1024px, 1440px)
- Verify touch target sizes on mobile devices
- Ensure text remains readable at all screen sizes

### Accessibility Testing
- Verify keyboard navigation through enhanced layout
- Test screen reader compatibility with new elements
- Ensure focus indicators work properly on enlarged media buttons
- Validate ARIA labels and semantic structure

### Cross-browser Testing
- Test layout consistency in Chrome, Firefox, Safari, Edge
- Verify CSS Grid and Flexbox behavior across browsers
- Test hover states and transitions

### Performance Testing
- Measure layout shift impact of changes
- Verify no performance regression in card rendering
- Test with large numbers of projects to ensure scalability

## Implementation Phases

### Phase 1: Data Structure Enhancement
- Add tech stack field to project data
- Update sample data with tech stack information
- Ensure backward compatibility with existing data

### Phase 2: Layout Restructuring
- Modify project card HTML structure
- Implement new CSS classes for layout
- Update responsive behavior

### Phase 3: Media Enhancement
- Increase media button sizes
- Improve hover states and accessibility
- Test media grid layout with new dimensions

### Phase 4: Polish and Testing
- Fine-tune spacing and typography
- Comprehensive testing across devices and browsers
- Performance optimization if needed

## Design Decisions and Rationales

### Tech Stack Positioning
**Decision**: Place tech stack to the right of the project title
**Rationale**: Creates visual balance and utilizes horizontal space efficiently while keeping related information (title and technologies) grouped together

### Status Information Relocation
**Decision**: Move status/period below title instead of top-right corner
**Rationale**: Improves information hierarchy by grouping project metadata together and creates a more logical reading flow

### Media Button Size Increase
**Decision**: Increase minimum height from 60px to 80px
**Rationale**: Improves visual impact and touch accessibility while maintaining the 3-column grid layout that works well with the current design

### Responsive Strategy
**Decision**: Maintain mobile-first approach with progressive enhancement
**Rationale**: Ensures the design works well on all devices and follows the existing design system patterns

### Tech Stack Display Format
**Decision**: Use simple text-based tags rather than icons or complex styling
**Rationale**: Maintains consistency with the clean, minimal design aesthetic and ensures fast loading and accessibility