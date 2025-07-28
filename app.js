// Main application logic for the portfolio website

class PortfolioApp {
  constructor() {
    this.currentTab = 'kr';
    this.isLoading = false;
    this.loadedTabs = new Set(); // Track which tabs have been loaded
    this.init();
  }

  // Initialize the application
  init() {
    this.bindEvents();
    this.loadInitialContent();
    this.setupAccessibility();
  }

  // Bind all event listeners
  bindEvents() {
    // Tab navigation
    this.bindTabEvents();
    
    // Mobile menu
    this.bindMobileMenuEvents();
    
    // Model card interactions
    this.bindModelCardEvents();
    
    // Media lightbox
    this.bindMediaEvents();
    
    // Smooth scrolling
    this.bindSmoothScrolling();
    
    // Keyboard navigation
    this.bindKeyboardEvents();
  }

  // Tab navigation events
  bindTabEvents() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const tabId = e.target.dataset.tab;
        this.switchTab(tabId);
      });
      
      // Keyboard support for tabs
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const tabId = e.target.dataset.tab;
          this.switchTab(tabId);
        }
      });
    });
  }

  // Mobile menu events
  bindMobileMenuEvents() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          mobileMenuBtn.setAttribute('aria-expanded', 'true');
          mobileMenuBtn.setAttribute('aria-label', '메뉴 닫기');
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileMenuBtn.setAttribute('aria-label', '메뉴 열기');
        }
      });
    }
  }

  // Model card interaction events
  bindModelCardEvents() {
    document.addEventListener('click', (e) => {
      const cardHeader = e.target.closest('[data-card-toggle]');
      if (cardHeader) {
        e.preventDefault();
        const targetId = cardHeader.dataset.cardToggle;
        this.toggleModelDetails(targetId, cardHeader);
      }
    });

    // Keyboard support for model cards
    document.addEventListener('keydown', (e) => {
      const cardHeader = e.target.closest('[data-card-toggle]');
      if (cardHeader && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        const targetId = cardHeader.dataset.cardToggle;
        this.toggleModelDetails(targetId, cardHeader);
      }
    });
  }

  // Media lightbox events
  bindMediaEvents() {
    document.addEventListener('click', (e) => {
      const mediaBtn = e.target.closest('[data-media-type]');
      if (mediaBtn) {
        e.preventDefault();
        this.openMediaModal(mediaBtn);
      }
    });

    // Modal close events - simplified and more reliable approach
    const modal = document.getElementById('media-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        // Close if clicking on background or close button
        if (e.target === modal || e.target.closest('[data-close]')) {
          e.preventDefault();
          this.closeMediaModal();
        }
      });

      // Keyboard support for modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          this.closeMediaModal();
        }
      });
    }
  }

  // Smooth scrolling for navigation links
  bindSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update focus for accessibility
          targetElement.focus({ preventScroll: true });
        }
      });
    });
  }

  // Keyboard navigation support
  bindKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
      // Tab navigation with arrow keys
      if (e.target.classList.contains('tab-btn')) {
        const tabs = Array.from(document.querySelectorAll('.tab-btn'));
        const currentIndex = tabs.indexOf(e.target);
        
        let nextIndex;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        }
        
        if (nextIndex !== undefined) {
          tabs[nextIndex].focus();
        }
      }
    });
  }

  // Setup accessibility features
  setupAccessibility() {
    // Add skip link functionality
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        const target = document.getElementById('main-content');
        if (target) {
          e.preventDefault();
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Set initial ARIA states
    this.updateTabAria();
  }

  // Load initial content
  loadInitialContent() {
    // Load immediately for faster initial response
    this.switchTab('kr'); // Load Korean stocks by default
    this.loadProjects();
    this.loadHobbies();
  }

  // Switch between tabs
  switchTab(tabId) {
    if (this.isLoading) return;
    
    this.currentTab = tabId;
    
    // Update tab button states immediately for responsive feel
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    
    // Update tab content visibility immediately
    document.querySelectorAll('.tab-content').forEach(content => {
      const isActive = content.id === `tab-${tabId}`;
      content.classList.toggle('hidden', !isActive);
    });
    
    // Only load content if not already loaded
    if (!this.loadedTabs.has(tabId)) {
      this.loadTabContent(tabId);
    }
    
    this.updateTabAria();
  }

  // Load content for specific tab
  async loadTabContent(tabId) {
    const container = document.getElementById(`tab-${tabId}`);
    if (!container) return;

    try {
      this.showLoading(container);
      
      // Check if DATA is available
      if (typeof DATA === 'undefined') {
        throw new Error('DATA is not defined. Make sure data.js is loaded.');
      }
      
      // Remove artificial delay for faster response
      const models = DATA.models[tabId];
      if (!models || models.length === 0) {
        container.innerHTML = ComponentGenerator.generateEmptyState();
        this.loadedTabs.add(tabId);
        return;
      }

      const html = models.map(model => ComponentGenerator.generateModelCard(model)).join('');
      container.innerHTML = html;
      
      // Mark this tab as loaded
      this.loadedTabs.add(tabId);
      
    } catch (error) {
      console.error('Error loading tab content:', error);
      container.innerHTML = ComponentGenerator.generateErrorState(`데이터 로딩 오류: ${error.message}`);
    } finally {
      this.isLoading = false;
    }
  }

  // Load projects section
  async loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    try {
      // Check if DATA is available
      if (typeof DATA === 'undefined') {
        throw new Error('DATA is not defined. Make sure data.js is loaded.');
      }
      
      const projects = DATA.projects;
      if (!projects || projects.length === 0) {
        container.innerHTML = ComponentGenerator.generateEmptyState('프로젝트가 없습니다.');
        return;
      }

      const html = projects.map(project => ComponentGenerator.generateProjectCard(project)).join('');
      container.innerHTML = html;
      
    } catch (error) {
      console.error('Error loading projects:', error);
      container.innerHTML = ComponentGenerator.generateErrorState(`데이터 로딩 오류: ${error.message}`);
    }
  }

  // Load hobbies section
  async loadHobbies() {
    const container = document.getElementById('hobbies-container');
    if (!container) return;

    try {
      // Check if DATA is available
      if (typeof DATA === 'undefined') {
        throw new Error('DATA is not defined. Make sure data.js is loaded.');
      }
      
      const hobbies = DATA.hobbies;
      if (!hobbies || hobbies.length === 0) {
        container.innerHTML = ComponentGenerator.generateEmptyState('취미 프로젝트가 없습니다.');
        return;
      }

      const html = hobbies.map(hobby => ComponentGenerator.generateProjectCard(hobby)).join('');
      container.innerHTML = html;
      
    } catch (error) {
      console.error('Error loading hobbies:', error);
      container.innerHTML = ComponentGenerator.generateErrorState(`데이터 로딩 오류: ${error.message}`);
    }
  }

  // Show loading state
  showLoading(container) {
    this.isLoading = true;
    container.innerHTML = ComponentGenerator.generateLoadingState();
  }

  // Toggle model details panel
  toggleModelDetails(targetId, headerElement) {
    const detailsPanel = document.querySelector(targetId);
    if (!detailsPanel) return;

    const isExpanded = !detailsPanel.classList.contains('hidden');
    
    if (isExpanded) {
      detailsPanel.classList.add('hidden');
      detailsPanel.classList.remove('expanded');
      headerElement.setAttribute('aria-expanded', 'false');
    } else {
      detailsPanel.classList.remove('hidden');
      detailsPanel.classList.add('expanded');
      headerElement.setAttribute('aria-expanded', 'true');
    }
  }

  // Open media modal
  openMediaModal(mediaButton) {
    const modal = document.getElementById('media-modal');
    const container = document.getElementById('media-container');
    const caption = document.getElementById('media-caption');
    
    if (!modal || !container || !caption) return;

    const mediaType = mediaButton.dataset.mediaType;
    const mediaSrc = mediaButton.dataset.mediaSrc;
    const mediaTitle = mediaButton.dataset.mediaTitle;

    // Create media element
    let mediaElement;
    if (mediaType === 'video') {
      mediaElement = `
        <video controls class="w-full h-auto max-h-[70vh] rounded-lg" onclick="event.stopPropagation();">
          <source src="${mediaSrc}" type="video/mp4">
          <p>브라우저가 비디오를 지원하지 않습니다.</p>
        </video>
      `;
    } else {
      mediaElement = `
        <img src="${mediaSrc}" alt="${mediaTitle}" class="w-full h-auto max-h-[70vh] object-contain rounded-lg" onclick="event.stopPropagation();">
      `;
    }

    container.innerHTML = mediaElement;
    caption.textContent = mediaTitle;

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Focus management
    const closeButton = modal.querySelector('[data-close]');
    if (closeButton) {
      closeButton.focus();
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  // Close media modal
  closeMediaModal() {
    const modal = document.getElementById('media-modal');
    if (!modal) return;

    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Clear media content
    const container = document.getElementById('media-container');
    if (container) {
      container.innerHTML = '';
    }
  }

  // Update ARIA attributes for tabs
  updateTabAria() {
    document.querySelectorAll('.tab-content').forEach(content => {
      const isVisible = !content.classList.contains('hidden');
      content.setAttribute('aria-hidden', !isVisible);
    });
  }

  // Utility method to handle errors gracefully
  handleError(error, context = 'Unknown') {
    console.error(`Error in ${context}:`, error);
    
    // You could add error reporting here
    // this.reportError(error, context);
  }

  // Method to report errors (placeholder for future implementation)
  reportError(error, context) {
    // Implementation for error reporting service
    // e.g., send to analytics or logging service
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    window.portfolioApp = new PortfolioApp();
  } catch (error) {
    console.error('Failed to initialize portfolio app:', error);
    
    // Fallback: show error message to user
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = `
        <div class="text-center py-12">
          <h2 class="text-xl font-semibold text-red-600 mb-4">애플리케이션 로딩 오류</h2>
          <p class="text-gray-600 mb-4">페이지를 새로고침해 주세요.</p>
          <button onclick="location.reload()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            새로고침
          </button>
        </div>
      `;
    }
  }
});

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PortfolioApp;
}