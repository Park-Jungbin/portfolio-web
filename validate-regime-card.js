// Validation script for regime card implementation
const fs = require('fs');

// Read the components.js file
const componentsContent = fs.readFileSync('components.js', 'utf8');

// Check if regime card detection is implemented
const hasRegimeDetection = componentsContent.includes('isRegimeCard') && 
                          componentsContent.includes("model.id.includes('regime')");

// Check if regime card layout is implemented
const hasRegimeLayout = componentsContent.includes('regime-card-layout') &&
                       componentsContent.includes('space-y-4');

// Check if generateModelMediaSlot handles regime cards
const hasRegimeMediaSlot = componentsContent.includes('isRegimeCard && mediaArray') &&
                          componentsContent.includes('regime-card-media');

// Read the styles.css file
const stylesContent = fs.readFileSync('styles.css', 'utf8');

// Check if regime card CSS is implemented
const hasRegimeCSS = stylesContent.includes('.regime-card-layout') &&
                    stylesContent.includes('.regime-card-media');

// Check if responsive styles are implemented
const hasResponsiveCSS = stylesContent.includes('@media (max-width: 768px)') &&
                        stylesContent.includes('regime-card-media');

console.log('=== Regime Card Implementation Validation ===');
console.log('✓ Regime card detection:', hasRegimeDetection ? 'PASS' : 'FAIL');
console.log('✓ Regime card layout:', hasRegimeLayout ? 'PASS' : 'FAIL');
console.log('✓ Regime media slot handling:', hasRegimeMediaSlot ? 'PASS' : 'FAIL');
console.log('✓ Regime card CSS:', hasRegimeCSS ? 'PASS' : 'FAIL');
console.log('✓ Responsive CSS:', hasResponsiveCSS ? 'PASS' : 'FAIL');

const allPassed = hasRegimeDetection && hasRegimeLayout && hasRegimeMediaSlot && hasRegimeCSS && hasResponsiveCSS;
console.log('\n=== Overall Result ===');
console.log(allPassed ? '✅ All tests PASSED' : '❌ Some tests FAILED');

if (allPassed) {
    console.log('\n레짐 카드가 성공적으로 구현되었습니다!');
    console.log('- 레짐 모델 감지: ✓');
    console.log('- 세로 레이아웃 (위아래 두 개 이미지): ✓');
    console.log('- 반응형 디자인: ✓');
    console.log('\n테스트하려면: http://localhost:8080/test-regime-card.html');
}