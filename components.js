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
        
        <!-- Chart Placeholders -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="chart-placeholder h-56 rounded-lg">[누적 수익률 차트]</div>
          <div class="chart-placeholder h-56 rounded-lg">[드로다운/롤링Sharpe 차트]</div>
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

    return `
      <article class="project-card rounded-xl border p-4 bg-white" data-project-id="${project.id}">
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-semibold">
            ${project.title}
            ${badgeHtml}
          </h3>
          <div class="flex items-center gap-2">
            ${statusBadge}
            <span class="text-xs text-gray-500">${project.period}</span>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-2 leading-relaxed">${project.description}</p>
        
        <!-- Media Grid -->
        ${project.media && project.media.length > 0 ? `
        <div class="mt-4 grid grid-cols-3 gap-2">
          ${project.media.map(media => this.generateMediaButton(media)).join('')}
        </div>
        ` : ''}
      </article>
    `;
  }

  // Generate media button
  static generateMediaButton(media) {
    const mediaTypeText = media.type === 'video' ? '영상' : '이미지';
    
    return `
      <button class="media-btn aspect-video rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-500 hover:ring-2 hover:ring-blue-500 transition-all duration-200"
              data-media-type="${media.type}" 
              data-media-src="${media.src}"
              data-media-title="${media.title}" 
              aria-haspopup="dialog"
              aria-label="${media.title} 보기">
        ${mediaTypeText}
      </button>
    `;
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