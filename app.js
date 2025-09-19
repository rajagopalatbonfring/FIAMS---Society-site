// FIAMS Homepage JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initSmoothScrolling();
    initMobileNavigation();
    initAnimationOnScroll();
    initStatisticsCounters();
    initProgressBars();
    initButtonInteractions();
    initAccessibilityFeatures();
    initPerformanceMonitoring();
});

// Scroll to section function for buttons
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Make scrollToSection globally available
window.scrollToSection = scrollToSection;

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const navList = document.querySelector('.nav-list');
                const toggleBtn = document.querySelector('.mobile-menu-toggle');
                if (navList && navList.classList.contains('mobile-open')) {
                    navList.classList.remove('mobile-open');
                    if (toggleBtn) {
                        toggleBtn.classList.remove('active');
                        toggleBtn.innerHTML = '☰';
                    }
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Navigation
function initMobileNavigation() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const navList = document.querySelector('.nav-list');
    
    // Check if we need mobile menu (screen width)
    function checkMobileMenu() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                createMobileMenuToggle();
            }
        } else {
            removeMobileMenuToggle();
            if (navList) navList.classList.remove('mobile-open');
        }
    }
    
    function createMobileMenuToggle() {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'mobile-menu-toggle btn btn--outline';
        toggleBtn.innerHTML = '☰';
        toggleBtn.setAttribute('aria-label', 'Toggle mobile menu');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.style.minWidth = '44px';
        toggleBtn.style.padding = '8px';
        
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            headerContent.appendChild(toggleBtn);
            
            toggleBtn.addEventListener('click', function() {
                if (navList) {
                    const isOpen = navList.classList.contains('mobile-open');
                    navList.classList.toggle('mobile-open');
                    this.classList.toggle('active');
                    this.innerHTML = this.classList.contains('active') ? '✕' : '☰';
                    this.setAttribute('aria-expanded', !isOpen);
                }
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!header.contains(e.target) && navList && navList.classList.contains('mobile-open')) {
                    navList.classList.remove('mobile-open');
                    toggleBtn.classList.remove('active');
                    toggleBtn.innerHTML = '☰';
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Close mobile menu when pressing Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && navList && navList.classList.contains('mobile-open')) {
                    navList.classList.remove('mobile-open');
                    toggleBtn.classList.remove('active');
                    toggleBtn.innerHTML = '☰';
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
    
    function removeMobileMenuToggle() {
        const toggleBtn = document.querySelector('.mobile-menu-toggle');
        if (toggleBtn) {
            toggleBtn.remove();
        }
    }
    
    // Check on load and resize
    checkMobileMenu();
    window.addEventListener('resize', checkMobileMenu);
}

// Animation on Scroll
function initAnimationOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('services-grid') || 
                    entry.target.classList.contains('programs-grid') ||
                    entry.target.classList.contains('testimonials-grid') ||
                    entry.target.classList.contains('news-grid')) {
                    
                    const items = entry.target.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate-in');
                        }, index * 100);
                    });
                }
                
                // Trigger statistics animation when section is visible
                if (entry.target.classList.contains('statistics')) {
                    triggerStatisticsAnimation();
                }
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sectionsToAnimate = document.querySelectorAll(`
        .hero-content,
        .services-grid,
        .two-column-content,
        .statistics,
        .programs-grid,
        .testimonials-grid,
        .news-grid,
        .final-cta-content
    `);

    sectionsToAnimate.forEach(section => {
        if (section) observer.observe(section);
    });
}

// Statistics Counter Animation
function initStatisticsCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        counter.textContent = '0';
        counter.setAttribute('data-animated', 'false');
    });
}

function triggerStatisticsAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        if (counter.getAttribute('data-animated') === 'false') {
            const target = parseInt(counter.getAttribute('data-target'));
            animateValue(counter, 0, target, 2000);
            counter.setAttribute('data-animated', 'true');
        }
    });
    
    // Animate progress bars
    animateProgressBars();
}

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    const suffix = end === 12500 ? '+' : '';
    
    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeOutCubic);
        
        element.textContent = current.toLocaleString() + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = end.toLocaleString() + suffix;
        }
    }
    
    requestAnimationFrame(updateValue);
}

// Progress Bars Animation
function initProgressBars() {
    const progressBars = document.querySelectorAll('.stat-progress');
    progressBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.stat-progress');
    
    progressBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width') + '%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 200);
    });
}

// Button Interactions
function initButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        // Hover effects
        btn.addEventListener('mouseenter', function() {
            if (!this.classList.contains('btn--outline')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Click effects
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
        
        // Handle button clicks for demo purposes
        btn.addEventListener('click', function(e) {
            if (this.textContent.includes('Learn More') || 
                this.textContent.includes('Explore') ||
                this.textContent.includes('View') ||
                this.textContent.includes('Become') ||
                this.textContent.includes('Schedule')) {
                
                e.preventDefault();
                showNotification('Thank you for your interest! This feature will be available soon.', 'info');
            }
        });
    });
}

// Accessibility Features
function initAccessibilityFeatures() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    
    skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('about').focus();
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Arrow key navigation for buttons in same section
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('btn')) {
                const buttonsInSection = Array.from(focusedElement.closest('section').querySelectorAll('.btn'));
                const currentIndex = buttonsInSection.indexOf(focusedElement);
                
                let nextIndex;
                if (e.key === 'ArrowRight') {
                    nextIndex = (currentIndex + 1) % buttonsInSection.length;
                } else {
                    nextIndex = (currentIndex - 1 + buttonsInSection.length) % buttonsInSection.length;
                }
                
                buttonsInSection[nextIndex].focus();
                e.preventDefault();
            }
        }
    });
    
    // Add ARIA labels and roles where needed
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Service ${index + 1}: ${card.querySelector('h3').textContent}`);
    });
    
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Testimonial ${index + 1}`);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    // Create notification content
    const content = document.createElement('div');
    content.textContent = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.className = 'notification-close';
    closeBtn.setAttribute('aria-label', 'Close notification');
    
    notification.appendChild(content);
    notification.appendChild(closeBtn);
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        backgroundColor: getNotificationColor(type),
        color: 'white',
        borderRadius: 'var(--radius-base)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        maxWidth: '300px'
    });
    
    Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer',
        padding: '0',
        minWidth: '20px'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            hideNotification(notification);
        }
    }, 5000);
}

function hideNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 300);
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#4CAF50';
        case 'error': return '#F44336';
        case 'warning': return '#FF9800';
        case 'info':
        default: return '#2196F3';
    }
}

// Form Handling (for future forms)
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    showNotification('Thank you! Your submission has been received.', 'success');
                    form.reset();
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            }
        });
    });
}

// Parallax Effect for Hero Section (desktop only)
function initParallax() {
    if (window.innerWidth > 768) {
        const hero = document.querySelector('.hero');
        
        if (hero) {
            let ticking = false;
            
            function updateParallax() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.1;
                
                hero.style.transform = `translateY(${rate}px)`;
                ticking = false;
            }
            
            function requestTick() {
                if (!ticking) {
                    requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }
            
            window.addEventListener('scroll', requestTick);
        }
    }
}

// Initialize parallax effect
initParallax();

// Performance Monitoring
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (performance && performance.getEntriesByType) {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData && console && console.log) {
                    console.log('Page load time:', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
                }
            }
        }, 0);
    });
    
    // Monitor largest contentful paint
    if ('PerformanceObserver' in window) {
        try {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                if (console && console.log) {
                    console.log('LCP:', Math.round(lastEntry.startTime), 'ms');
                }
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
            // Silently fail if PerformanceObserver is not supported
        }
    }
}

// Smooth scroll behavior for older browsers
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
        document.head.appendChild(script);
    }
}

// Initialize smooth scroll polyfill
smoothScrollPolyfill();

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Initialize form handling after page load
    initFormHandling();
});

// Handle resize events
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Re-initialize parallax on resize
        initParallax();
        
        // Reset any transforms that might be affected by resize
        const hero = document.querySelector('.hero');
        if (hero && window.innerWidth <= 768) {
            hero.style.transform = 'none';
        }
    }, 250);
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when ready to implement PWA
        // navigator.serviceWorker.register('/sw.js')
        //   .then(registration => console.log('SW registered'))
        //   .catch(error => console.log('SW registration failed'));
    });
}

// Intersection Observer polyfill check
function checkIntersectionObserverSupport() {
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        console.warn('IntersectionObserver not supported, using fallback');
        
        // Simple scroll-based animation trigger
        let animatedElements = new Set();
        
        function checkElementsInView() {
            const elements = document.querySelectorAll('.services-grid, .programs-grid, .testimonials-grid, .news-grid');
            
            elements.forEach(element => {
                if (!animatedElements.has(element)) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        element.classList.add('animate-in');
                        animatedElements.add(element);
                        
                        // Trigger statistics if it's the statistics section
                        if (element.closest('.statistics')) {
                            triggerStatisticsAnimation();
                        }
                    }
                }
            });
        }
        
        window.addEventListener('scroll', checkElementsInView);
        checkElementsInView(); // Check on load
    }
}

// Initialize intersection observer check
checkIntersectionObserverSupport();

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection,
        showNotification,
        animateValue
    };
}