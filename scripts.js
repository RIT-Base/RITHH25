// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all action buttons
    const actionButtons = document.querySelectorAll('.action-button');
    
    // Add click event listeners to all buttons
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create a ripple effect when button is clicked
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Position the ripple where clicked
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Add the ripple to the button
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle button actions - in a real app, these would navigate or perform specific functions
            const buttonText = this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
            
            switch(buttonText) {
                case 'Patch RIT Terbaru':
                    console.log('Patch RIT dibuka');
                    window.open('https://docs.google.com/document/d/1yeOLr0Wq4JR-z6UH9OtAqze144bh4w5gLYgrTu_SbYQ/edit?usp=sharing', '_blank');
                    break;
                case '':
                    console.log();
                    window.open('', '_blank')
                    break

            }
        });
    });
    
    // Add some animation to social icons on hover
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add button ripple effect styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .action-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});