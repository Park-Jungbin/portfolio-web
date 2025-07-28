// Validation script for project media button thumbnails

function validateProjectThumbnails() {
    console.log('🔍 Validating project media button thumbnails...');
    
    // Find all project media buttons
    const mediaButtons = document.querySelectorAll('.media-btn-large');
    console.log(`Found ${mediaButtons.length} media buttons`);
    
    let imageCount = 0;
    let videoCount = 0;
    let thumbnailCount = 0;
    let placeholderCount = 0;
    
    mediaButtons.forEach((button, index) => {
        const mediaType = button.getAttribute('data-media-type');
        const mediaSrc = button.getAttribute('data-media-src');
        const mediaTitle = button.getAttribute('data-media-title');
        const hasThumbnail = button.classList.contains('media-thumbnail');
        
        console.log(`Button ${index + 1}:`, {
            type: mediaType,
            src: mediaSrc,
            title: mediaTitle,
            hasThumbnail: hasThumbnail,
            isVideo: button.classList.contains('video-thumbnail')
        });
        
        if (mediaType === 'image') {
            imageCount++;
        } else if (mediaType === 'video') {
            videoCount++;
        }
        
        if (hasThumbnail) {
            thumbnailCount++;
        } else {
            placeholderCount++;
        }
        
        // Check for video thumbnail elements
        if (mediaType === 'video') {
            const videoElement = button.querySelector('.video-thumbnail-element');
            if (videoElement) {
                console.log(`  ✅ Video element found for: ${mediaTitle}`);
                console.log(`  📹 Video src: ${videoElement.src}`);
            } else {
                console.log(`  ❌ Video element missing for: ${mediaTitle}`);
            }
        }
        
        // Check for thumbnail overlay
        const overlay = button.querySelector('.thumbnail-overlay');
        if (overlay) {
            const indicator = overlay.querySelector('.media-type-indicator');
            const title = overlay.querySelector('.media-title');
            console.log(`  🎨 Overlay found - Indicator: ${indicator?.textContent}, Title: ${title?.textContent}`);
        }
    });
    
    console.log('\n📊 Summary:');
    console.log(`  Images: ${imageCount}`);
    console.log(`  Videos: ${videoCount}`);
    console.log(`  Thumbnails: ${thumbnailCount}`);
    console.log(`  Placeholders: ${placeholderCount}`);
    
    // Test thumbnail loading
    setTimeout(() => {
        console.log('\n🔄 Checking thumbnail loading status...');
        const videoElements = document.querySelectorAll('.video-thumbnail-element');
        videoElements.forEach((video, index) => {
            console.log(`Video ${index + 1}:`, {
                readyState: video.readyState,
                currentTime: video.currentTime,
                duration: video.duration,
                videoWidth: video.videoWidth,
                videoHeight: video.videoHeight
            });
        });
    }, 2000);
    
    return {
        total: mediaButtons.length,
        images: imageCount,
        videos: videoCount,
        thumbnails: thumbnailCount,
        placeholders: placeholderCount
    };
}

// Auto-run validation when page loads
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(validateProjectThumbnails, 1000);
    });
}

// Export for manual testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateProjectThumbnails };
}