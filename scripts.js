// JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Simple email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Example of a simple animation on scroll
    window.addEventListener('scroll', function() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
            }
        });
    });

    // Initialize any components
    initializeTestimonialSlider();
});

// Simple testimonial slider function
function initializeTestimonialSlider() {
    const testimonials = [
        {
            text: '"This template helped us launch our startup website in record time. The clean design and easy customization options were exactly what we needed."',
            author: '- Jane Doe, CEO of StartupX'
        },
        {
            text: '"I was able to deploy this site in minutes. The code is well-structured and easy to modify to fit our brand."',
            author: '- John Smith, Developer'
        },
        {
            text: '"The responsive design works perfectly across all our devices. Our customers love how professional our new site looks."',
            author: '- Maria Garcia, Marketing Director'
        }
    ];

    let currentIndex = 0;
    const testimonialElement = document.querySelector('.testimonial');
    const textElement = testimonialElement.querySelector('.testimonial-text');
    const authorElement = testimonialElement.querySelector('.testimonial-author');

    // Change testimonial every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        
        // Fade out
        testimonialElement.style.opacity = '0';
        
        // Update content and fade in after a short delay
        setTimeout(() => {
            textElement.textContent = testimonials[currentIndex].text;
            authorElement.textContent = testimonials[currentIndex].author;
            testimonialElement.style.opacity = '1';
        }, 500);
        
    }, 5000);
}