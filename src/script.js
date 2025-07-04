/**
 * Vulcan GPT Website JavaScript
 * Handles animations, interactivity, and UI functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Initialize Clipboard.js for code copying
    const clipboard = new ClipboardJS('.copy-btn');
    
    clipboard.on('success', function(e) {
        const originalText = e.trigger.innerHTML;
        e.trigger.innerHTML = '<i class="fas fa-check"></i>';
        
        setTimeout(function() {
            e.trigger.innerHTML = originalText;
        }, 2000);
        
        e.clearSelection();
    });
    
    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.navbar-nav a[href="#' + sectionId + '"]').classList.add('active');
            } else {
                document.querySelector('.navbar-nav a[href="#' + sectionId + '"]').classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Terminal typing animation
    function simulateTyping() {
        const terminalContent = document.querySelector('.terminal-content');
        if (!terminalContent) return;
        
        const terminalLines = terminalContent.querySelectorAll('.terminal-line');
        const lastLine = terminalLines[terminalLines.length - 1];
        const cursor = document.querySelector('.terminal-cursor');
        
        // Hide all lines initially except the first one
        terminalLines.forEach((line, index) => {
            if (index > 0) {
                line.style.display = 'none';
            }
        });
        
        let currentLineIndex = 1;
        
        function showNextLine() {
            if (currentLineIndex < terminalLines.length) {
                const line = terminalLines[currentLineIndex];
                line.style.display = 'block';
                
                // If this is the last line, append the cursor to it
                if (currentLineIndex === terminalLines.length - 1) {
                    line.appendChild(cursor);
                }
                
                currentLineIndex++;
                
                // Determine delay based on line content
                let delay = 500;
                if (line.textContent.length > 50) {
                    delay = 1000;
                } else if (line.textContent.includes('Vulcan GPT:')) {
                    delay = 1500;
                }
                
                setTimeout(showNextLine, delay);
            }
        }
        
        // Start the animation after a short delay
        setTimeout(showNextLine, 1000);
    }
    
    // Start terminal animation when in viewport
    const terminalElement = document.querySelector('.terminal-window');
    
    if (terminalElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    simulateTyping();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(terminalElement);
    }
    
    // Feature card hover effects and interactions
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        // Hover effects
        card.addEventListener('mouseenter', function() {
            this.querySelector('.feature-icon').classList.add('animate-glow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.feature-icon').classList.remove('animate-glow');
        });
        
        // Click to expand (for mobile/touch devices)
        card.addEventListener('click', function(e) {
            // Don't expand if clicking on a link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            // Toggle expanded state
            this.classList.toggle('expanded');
            
            // Find the expanded content
            const expandedContent = this.querySelector('.feature-card-expanded-content');
            if (expandedContent) {
                if (this.classList.contains('expanded')) {
                    expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
                } else {
                    expandedContent.style.maxHeight = '0';
                }
            }
        });
    });
    
    // Feature filtering
    const filterButtons = document.querySelectorAll('.feature-filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get selected category
            const category = this.getAttribute('data-category');
            
            // Filter cards
            featureCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.closest('.col-md-6, .col-md-12').style.display = 'block';
                } else {
                    card.closest('.col-md-6, .col-md-12').style.display = 'none';
                }
            });
        });
    });
    
    // View All Features button
    const viewAllButton = document.getElementById('view-all-features');
    const extraFeatures = document.querySelectorAll('.feature-extra');
    
    if (viewAllButton) {
        viewAllButton.addEventListener('click', function() {
            const buttonText = this.querySelector('span');
            const isExpanded = buttonText.textContent === 'Hide Extra Features';
            
            extraFeatures.forEach(feature => {
                feature.style.display = isExpanded ? 'none' : 'block';
                
                // Animate the appearance
                if (!isExpanded) {
                    feature.classList.add('scale-in');
                    setTimeout(() => {
                        feature.classList.remove('scale-in');
                    }, 500);
                }
            });
            
            // Update button text
            buttonText.textContent = isExpanded ? 'View All Features' : 'Hide Extra Features';
            
            // Update icon
            const icon = this.querySelector('i');
            icon.className = isExpanded ? 'fas fa-list-ul me-2' : 'fas fa-chevron-up me-2';
        });
    }
    
    // Mobile navigation menu closing after click
    const navLinks = document.querySelectorAll('.navbar-nav a');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
    
    // Preload images for better performance
    function preloadImages() {
        const imagesToPreload = [
            'images/developer.jpg',
            'images/banner.jpg'
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    preloadImages();
});
