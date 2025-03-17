document.addEventListener('DOMContentLoaded', function() {
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Initialize with 'all' selected
    filterProjects('all');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get the filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects
            filterProjects(filterValue);
        });
    });
    
    function filterProjects(category) {
        projectCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'flex';
                
                // Add animation for appearing cards
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else if (card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
                
                // Add animation for appearing cards
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                // Hide after animation
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Feedback Modal Functionality
    const modal = document.getElementById('feedback-modal');
    const feedbackButtons = document.querySelectorAll('.feedback-btn');
    const closeModalBtn = document.querySelector('.close-modal');
    const feedbackForm = document.getElementById('feedback-form');
    const modalProjectName = document.getElementById('modal-project-name');
    
    feedbackButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectName = button.closest('.project-info').querySelector('h3').textContent;
            modalProjectName.textContent = `Projeto: ${projectName}`;
            modal.style.display = 'block';
            
            // Add animation class for modal appearance
            setTimeout(() => {
                modal.classList.add('modal-active');
            }, 10);
        });
    });
    
    closeModalBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('modal-active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
    
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback').value;
        
        // Here you would typically send the data to a server
        console.log('Feedback submitted:', { name, email, feedback, project: modalProjectName.textContent });
        
        // Show success message
        feedbackForm.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Feedback enviado com sucesso!</h3>
                <p>Obrigado por compartilhar sua opinião.</p>
            </div>
        `;
        
        // Close modal after delay
        setTimeout(closeModal, 3000);
    });
});