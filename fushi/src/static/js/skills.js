document.addEventListener('DOMContentLoaded', function() {
    // Toggle skill details when clicking on skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all other cards
            skillCards.forEach(otherCard => {
                if (otherCard !== this && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });
            
            // Toggle active class on clicked card
            this.classList.toggle('active');
        });
    });
    
    // Animate skill progress bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function resetSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }
    
    // Observer for skill categories to trigger animations
    const skillCategories = document.querySelectorAll('.skill-category-wrapper');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When category comes into view, animate its skill bars
                const bars = entry.target.querySelectorAll('.skill-progress');
                bars.forEach(bar => {
                    const width = bar.getAttribute('style').split(':')[1].trim();
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
                
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observe each skill category
    skillCategories.forEach(category => {
        observer.observe(category);
    });
    
    // Initialize all skill bars to 0 width
    resetSkillBars();
});