// MITC 2025 Dashboard - Unified Sidebar Component
// This file generates the sidebar navigation for all dashboard pages

(function() {
    'use strict';

    // Sidebar CSS styles
    const sidebarStyles = `
        /* Sidebar Navigation */
        .sidebar {
            position: fixed;
            left: 0;
            top: 70px;
            width: 280px;
            height: calc(100vh - 70px);
            background: rgba(14, 40, 65, 0.95);
            border-right: 1px solid rgba(128, 209, 233, 0.2);
            z-index: 40;
            overflow-y: auto;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .sidebar.open {
            transform: translateX(0);
        }
        
        .sidebar-overlay {
            position: fixed;
            inset: 0;
            top: 70px;
            background: rgba(0, 0, 0, 0.5);
            z-index: 35;
            display: none;
        }
        
        .sidebar-overlay.active {
            display: block;
        }
        
        .sidebar-header {
            padding: 20px;
            border-bottom: 1px solid rgba(128, 209, 233, 0.15);
        }
        
        .sidebar-section {
            padding: 16px 20px;
            border-bottom: 1px solid rgba(128, 209, 233, 0.1);
        }
        
        .sidebar-section-title {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #80D1E9;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .sidebar-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.875rem;
            transition: all 0.2s ease;
            margin-bottom: 4px;
            text-decoration: none;
        }
        
        .sidebar-link:hover {
            background: rgba(128, 209, 233, 0.15);
            color: white;
        }
        
        .sidebar-link.active {
            background: rgba(128, 209, 233, 0.2);
            color: #80D1E9;
        }
        
        .sidebar-link-icon {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .sidebar-link-icon svg {
            width: 18px;
            height: 18px;
        }
        
        .sidebar-toggle {
            position: fixed;
            left: 20px;
            bottom: 20px;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, #2E3192 0%, #0E2841 100%);
            border: 2px solid #80D1E9;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 45;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }
        
        .sidebar-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 25px rgba(128, 209, 233, 0.3);
        }
        
        .sidebar-toggle svg {
            width: 24px;
            height: 24px;
            color: #80D1E9;
        }
        
        /* Sidebar is hidden by default on all devices, shown on toggle */
        .sidebar.open ~ .page-content,
        .sidebar.open + .sidebar-toggle + .page-content {
            /* Optional: add margin when sidebar is open on large screens */
        }
        
        @media print {
            .sidebar, .sidebar-overlay, .sidebar-toggle {
                display: none !important;
            }
            .main-content {
                margin-left: 0 !important;
            }
        }
    `;

    // Detect if we're in a subdirectory (pages/) or root
    const isInPagesDir = window.location.pathname.includes('/pages/');
    const basePath = isInPagesDir ? '../' : '';
    const pagesPath = isInPagesDir ? '' : 'pages/';

    // Get current page for active state
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Sidebar HTML structure
    const sidebarHTML = `
        <!-- Sidebar Overlay -->
        <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
        
        <!-- Sidebar Navigation -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2 class="text-lg font-bold" style="color: white;">Dashboard Menu</h2>
                <p class="text-xs" style="color: #80D1E9;">Navigate all sections</p>
            </div>
            
            <!-- Dashboard Pages -->
            <div class="sidebar-section">
                <div class="sidebar-section-title">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/></svg>
                    Dashboard Pages
                </div>
                
                <a href="${basePath}index.html" class="sidebar-link ${currentPage === 'index.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #2E3192;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">CEO Dashboard</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">Main executive view</p>
                    </div>
                </a>
                
                <a href="${pagesPath}executive-summary.html" class="sidebar-link ${currentPage === 'executive-summary.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #6366F1;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Executive Summary</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">Printable A4 report</p>
                    </div>
                </a>
                
                <a href="${pagesPath}regions.html" class="sidebar-link ${currentPage === 'regions.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #10B981;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Regions</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">12 sites breakdown</p>
                    </div>
                </a>
                
                <a href="${pagesPath}kpis.html" class="sidebar-link ${currentPage === 'kpis.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #80D1E9;">
                        <svg style="color: #0E2841;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">KPIs</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">Performance metrics</p>
                    </div>
                </a>
                
                <a href="${pagesPath}issues.html" class="sidebar-link ${currentPage === 'issues.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #F59E0B;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Issues</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">48 issues identified</p>
                    </div>
                </a>
                
                <a href="${pagesPath}action-tracker.html" class="sidebar-link ${currentPage === 'action-tracker.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #EF4444;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Action Tracker</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">Action items by timeline</p>
                    </div>
                </a>
                
                <a href="${pagesPath}objectives.html" class="sidebar-link ${currentPage === 'objectives.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #8B5CF6;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Objectives</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">4 strategic goals</p>
                    </div>
                </a>
            </div>
            
            <!-- Data & Documents -->
            <div class="sidebar-section">
                <div class="sidebar-section-title">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    Data & Documents
                </div>
                
                <a href="${pagesPath}inventory.html" class="sidebar-link ${currentPage === 'inventory.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #14B8A6;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Inventory</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">Excel data viewer</p>
                    </div>
                </a>
                
                <a href="${pagesPath}signed-records.html" class="sidebar-link ${currentPage === 'signed-records.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #6366F1;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Signed Records</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">PDF documents</p>
                    </div>
                </a>
                
                <a href="${pagesPath}schedule.html" class="sidebar-link ${currentPage === 'schedule.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #06B6D4;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Schedule</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">Visit timeline</p>
                    </div>
                </a>
            </div>
            
            <!-- Media & Resources -->
            <div class="sidebar-section">
                <div class="sidebar-section-title">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    Media & Resources
                </div>
                
                <a href="${pagesPath}gallery.html" class="sidebar-link ${currentPage === 'gallery.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #F43F5E;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Photo Gallery</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">121 photos</p>
                    </div>
                </a>
                
                <a href="${pagesPath}achievements.html" class="sidebar-link ${currentPage === 'achievements.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #EAB308;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Achievements</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">Success stories</p>
                    </div>
                </a>
                
                <a href="${pagesPath}committee.html" class="sidebar-link ${currentPage === 'committee.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #EC4899;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Committee</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">5 team members</p>
                    </div>
                </a>
                
                <a href="${pagesPath}downloads.html" class="sidebar-link ${currentPage === 'downloads.html' ? 'active' : ''}">
                    <div class="sidebar-link-icon" style="background: #2563EB;">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    </div>
                    <div>
                        <p class="font-semibold text-sm">Downloads</p>
                        <p class="text-xs" style="color: rgba(128, 209, 233, 0.7);">All files & reports</p>
                    </div>
                </a>
            </div>
        </aside>
        
        <!-- Sidebar Toggle Button (Mobile) -->
        <button class="sidebar-toggle no-print" id="sidebarToggle" onclick="toggleSidebar()">
            <svg id="menuIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg id="closeIcon" style="display: none;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    `;

    // Toggle sidebar function
    window.toggleSidebar = function() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');
        
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        
        if (sidebar.classList.contains('open')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    };

    // Initialize sidebar when DOM is ready
    function initSidebar() {
        // Add styles
        const styleElement = document.createElement('style');
        styleElement.textContent = sidebarStyles;
        document.head.appendChild(styleElement);

        // Add sidebar HTML right after body opening tag
        const sidebarContainer = document.createElement('div');
        sidebarContainer.id = 'sidebar-container';
        sidebarContainer.innerHTML = sidebarHTML;
        document.body.insertBefore(sidebarContainer, document.body.firstChild);

        // Add main-content class to all containers that need margin
        const containers = document.querySelectorAll('main, .container');
        // We'll handle this with CSS instead for better control
    }

    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }
})();
