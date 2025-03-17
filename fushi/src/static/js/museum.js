document.addEventListener('DOMContentLoaded', function() {
    // Gallery navigation
    const galleryNavButtons = document.querySelectorAll('.gallery-nav');
    const galleryContainers = document.querySelectorAll('.gallery-container');
    
    // Initialize with first gallery active
    document.getElementById('design-gallery').classList.add('active');
    
    galleryNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and containers
            galleryNavButtons.forEach(btn => btn.classList.remove('active'));
            galleryContainers.forEach(container => container.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the gallery to show
            const galleryToShow = button.getAttribute('data-gallery');
            
            // Show the selected gallery with animation
            const selectedGallery = document.getElementById(`${galleryToShow}-gallery`);
            selectedGallery.classList.add('active');
        });
    });
    
    // Art pieces hover effects
    const artPieces = document.querySelectorAll('.art-piece');
    
    artPieces.forEach(piece => {
        piece.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        piece.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Lightbox functionality for art pieces
    artPieces.forEach(piece => {
        piece.addEventListener('click', function() {
            // Create lightbox elements
            const lightbox = document.createElement('div');
            lightbox.className = 'art-lightbox';
            
            const lightboxContent = document.createElement('div');
            lightboxContent.className = 'lightbox-content';
            
            // Clone the SVG art and info
            const artClone = this.querySelector('.art-image').cloneNode(true);
            const infoClone = this.querySelector('.art-info').cloneNode(true);
            
            // Create close button
            const closeBtn = document.createElement('span');
            closeBtn.innerHTML = '&times;';
            closeBtn.className = 'lightbox-close';
            
            // Append elements to lightbox
            lightboxContent.appendChild(closeBtn);
            lightboxContent.appendChild(artClone);
            lightboxContent.appendChild(infoClone);
            lightbox.appendChild(lightboxContent);
            
            // Add lightbox to body
            document.body.appendChild(lightbox);
            
            // Prevent scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
            
            // Show lightbox with animation
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
            
            // Close lightbox when clicking close button or outside the content
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
            function closeLightbox() {
                lightbox.style.opacity = '0';
                document.body.style.overflow = '';
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                }, 300);
            }
        });
    });
});