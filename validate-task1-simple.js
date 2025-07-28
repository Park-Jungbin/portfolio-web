// Simple validation script for Task 1 implementation
// This script tests the generated HTML string directly

// Load the required modules
const fs = require('fs');

// Read the files as strings
const dataContent = fs.readFileSync('./data.js', 'utf8');
const componentsContent = fs.readFileSync('./components.js', 'utf8');

// Extract DATA object from data.js
const dataMatch = dataContent.match(/const DATA = ({[\s\S]*?});/);
if (!dataMatch) {
    console.error('❌ Could not extract DATA from data.js');
    process.exit(1);
}

const DATA = eval(`(${dataMatch[1]})`);

// Extract ComponentGenerator class from components.js
const componentMatch = componentsContent.match(/class ComponentGenerator {([\s\S]*?)^}/m);
if (!componentMatch) {
    console.error('❌ Could not extract ComponentGenerator from components.js');
    process.exit(1);
}

// Create a mock ComponentGenerator with the generateModelCard method
const generateModelCardMatch = componentsContent.match(/static generateModelCard\(model\) {([\s\S]*?)^  }/m);
if (!generateModelCardMatch) {
    console.error('❌ Could not extract generateModelCard method');
    process.exit(1);
}

// Mock the ComponentGenerator methods
const ComponentGenerator = {
    generateSimpleMetrics: function(metrics) {
        return `<div class="metrics">${JSON.stringify(metrics)}</div>`;
    },
    generateModelMediaSlot: function(mediaArray, index, placeholderText) {
        return `<div class="media-slot">${placeholderText}</div>`;
    }
};

// Add the generateModelCard method
eval(`ComponentGenerator.generateModelCard = function(model) {${generateModelCardMatch[1]}}`);

function validateTask1Implementation() {
    console.log('🧪 Testing Task 1: Simplify performance card details panel\n');
    
    // Test with the first Korean model
    const testModel = DATA.models.kr[0]; // KR-Momentum
    console.log(`Testing with model: ${testModel.name}`);
    
    // Generate the card HTML
    const cardHtml = ComponentGenerator.generateModelCard(testModel);
    
    let passedTests = 0;
    let totalTests = 0;
    
    // Test 1: Check if expandable elements are removed
    totalTests++;
    if (!cardHtml.includes('data-card-toggle')) {
        console.log('✅ PASS: data-card-toggle attribute removed');
        passedTests++;
    } else {
        console.log('❌ FAIL: data-card-toggle attribute still exists');
    }
    
    // Test 2: Check if ARIA expanded attribute is removed
    totalTests++;
    if (!cardHtml.includes('aria-expanded')) {
        console.log('✅ PASS: aria-expanded attribute removed');
        passedTests++;
    } else {
        console.log('❌ FAIL: aria-expanded attribute still exists');
    }
    
    // Test 3: Check if details panel with old structure is removed
    totalTests++;
    if (!cardHtml.includes('details-panel')) {
        console.log('✅ PASS: Old details panel structure removed');
        passedTests++;
    } else {
        console.log('❌ FAIL: Old details panel structure still exists');
    }
    
    // Test 4: Check if new description section exists
    totalTests++;
    if (cardHtml.includes('description-always-visible')) {
        console.log('✅ PASS: New description section exists');
        passedTests++;
    } else {
        console.log('❌ FAIL: New description section not found');
    }
    
    // Test 5: Check if description content is included
    totalTests++;
    if (cardHtml.includes(testModel.description)) {
        console.log('✅ PASS: Description content is included');
        passedTests++;
    } else {
        console.log('❌ FAIL: Description content not found');
        console.log(`   Expected to find: "${testModel.description}"`);
    }
    
    // Test 6: Check if header is no longer clickable (no cursor-pointer, role, tabindex)
    totalTests++;
    const headerMatch = cardHtml.match(/<div class="model-card-header[^>]*>/);
    if (headerMatch) {
        const headerTag = headerMatch[0];
        const hasClickableAttributes = headerTag.includes('cursor-pointer') || 
                                     headerTag.includes('role=') || 
                                     headerTag.includes('tabindex=');
        if (!hasClickableAttributes) {
            console.log('✅ PASS: Header no longer has clickable attributes');
            passedTests++;
        } else {
            console.log('❌ FAIL: Header still has clickable attributes');
            console.log(`   Header tag: ${headerTag}`);
        }
    } else {
        console.log('❌ FAIL: Could not find header element');
    }
    
    // Test 7: Check if "Description" label is present
    totalTests++;
    if (cardHtml.includes('Description')) {
        console.log('✅ PASS: "Description" label is present');
        passedTests++;
    } else {
        console.log('❌ FAIL: "Description" label not found');
    }
    
    // Test 8: Check if old three-section structure is removed
    totalTests++;
    const hasOldSections = cardHtml.includes('가정') || cardHtml.includes('검증') || cardHtml.includes('추가 시각화');
    if (!hasOldSections) {
        console.log('✅ PASS: Old three-section structure removed');
        passedTests++;
    } else {
        console.log('❌ FAIL: Old three-section structure still exists');
    }
    
    // Summary
    console.log(`\n📊 Test Summary: ${passedTests}/${totalTests} tests passed`);
    
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed! Task 1 implementation is correct.');
        console.log('\n📋 Generated HTML preview:');
        console.log('─'.repeat(50));
        console.log(cardHtml.substring(0, 500) + '...');
        console.log('─'.repeat(50));
        return true;
    } else {
        console.log('⚠️  Some tests failed. Please review the implementation.');
        return false;
    }
}

// Run the validation
try {
    validateTask1Implementation();
} catch (error) {
    console.error('❌ Error running validation:', error.message);
    console.error(error.stack);
    process.exit(1);
}