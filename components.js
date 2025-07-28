// Component generators for the portfolio website

class ComponentGenerator {
  // Generate model card HTML
  static generateModelCard(model) {
    return `
      <div class="model-card border rounded-2xl p-6 shadow-sm mb-6" data-model-id="${model.id}">
        <div class="model-card-header flex justify-between items-start gap-4 cursor-pointer select-none"
             data-card-toggle="#details-${model.id}" 
             role="button" 
             tabindex="0" 
             aria-expanded="false"
             aria-controls="details-${model.id}">
          <div>
            <h3 class="text-xl font-semibold">${model.name}</h3>
            <p class="text-sm text-gray-600 mt-1">BM: ${model.benchmark}</p>
          </div>
          <div class="text-xs text-gray-500 font-mono tabular-nums">Capacity ${model.capacity}</div>
        </div>
        
        <!-- Performance Metrics -->
        <div class="mt-4">
          ${this.generateSimpleMetrics(model.metrics)}
        </div>
        
        <!-- Chart/Media Grid -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          ${this.generateModelMediaSlot(model.media, 0, '누적 수익률 차트')}
          ${this.generateModelMediaSlot(model.media, 1, '드로다운/롤링Sharpe 차트')}
        </div>
        
        <!-- Details Panel -->
        <div id="details-${model.id}" class="details-panel mt-4 border-t pt-4 hidden" role="region" aria-labelledby="details-${model.id}-title">
          <div class="grid md:grid-cols-3 gap-6 text-sm">
            <div class="space-y-2">
              <div class="text-gray-500 font-medium">가정</div>
              <ul class="list-disc pl-4 text-gray-700 space-y-1">
                ${model.assumptions.map(assumption => `<li>${assumption}</li>`).join('')}
              </ul>
            </div>
            <div class="space-y-2">
              <div class="text-gray-500 font-medium">검증</div>
              <ul class="list-disc pl-4 text-gray-700 space-y-1">
                ${model.validation.map(validation => `<li>${validation}</li>`).join('')}
              </ul>
            </div>
            <div class="space-y-2">
              <div class="text-gray-500 font-medium">추가 시각화</div>
              <div class="chart-placeholder h-24 rounded">[월별 수익 히트맵]</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Generate simple performance metrics
  static generateSimpleMetrics(metrics) {
    return `
      <div class="flex flex-wrap gap-6 text-sm">
        <div class="flex flex-col">
          <span class="text-gray-500 text-xs font-medium mb-1">In-Sample</span>
          <div class="flex gap-4">
            <span class="text-gray-700">Sharpe <strong class="text-gray-900">${metrics.inSample.sharpe}</strong></span>
            <span class="text-gray-700">CAGR <strong class="text-gray-900">${metrics.inSample.cagr}</strong></span>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-500 text-xs font-medium mb-1">Out-Sample</span>
          <div class="flex gap-4">
            <span class="text-gray-700">Sharpe <strong class="text-gray-900">${metrics.outSample.sharpe}</strong></span>
            <span class="text-gray-700">CAGR <strong class="text-gray-900">${metrics.outSample.cagr}</strong></span>
          </div>
        </div>
      </div>
    `;
  }

  // Generate performance metrics (legacy - keeping for compatibility)
  static generateMetrics(metrics) {
    return this.generateSimpleMetrics(metrics);
  }

  // Generate project card HTML
  static generateProjectCard(project) {
    const badgeHtml = project.badge ? `
      <span class="badge badge-award ml-2">${project.badge}</span>
    ` : '';

    const statusBadge = project.status === '진행중' ? 
      `<span class="badge badge-info">${project.status}</span>` : 
      `<span class="badge badge-success">${project.status}</span>`;

    // Generate tech stack display
    const techStackHtml = project.techStack && Array.isArray(project.techStack) && project.techStack.length > 0 ? `
      <div class="tech-stack-container flex flex-wrap gap-1 sm:justify-end">
        ${project.techStack.filter(tech => tech && typeof tech === 'string').map(tech => `<span class="tech-stack-tag">${tech}</span>`).join('')}
      </div>
    ` : '';

    return `
      <article class="project-card rounded-xl border p-4 bg-white" data-project-id="${project.id}">
        <!-- Project Card Header -->
        <div class="project-card-header mb-3">
          <!-- Title Row: Project title and tech stack side-by-side -->
          <div class="project-title-row flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-base leading-tight">
                ${project.title}
                ${badgeHtml}
              </h3>
            </div>
            ${techStackHtml}
          </div>
          
          <!-- Status Row: Status badge and period information below title on left side -->
          <div class="project-status-row flex items-center gap-2 flex-wrap">
            ${statusBadge}
            <span class="text-xs text-gray-500 font-medium leading-relaxed">${project.period}</span>
          </div>
        </div>
        
        <!-- Content Layout: Description + Media -->
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Description (1/3 width) -->
          <div class="w-full md:w-1/3">
            <p class="text-sm text-gray-600 leading-relaxed">${project.description}</p>
          </div>
          
          <!-- Media Grid (2/3 width) -->
          ${project.media && Array.isArray(project.media) && project.media.length > 0 ? `
          <div class="w-full md:w-2/3 flex justify-center md:justify-start">
            <div class="media-grid media-count-${project.media.length} grid grid-cols-3 gap-3 w-full max-w-lg">
              ${project.media.filter(media => media && typeof media === 'object').map(media => this.generateMediaButton(media)).join('')}
            </div>
          </div>
          ` : ''}
        </div>
      </article>
    `;
  }

  // Generate media button
  static generateMediaButton(media) {
    // Validate media object
    if (!media || typeof media !== 'object') {
      return '';
    }
    
    const mediaType = media.type || 'image';
    const mediaTypeText = mediaType === 'video' ? '영상' : '이미지';
    const mediaSrc = media.src || '';
    const mediaTitle = media.title || `${mediaTypeText} 보기`;
    
    return `
      <button class="media-btn-large"
              data-media-type="${mediaType}" 
              data-media-src="${mediaSrc}"
              data-media-title="${mediaTitle}" 
              aria-haspopup="dialog"
              aria-label="${mediaTitle}"
              role="button"
              tabindex="0">
        <span class="sr-only">${mediaTitle}</span>
        <span aria-hidden="true">${mediaTypeText}</span>
      </button>
    `;
  }

  // Generate model media slot (chart placeholder or media button)
  static generateModelMediaSlot(mediaArray, index, placeholderText) {
    if (mediaArray && Array.isArray(mediaArray) && mediaArray[index]) {
      const media = mediaArray[index];
      const mediaType = media.type || 'image';
      const mediaSrc = media.src || '';
      const mediaTitle = media.title || placeholderText;
      
      return `
        <button class="media-btn-chart h-56 rounded-lg"
                data-media-type="${mediaType}" 
                data-media-src="${mediaSrc}"
                data-media-title="${mediaTitle}" 
                aria-haspopup="dialog"
                aria-label="${mediaTitle}"
                role="button"
                tabindex="0">
          <span class="sr-only">${mediaTitle}</span>
          <span aria-hidden="true">${mediaTitle}</span>
        </button>
      `;
    } else {
      return `<div class="chart-placeholder h-56 rounded-lg">[${placeholderText}]</div>`;
    }
  }

  // Generate loading state
  static generateLoadingState() {
    return `
      <div class="flex items-center justify-center py-12">
        <div class="loading-spinner rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span class="ml-3 text-gray-600">로딩 중...</span>
      </div>
    `;
  }

  // Generate error state
  static generateErrorState(message = '데이터를 불러올 수 없습니다.') {
    return `
      <div class="flex flex-col items-center justify-center py-12 text-center">
        <div class="text-red-500 mb-2">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <p class="text-gray-600">${message}</p>
        <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onclick="location.reload()">
          다시 시도
        </button>
      </div>
    `;
  }

  // Generate empty state
  static generateEmptyState(message = '표시할 데이터가 없습니다.') {
    return `
      <div class="flex flex-col items-center justify-center py-12 text-center">
        <div class="text-gray-400 mb-2">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-2.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7"></path>
          </svg>
        </div>
        <p class="text-gray-600">${message}</p>
      </div>
    `;
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ComponentGenerator;
}