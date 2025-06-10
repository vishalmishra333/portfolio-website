// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Project demo links animation
    document.querySelectorAll('.demo-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.innerHTML = '<i class="fas fa-cog fa-spin"></i> Loading Demo...';
            
            // Simulate loading
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-external-link-alt"></i> Demo Coming Soon';
                this.style.pointerEvents = 'none';
                this.style.opacity = '0.7';
            }, 1500);
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            // Simulate form submission
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                // Reset form
                this.reset();
                
                // Show success message
                submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitButton.style.backgroundColor = '#4CAF50';
                
                // Reset button after delay
                setTimeout(() => {
                    submitButton.innerHTML = originalButtonText;
                    submitButton.style.backgroundColor = '';
                    submitButton.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
})