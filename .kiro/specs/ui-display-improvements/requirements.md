# Requirements Document

## Introduction

This feature improves the user interface display for performance cards and media thumbnails in the portfolio website. The improvements focus on simplifying performance card details, showing media thumbnails instead of placeholder text, and optimizing market regime card layout for horizontal images.

## Requirements

### Requirement 1

**User Story:** As a portfolio visitor, I want to see simplified performance card details that are always visible, so that I can quickly understand model descriptions without clicking to expand.

#### Acceptance Criteria

1. WHEN viewing performance cards THEN the expandable details section SHALL be simplified to show only "Description" instead of "가정", "검증", and "추가 시각화"
2. WHEN viewing performance cards THEN the Description content SHALL be visible by default without requiring a click to expand
3. WHEN the Description is displayed THEN it SHALL use the existing "assumptions" data from the model
4. WHEN viewing the simplified layout THEN the card SHALL maintain its professional appearance and responsive behavior

### Requirement 2

**User Story:** As a portfolio visitor, I want to see actual image and video thumbnails in both performance and project sections, so that I can preview media content before clicking.

#### Acceptance Criteria

1. WHEN viewing performance cards with media THEN actual image thumbnails SHALL be displayed instead of placeholder text like "[누적 수익률 차트]"
2. WHEN viewing project cards with media THEN actual image/video thumbnails SHALL be displayed instead of placeholder text
3. WHEN viewing the profile section THEN the profile photo SHALL be displayed as a thumbnail
4. WHEN media files are not available THEN appropriate fallback behavior SHALL be maintained
5. WHEN thumbnails are displayed THEN they SHALL maintain proper aspect ratios and responsive sizing

### Requirement 3

**User Story:** As a portfolio visitor, I want market regime cards to display one large horizontal image optimally, so that I can see the full chart visualization clearly.

#### Acceptance Criteria

1. WHEN viewing market regime model cards THEN they SHALL display one large horizontal image instead of multiple smaller images
2. WHEN the horizontal image is displayed THEN it SHALL utilize the full width area previously occupied by two images
3. WHEN viewing on different screen sizes THEN the large horizontal image SHALL maintain proper aspect ratio and responsive behavior
4. WHEN no image is available THEN appropriate fallback behavior SHALL be maintained

### Requirement 4

**User Story:** As a portfolio visitor, I want all media display improvements to maintain the existing responsive design and accessibility standards, so that the site works well on all devices.

#### Acceptance Criteria

1. WHEN viewing on mobile devices THEN all thumbnail displays SHALL scale appropriately and remain touch-friendly
2. WHEN using keyboard navigation THEN all media elements SHALL remain accessible
3. WHEN using screen readers THEN appropriate alt text and ARIA labels SHALL be provided for all media elements
4. WHEN viewing on different browsers THEN media display SHALL be consistent across Chrome, Firefox, Safari, and Edge