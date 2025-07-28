// Comprehensive validation script for enhanced project card layout
// This script can be run in browser console or as a Node.js script

class ProjectCardValidator {
  constructor() {
    this.testResults = [];
    this.errors = [];
    this.warnings = [];
  }

  // Test 1: Projects with tech stack data
  testProjectsWithTechStack() {
    console.log('🧪 Testing projects with tech stack data...');
    
    const testProjects = [
      {
        id: 'test-crypto',
        title: '크립토 트레이딩 연구 환경 개발',
        status: '진행중',
        period: '2025.7~',
        description: 'Test description',
        techStack: ['Python', 'Hummingbot', 'Pandas', 'Docker'],
        media: []
      }
    ];

    testProjects.forEach(project => {
      const cardHtml = ComponentGenerator.generateProjectCard(project);
      
      // Check if tech stack container exists
      if (cardHtml.includes('tech-stack-container')) {
        this.testResults.push('✅ Tech stack container generated');
      } else {
        this.errors.push('❌ Tech stack container missing');
      }
      
      // Check if tech stack tags are generated
      if (cardHtml.includes('tech-stack-tag')) {
        this.testResults.push('✅ Tech stack tags generated');
      } else {
        this.errors.push('❌ Tech stack tags missing');
      }
      
      // Check if all tech stack items are included
      const techStackCount = (cardHtml.match(/tech-stack-tag/g) || []).length;
      if (techStackCount === project.techStack.length) {
        this.testResults.push(`✅ All ${project.techStack.length} tech stack items rendered`);
      } else {
        this.errors.push(`❌ Expected ${project.techStack.length} tech stack items, found ${techStackCount}`);
      }
    });
  }

  // Test 2: Projects without tech stack data
  testProjectsWithoutTechStack() {
    console.log('🧪 Testing projects without tech stack data...');
    
    const testProjects = [
      {
        id: 'test-no-tech',
        title: '수강신청 첫클릭 프로그램',
        status: '완료',
        period: '2024.8',
        description: 'Test description',
        media: []
      },
      {
        id: 'test-empty-tech',
        title: '빈 배열 테스트',
        status: '진행중',
        period: '2025.1',
        description: 'Test description',
        techStack: [],
        media: []
      },
      {
        id: 'test-null-tech',
        title: 'Null 테스트',
        status: '완료',
        period: '2024.12',
        description: 'Test description',
        techStack: null,
        media: []
      }
    ];

    testProjects.forEach(project => {
      const cardHtml = ComponentGenerator.generateProjectCard(project);
      
      // Should not have tech stack tags when no tech stack data
      const techStackCount = (cardHtml.match(/tech-stack-tag/g) || []).length;
      if (techStackCount === 0) {
        this.testResults.push(`✅ No tech stack tags for project without tech stack: ${project.id}`);
      } else {
        this.errors.push(`❌ Found ${techStackCount} tech stack tags for project without tech stack: ${project.id}`);
      }
      
      // Layout should still be consistent
      if (cardHtml.includes('project-card-header') && cardHtml.includes('project-title-row')) {
        this.testResults.push(`✅ Layout structure maintained for project without tech stack: ${project.id}`);
      } else {
        this.errors.push(`❌ Layout structure broken for project without tech stack: ${project.id}`);
      }
    });
  }

  // Test 3: Layout consistency across different project types
  testLayoutConsistency() {
    console.log('🧪 Testing layout consistency across different project types...');
    
    const testProjects = [
      // Project with everything
      {
        id: 'full-project',
        title: '완전한 프로젝트',
        status: '완료',
        badge: '우수상',
        period: '2024.1-2024.12',
        description: 'Full project description',
        techStack: ['React', 'Node.js', 'MongoDB'],
        media: [
          { type: 'image', src: '/test1.jpg', title: 'Test 1' },
          { type: 'video', src: '/test2.mp4', title: 'Test 2' }
        ]
      },
      // Minimal project
      {
        id: 'minimal-project',
        title: '최소 프로젝트',
        status: '진행중',
        period: '2025.1',
        description: 'Minimal project description',
        media: []
      }
    ];

    testProjects.forEach(project => {
      const cardHtml = ComponentGenerator.generateProjectCard(project);
      
      // Check required structure elements
      const requiredElements = [
        'project-card',
        'project-card-header',
        'project-title-row',
        'project-status-row'
      ];
      
      requiredElements.forEach(element => {
        if (cardHtml.includes(element)) {
          this.testResults.push(`✅ ${element} present in ${project.id}`);
        } else {
          this.errors.push(`❌ ${element} missing in ${project.id}`);
        }
      });
    });
  }

  // Test 4: Media button sizing validation
  testMediaButtonSizing() {
    console.log('🧪 Testing enhanced media button sizing...');
    
    const testProjects = [
      {
        id: 'single-media',
        title: '단일 미디어',
        status: '완료',
        period: '2024.10',
        description: 'Single media test',
        media: [{ type: 'video', src: '/test.mp4', title: 'Test Video' }]
      },
      {
        id: 'multiple-media',
        title: '다중 미디어',
        status: '완료',
        period: '2024.9',
        description: 'Multiple media test',
        media: [
          { type: 'image', src: '/test1.jpg', title: 'Test 1' },
          { type: 'image', src: '/test2.jpg', title: 'Test 2' },
          { type: 'video', src: '/test3.mp4', title: 'Test 3' }
        ]
      }
    ];

    testProjects.forEach(project => {
      const cardHtml = ComponentGenerator.generateProjectCard(project);
      
      // Check for enhanced media button class
      if (cardHtml.includes('media-btn-large')) {
        this.testResults.push(`✅ Enhanced media buttons used in ${project.id}`);
      } else {
        this.errors.push(`❌ Enhanced media buttons missing in ${project.id}`);
      }
      
      // Check media grid structure
      if (cardHtml.includes('media-grid')) {
        this.testResults.push(`✅ Media grid structure present in ${project.id}`);
      } else {
        this.errors.push(`❌ Media grid structure missing in ${project.id}`);
      }
      
      // Verify media count class
      const mediaCount = project.media.length;
      if (cardHtml.includes(`media-count-${mediaCount}`)) {
        this.testResults.push(`✅ Correct media count class (${mediaCount}) in ${project.id}`);
      } else {
        this.warnings.push(`⚠️ Media count class might be missing in ${project.id}`);
      }
    });
  }

  // Test 5: Status and period positioning
  testStatusPositioning() {
    console.log('🧪 Testing status and period information positioning...');
    
    const testProjects = [
      {
        id: 'status-test-1',
        title: '상태 테스트 1',
        status: '진행중',
        period: '2025.1~',
        description: 'Status test',
        media: []
      },
      {
        id: 'status-test-2',
        title: '상태 테스트 2',
        status: '완료',
        badge: '우수상',
        period: '2024.12',
        description: 'Status with badge test',
        media: []
      }
    ];

    testProjects.forEach(project => {
      const cardHtml = ComponentGenerator.generateProjectCard(project);
      
      // Check status row structure
      if (cardHtml.includes('project-status-row')) {
        this.testResults.push(`✅ Status row structure present in ${project.id}`);
      } else {
        this.errors.push(`❌ Status row structure missing in ${project.id}`);
      }
      
      // Check badge positioning (should be with title, not in status row)
      if (project.badge) {
        const titleRowIndex = cardHtml.indexOf('project-title-row');
        const statusRowIndex = cardHtml.indexOf('project-status-row');
        const badgeIndex = cardHtml.indexOf('badge-award');
        
        if (badgeIndex > titleRowIndex && badgeIndex < statusRowIndex) {
          this.testResults.push(`✅ Badge correctly positioned with title in ${project.id}`);
        } else {
          this.errors.push(`❌ Badge positioning incorrect in ${project.id}`);
        }
      }
    });
  }

  // Test 6: Accessibility features validation
  testAccessibilityFeatures() {
    console.log('🧪 Testing accessibility features...');
    
    const testProject = {
      id: 'accessibility-test',
      title: '접근성 테스트',
      status: '완료',
      badge: '우수상',
      period: '2024.12',
      description: 'Accessibility test project',
      techStack: ['React', 'Node.js'],
      media: [
        { type: 'image', src: '/test.jpg', title: 'Test Image' },
        { type: 'video', src: '/test.mp4', title: 'Test Video' }
      ]
    };

    const cardHtml = ComponentGenerator.generateProjectCard(testProject);
    
    // Check for ARIA attributes and semantic elements
    const accessibilityChecks = [
      { pattern: /role="button"/, name: 'Button roles' },
      { pattern: /tabindex="0"/, name: 'Keyboard navigation' },
      { pattern: /aria-label="[^"]*"/, name: 'ARIA labels' },
      { pattern: /<article/, name: 'Semantic article element' }
    ];

    accessibilityChecks.forEach(check => {
      if (check.pattern.test(cardHtml)) {
        this.testResults.push(`✅ ${check.name} implemented`);
      } else {
        this.warnings.push(`⚠️ ${check.name} might be missing`);
      }
    });

    // Check for screen reader content
    if (cardHtml.includes('sr-only')) {
      this.testResults.push('✅ Screen reader only content present');
    } else {
      this.warnings.push('⚠️ Screen reader only content might be missing');
    }
  }

  // Test 7: CSS class validation
  testCSSClasses() {
    console.log('🧪 Testing CSS class implementation...');
    
    const testProject = {
      id: 'css-test',
      title: 'CSS 테스트',
      status: '완료',
      period: '2024.12',
      description: 'CSS class test',
      techStack: ['JavaScript', 'CSS'],
      media: [{ type: 'image', src: '/test.jpg', title: 'Test' }]
    };

    const cardHtml = ComponentGenerator.generateProjectCard(testProject);
    
    // Check for required CSS classes
    const requiredClasses = [
      'project-card',
      'project-card-header',
      'project-title-row',
      'project-status-row',
      'tech-stack-container',
      'tech-stack-tag',
      'media-btn-large',
      'media-grid'
    ];

    requiredClasses.forEach(className => {
      if (cardHtml.includes(className)) {
        this.testResults.push(`✅ CSS class '${className}' present`);
      } else {
        this.errors.push(`❌ CSS class '${className}' missing`);
      }
    });
  }

  // Run all tests
  runAllTests() {
    console.log('🚀 Starting comprehensive project card validation...\n');
    
    this.testProjectsWithTechStack();
    this.testProjectsWithoutTechStack();
    this.testLayoutConsistency();
    this.testMediaButtonSizing();
    this.testStatusPositioning();
    this.testAccessibilityFeatures();
    this.testCSSClasses();
    
    this.printResults();
  }

  // Print test results
  printResults() {
    console.log('\n📊 Test Results Summary:');
    console.log('========================');
    
    console.log(`\n✅ Passed Tests (${this.testResults.length}):`);
    this.testResults.forEach(result => console.log(result));
    
    if (this.warnings.length > 0) {
      console.log(`\n⚠️ Warnings (${this.warnings.length}):`);
      this.warnings.forEach(warning => console.log(warning));
    }
    
    if (this.errors.length > 0) {
      console.log(`\n❌ Failed Tests (${this.errors.length}):`);
      this.errors.forEach(error => console.log(error));
    }
    
    console.log('\n📈 Overall Results:');
    console.log(`Total Tests: ${this.testResults.length + this.warnings.length + this.errors.length}`);
    console.log(`Passed: ${this.testResults.length}`);
    console.log(`Warnings: ${this.warnings.length}`);
    console.log(`Failed: ${this.errors.length}`);
    
    const successRate = (this.testResults.length / (this.testResults.length + this.errors.length)) * 100;
    console.log(`Success Rate: ${successRate.toFixed(1)}%`);
    
    if (this.errors.length === 0) {
      console.log('\n🎉 All critical tests passed! The enhanced project card layout is working correctly.');
    } else {
      console.log('\n🔧 Some tests failed. Please review the implementation.');
    }
  }
}

// Manual responsive testing instructions
function printResponsiveTestInstructions() {
  console.log('\n📱 Manual Responsive Testing Instructions:');
  console.log('==========================================');
  console.log('1. Open the test file in a browser');
  console.log('2. Use browser dev tools to test these breakpoints:');
  console.log('   - 320px: Very small mobile');
  console.log('   - 640px: Small mobile to tablet');
  console.log('   - 768px: Tablet portrait');
  console.log('   - 1024px: Tablet landscape');
  console.log('   - 1440px: Desktop');
  console.log('3. Verify:');
  console.log('   - Tech stack stacks properly on small screens');
  console.log('   - Media buttons maintain proper touch targets (44px+)');
  console.log('   - Text remains readable at all sizes');
  console.log('   - Status/period information is properly positioned');
}

// Keyboard navigation testing instructions
function printKeyboardTestInstructions() {
  console.log('\n⌨️ Keyboard Navigation Testing Instructions:');
  console.log('============================================');
  console.log('1. Use Tab key to navigate through all interactive elements');
  console.log('2. Use Shift+Tab to navigate backwards');
  console.log('3. Use Enter or Space to activate buttons');
  console.log('4. Use Escape to close modals');
  console.log('5. Verify:');
  console.log('   - All interactive elements are focusable');
  console.log('   - Focus indicators are visible');
  console.log('   - Tab order is logical');
  console.log('   - No keyboard traps exist');
}

// Export for use in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ProjectCardValidator, printResponsiveTestInstructions, printKeyboardTestInstructions };
} else if (typeof window !== 'undefined') {
  window.ProjectCardValidator = ProjectCardValidator;
  window.printResponsiveTestInstructions = printResponsiveTestInstructions;
  window.printKeyboardTestInstructions = printKeyboardTestInstructions;
}

// Auto-run if in browser environment with required dependencies
if (typeof window !== 'undefined' && typeof ComponentGenerator !== 'undefined') {
  console.log('🔧 Running automated tests...');
  const validator = new ProjectCardValidator();
  validator.runAllTests();
  
  printResponsiveTestInstructions();
  printKeyboardTestInstructions();
  
  console.log('\n💡 To run manual tests, open test-project-cards.html in your browser');
}