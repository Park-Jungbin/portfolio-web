# Design Document

## Overview

This design document outlines improvements to the user interface display for performance cards and media thumbnails in the portfolio website. The changes focus on three main areas: simplifying performance card expandable details to show only "Description" that's always visible, displaying actual media thumbnails instead of placeholder text, and optimizing market regime cards for horizontal image display. The design maintains the existing responsive principles while enhancing visual clarity and user experience.

## Architecture

### Current Structure Analysis

**Performance Cards:**
- Currently use expandable details panel with three sections: "가정", "검증", "추가 시각화"
- Details are hidden by default and require clicking to expand
- Media slots show placeholder text like "[누적 수익률 차트]" instead of actual thumbnails

**Project Cards:**
- Media buttons show generic text labels instead of image/video previews
- Use 3-column grid layout for media items

**Market Regime Cards:**
- Currently use the same 2-slot media grid as other performance cards
- Not optimized for horizontal chart images

### Proposed Structure

**Performance Cards:**
- Simplified details section showing only "Description" 
- Description visible by default without requiring expansion
- Media slots display actual image/video thumbnails when available
- Market regime cards use single large horizontal image layout

**Project Cards:**
- Media buttons display actual image/video thumbnails
- Maintain existing responsive grid behavior

## Components and Interfaces

### Performance Card Component Changes

```javascript
// Modified generateModelCard structure
{
  header: "existing header structure",
  metrics: "existing metrics display", 
  media: {
    // For regular models (kr, us)
    slot1: "thumbnail or placeholder",
    slot2: "thumbnail or placeholder"
    
    // For regime models  
    singleSlot: "large horizontal thumbnail"
  },
  description: {
    // Always visible, no expansion needed
    content: "model.description data as descriptive text"
  }
}
```

### Media Display Enhancement

```javascript
// Enhanced media slot generation
generateModelMediaSlot(mediaArray, index, placeholderText, isRegimeCard = false) {
  if (isRegimeCard && mediaArray && mediaArray.length > 0) {
    // Single large horizontal image for regime cards
    return generateLargeHorizontalMedia(mediaArray[0]);
  } else if (mediaArray && mediaArray[index]) {
    // Show actual thumbnail
    return generateMediaThumbnail(mediaArray[index]);
  } else {
    // Fallback placeholder
    return generatePlaceholder(placeholderText);
  }
}
```

### Thumbnail Display Logic

```javascript
// New thumbnail generation methods
generateMediaThumbnail(media) {
  const thumbnailSrc = media.src;
  const mediaType = media.type; // 'image' or 'video'
  
  return `
    <button class="media-btn-chart" style="background-image: url('${thumbnailSrc}')">
      <div class="thumbnail-overlay">
        ${mediaType === 'video' ? '▶' : '🖼'}
        <span>${media.title}</span>
      </div>
    </button>
  `;
}
```

## Data Models

### Model Data Structure

The existing model data structure already contains the necessary information:

```javascript
{
  id: 'model-id',
  name: 'Model Name',
  description: 'Descriptive text about the model', // Used as Description
  assumptions: ['assumption1', 'assumption2'], // Not used in new design, deprecate
  media: [
    { type: 'image', src: 'path/to/image.png', title: 'Chart Title' }
  ]
}
```

### CSS Class Structure

```css
/* New classes for thumbnail display */
.media-thumbnail {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.thumbnail-overlay {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.regime-card-media {
  /* Single large horizontal image for regime cards */
  grid-column: 1 / -1;
  aspect-ratio: 16/9;
  min-height: 200px;
}

.description-always-visible {
  /* Always visible description styling */
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}
```

## Error Handling

### Missing Media Files
- When media files don't exist, fall back to existing placeholder behavior
- Show appropriate error states for broken image links
- Maintain existing accessibility features

### Regime Card Media Handling
- If regime card has no media, show single placeholder
- If regime card has multiple media items, show only the first one
- Maintain responsive behavior for horizontal images

### Thumbnail Loading
- Implement lazy loading for thumbnail images
- Show loading states while thumbnails are being fetched
- Graceful degradation for unsupported media types

## Testing Strategy

### Visual Testing
- Compare before/after screenshots of all card types
- Test thumbnail display with various image sizes and aspect ratios
- Verify regime card horizontal layout on different screen sizes

### Functionality Testing
- Test media modal opening from thumbnails
- Verify description visibility without expansion
- Test fallback behavior for missing media files

### Responsive Testing
- Test thumbnail display at key breakpoints
- Verify regime card horizontal image scaling
- Ensure touch targets remain accessible on mobile

### Accessibility Testing
- Verify alt text and ARIA labels for thumbnails
- Test keyboard navigation with new layout
- Ensure screen reader compatibility with always-visible descriptions

## Implementation Phases

### Phase 1: Performance Card Description Simplification
- Remove expandable behavior from details panel
- Show only "Description" section using existing description data
- Update CSS to make description always visible

### Phase 2: Thumbnail Display Implementation
- Modify media slot generation to show actual images
- Implement thumbnail overlay styling
- Add fallback behavior for missing media

### Phase 3: Market Regime Card Optimization
- Create special layout for regime cards with single large image
- Implement horizontal image responsive behavior
- Test with existing regime model data

### Phase 4: Testing and Polish
- Comprehensive testing across devices and browsers
- Performance optimization for image loading
- Accessibility validation and improvements

## Design Decisions and Rationales

### Always-Visible Description
**Decision**: Make description visible by default instead of expandable
**Rationale**: Improves information accessibility and reduces interaction friction. Users can immediately see model descriptions without additional clicks.

### Thumbnail Display
**Decision**: Show actual image/video thumbnails instead of placeholder text
**Rationale**: Provides immediate visual preview of content, improving user experience and making the interface more engaging and informative.

### Single Horizontal Image for Regime Cards
**Decision**: Use one large horizontal image instead of two smaller slots
**Rationale**: Regime analysis charts are typically wide and benefit from larger display area. Single image utilizes space more effectively for this content type.

### Simplified Details Panel
**Decision**: Remove "검증" and "추가 시각화" sections, keep only "Description"
**Rationale**: Streamlines the interface by focusing on the most essential information (model description as descriptive text) while reducing visual complexity.

### Responsive Thumbnail Behavior
**Decision**: Maintain existing responsive grid behavior for thumbnails
**Rationale**: Ensures consistency with current design system and maintains good user experience across all device sizes.

### Background Image Approach for Thumbnails
**Decision**: Use CSS background-image for thumbnails with overlay text
**Rationale**: Provides better control over image display, maintains aspect ratios, and allows for overlay text while preserving accessibility features.