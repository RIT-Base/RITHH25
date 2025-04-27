// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all action buttons
    const actionButtons = document.querySelectorAll('.action-button');
    
    // Add click event listeners to all buttons
    actionButtons.forEach((button, index) => {
        // Add slight delay to each button's appearance for a staggered effect
        setTimeout(() => {
            button.style.opacity = "1";
            button.style.transform = "translateY(0)";
        }, 100 * index);
        
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
            
            // Handle button actions based on button text
            const buttonText = this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
            
            switch (buttonText) {
                // Informasi Utama
                case 'Poster Sosialisasi':
                    console.log('Poster Sosialisasi dibuka');
                    window.open('https://docs.google.com/document/d/1PqWqvIIgnOPD-9Yq5A_-Z5qNyEfOBdOPf02PIW-G6MU/edit?usp=sharing', '_blank');
                    break;
                case 'Dokumen Lengkap':
                    console.log('Dokumen Lengkap dibuka');
                    window.open('https://docs.google.com/document/d/1PqWqvIIgnOPD-9Yq5A_-Z5qNyEfOBdOPf02PIW-G6MU/edit?usp=sharing', '_blank');
                    break;
                case 'File Presentasi':
                    console.log('File Presentasi dibuka');
                    window.open('https://docs.google.com/document/d/1PqWqvIIgnOPD-9Yq5A_-Z5qNyEfOBdOPf02PIW-G6MU/edit?usp=sharing', '_blank');
                    break;
            
                // Informasi Tiap Cabang Divisi
                case 'Web Developer':
                    console.log('Informasi Web Developer dibuka');
                    window.open('https://docs.google.com/document/d/1PqWqvIIgnOPD-9Yq5A_-Z5qNyEfOBdOPf02PIW-G6MU/edit?usp=sharing', '_blank');
                    break;
                case 'Game Developer':
                    console.log('Informasi Game Developer dibuka');
                    window.open('https://drive.google.com/file/d/1PByjbN90dKDucyd5QGts1MxyjVTtjsu0/view?usp=drive_link', '_blank');
                    break;
                case 'Internet of Things':
                    console.log('Informasi Internet of Things dibuka');
                    window.open('https://docs.google.com/document/d/1PqWqvIIgnOPD-9Yq5A_-Z5qNyEfOBdOPf02PIW-G6MU/edit?usp=sharing', '_blank');
                    break;
                case 'Cyber Security':
                    console.log('Informasi Cyber Security dibuka');
                    window.open('https://docs.google.com/document/d/1PqWqvIIgnOPD-9Yq5A_-Z5qNyEfOBdOPf02PIW-G6MU/edit?usp=sharing', '_blank');
                    break;
                case 'Media Center':
                    console.log('Informasi Media Center dibuka');
                    window.open('https://docs.google.com/document/d/1PqWqvIIgnOPD-9Yq5A_-Z5qNyEfOBdOPf02PIW-G6MU/edit?usp=sharing', '_blank');
                    break;
                case 'Gaming Enthusiast':
                    console.log('Informasi Gaming Enthusiast dibuka');
                    window.open('https://docs.google.com/document/d/1PqWqvIIgnOPD-9Yq5A_-Z5qNyEfOBdOPf02PIW-G6MU/edit?usp=sharing', '_blank');
                    break;
            
                // Informasi Tambahan
                case 'Detail Patch RIT':
                    console.log('Detail Patch RIT dibuka');
                    window.open('https://docs.google.com/document/d/1yeOLr0Wq4JR-z6UH9OtAqze144bh4w5gLYgrTu_SbYQ/edit?usp=sharing', '_blank');
                    break;
            
                default:
                    console.log('Tidak ada aksi untuk tombol ini.');
                    break;
            }            
        });
    });
    
    // Add animation to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Initialize button appearance with slight stagger effect
    actionButtons.forEach((button, index) => {
        // Set initial styles for animation
        button.style.opacity = "0";
        button.style.transform = "translateY(20px)";
        button.style.transition = "all 0.3s ease";
    });
    
    // Add hover effect that slightly enlarges button text
    actionButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.letterSpacing = "0.5px";
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.letterSpacing = "0";
        });
    });
});