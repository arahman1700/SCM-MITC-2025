/* ============================================
   MITC 2025 Dashboard - Main JavaScript
   Nesma Infrastructure & Technology
   ============================================ */

// ============================================
// Mobile Navigation
// ============================================
function initMobileNav() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('svg');
            if (icon) {
                icon.style.transform = navLinks.classList.contains('active') ? 'rotate(90deg)' : '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
}

// ============================================
// Lightbox Gallery
// ============================================
let currentImageIndex = 0;
let galleryImages = [];

function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item, .gallery-img');
    const lightbox = document.getElementById('lightbox');
    
    if (!lightbox) return;
    
    // Collect all images
    galleryImages = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        return img ? img.src : item.dataset.src;
    });
    
    // Add click handlers
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });
    
    // Close handlers
    const closeBtn = lightbox.querySelector('.lightbox-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    // Navigation handlers
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox(1));
    
    // Click outside to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg && galleryImages[index]) {
        lightboxImg.src = galleryImages[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
    
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg && galleryImages[currentImageIndex]) {
        lightboxImg.src = galleryImages[currentImageIndex];
    }
}

// ============================================
// Filter Functionality
// ============================================
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('[data-filter]');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter || btn.textContent.toLowerCase().trim();
            
            // Update active state
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-gray-800', 'text-white');
                b.classList.add('bg-gray-100', 'text-gray-600');
            });
            btn.classList.add('active', 'bg-gray-800', 'text-white');
            btn.classList.remove('bg-gray-100', 'text-gray-600');
            
            // Filter items
            filterItems.forEach(item => {
                const itemFilter = item.dataset.filter;
                if (filter === 'all' || itemFilter === filter || item.classList.contains(`region-${filter}`)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// Animated Counters
// ============================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.counter);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// Progress Rings (KPI Circles)
// ============================================
function updateProgressRing(element, percentage) {
    const circle = element.querySelector('.kpi-ring-fill');
    if (!circle) return;
    
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
}

function initProgressRings() {
    const rings = document.querySelectorAll('.kpi-ring');
    
    rings.forEach(ring => {
        const percentage = parseInt(ring.dataset.percentage) || 0;
        updateProgressRing(ring, percentage);
    });
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
}

// ============================================
// Print / PDF Export
// ============================================
function printPage() {
    window.print();
}

function exportToPDF() {
    // Using browser's native print to PDF
    window.print();
}

// ============================================
// Tooltip
// ============================================
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(el => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = el.dataset.tooltip;
        tooltip.style.cssText = `
            position: absolute;
            background: #1f2937;
            color: white;
            padding: 0.5rem 0.75rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            white-space: nowrap;
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s;
        `;
        
        el.style.position = 'relative';
        el.appendChild(tooltip);
        
        el.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.bottom = '100%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%) translateY(-8px)';
        });
        
        el.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
}

// ============================================
// Data Loading (for JSON data)
// ============================================
async function loadSitesData() {
    try {
        const response = await fetch('/data/sites.json');
        if (!response.ok) throw new Error('Failed to load sites data');
        return await response.json();
    } catch (error) {
        console.error('Error loading sites data:', error);
        return null;
    }
}

// ============================================
// Utility Functions
// ============================================
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Initialize on DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initLightbox();
    initFilters();
    initCounters();
    initProgressRings();
    initSmoothScroll();
    initScrollAnimations();
    initTooltips();
    
    console.log('MITC Dashboard initialized');
});

// Export functions for external use
window.MITC = {
    openLightbox,
    closeLightbox,
    navigateLightbox,
    printPage,
    exportToPDF,
    loadSitesData,
    formatNumber,
    formatDate
};
