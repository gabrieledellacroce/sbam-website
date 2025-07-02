// Shared Dashboard Layout Components

// Header HTML template
const headerTemplate = `
    <!-- Fixed Header -->
    <header class="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div class="flex items-center justify-between px-4 lg:px-6 py-4">
            <!-- Left side -->
            <div class="flex items-center">
                <!-- Mobile menu button -->
                <button id="mobile-menu-btn" class="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 mr-3 lg:hidden">
                    <i class="fas fa-bars"></i>
                </button>
                <!-- Logo -->
                <a href="../../main-site/" class="flex items-center">
                    <img src="../../images/logo.svg" alt="SBAM Logo" class="h-8 w-auto mr-3">
                </a>
                <!-- Page title -->
                <h1 id="page-title" class="text-xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
            </div>
            
            <!-- Right side -->
            <div class="flex items-center space-x-4">
                <!-- Search bar (desktop only) -->
                <div class="relative hidden lg:block">
                    <input type="text" placeholder="Search" class="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="fas fa-search text-gray-400 dark:text-gray-300"></i>
                    </div>
                </div>
                <!-- Mobile search and user section -->
                <div class="flex items-center space-x-3 lg:hidden">
                    <!-- Search icon -->
                    <button id="mobile-search-btn" class="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <i class="fas fa-search"></i>
                    </button>
                    <!-- User avatar -->
                    <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span id="userInitials" class="text-white text-sm font-medium"></span>
                    </div>
                </div>
                <!-- User avatar (desktop only) -->
                <div class="hidden lg:flex w-8 h-8 bg-primary rounded-full items-center justify-center">
                    <span id="userInitialsDesktop" class="text-white text-sm font-medium"></span>
                </div>
            </div>
        </div>
    </header>
`;

// Sidebar HTML template
const sidebarTemplate = `
    <!-- Left Sidebar -->
    <div id="sidebar" class="fixed inset-y-0 lg:top-16 lg:bottom-0 left-0 z-50 lg:z-10 w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 flex flex-col transform -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0">
        <!-- Mobile Logo Section (only visible on mobile) -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700 lg:hidden">
            <div class="flex items-center justify-between">
                <a href="../../main-site/" class="flex items-center">
                    <img src="../../images/logo.svg" alt="SBAM Logo" class="h-8 w-auto">
                </a>
                <!-- Close button for mobile -->
                <button id="close-sidebar" class="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="flex-1 px-4 py-6 lg:pt-8">
            <ul class="space-y-2">
                <li>
                    <a href="#" onclick="navigateToPage('dashboard'); return false;" class="nav-link flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group" data-page="dashboard">
                        <i class="fas fa-home text-gray-500 group-hover:text-primary mr-3"></i>
                        <span class="font-medium">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" onclick="navigateToPage('algo'); return false;" class="nav-link flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group" data-page="algo">
                        <i class="fas fa-robot text-gray-500 group-hover:text-primary mr-3"></i>
                        <span class="font-medium">Algorithms</span>
                    </a>
                </li>
                <li>
                    <a href="#" onclick="navigateToPage('analytics'); return false;" class="nav-link flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group" data-page="analytics">
                        <i class="fas fa-chart-bar text-gray-500 group-hover:text-primary mr-3"></i>
                        <span class="font-medium">Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#" onclick="navigateToPage('settings'); return false;" class="nav-link flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group" data-page="settings">
                        <i class="fas fa-cog text-gray-500 group-hover:text-primary mr-3"></i>
                        <span class="font-medium">Settings</span>
                    </a>
                </li>

            </ul>
        </nav>
        
        <!-- User Profile Section -->
        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center space-x-3 mb-3">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span id="userInitialsSidebar" class="text-white text-sm font-medium"></span>
                </div>
                <div class="flex-1 min-w-0">
                    <p id="user-name" class="font-medium text-sm text-gray-900 dark:text-gray-100 truncate"></p>
                    <p id="user-email" class="text-xs text-gray-500 dark:text-gray-400 truncate"></p>
                </div>
            </div>
            
            <!-- Theme Toggle -->
            <div class="mb-3">
                <div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
                    <button id="theme-light" class="theme-btn flex-1 flex items-center justify-center py-1.5 px-2 rounded-md text-xs font-medium transition-colors">
                        <i class="fas fa-sun mr-1"></i>
                        Light
                    </button>
                    <button id="theme-dark" class="theme-btn flex-1 flex items-center justify-center py-1.5 px-2 rounded-md text-xs font-medium transition-colors mx-1">
                        <i class="fas fa-moon mr-1"></i>
                        Dark
                    </button>
                    <button id="theme-system" class="theme-btn flex-1 flex items-center justify-center py-1.5 px-2 rounded-md text-xs font-medium transition-colors">
                        <i class="fas fa-desktop mr-1"></i>
                        Auto
                    </button>
                </div>
            </div>
            
            <!-- Logout -->
            <div class="mb-3">
                <button id="logout-btn" class="w-full flex items-center px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition-colors">
                    <i class="fas fa-sign-out-alt mr-2"></i>Logout
                </button>
            </div>
        </div>
    </div>
`;

// Mobile overlays template
const mobileOverlaysTemplate = `
    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden hidden"></div>
    
    <!-- Mobile Search Overlay (hidden by default) -->
    <div id="mobile-search-overlay" class="fixed inset-0 z-50 bg-white lg:hidden transform translate-y-full transition-transform duration-300 ease-in-out">
        <div class="flex flex-col h-full">
            <!-- Search Header -->
            <div class="flex items-center p-4 border-b border-gray-200">
                <div class="relative flex-1">
                     <input type="text" placeholder="Search..." class="w-full pl-12 pr-4 py-3 text-lg border-0 focus:ring-0 focus:outline-none" autofocus>
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i class="fas fa-search text-gray-400 text-lg"></i>
                    </div>
                </div>
                <button id="close-mobile-search" class="ml-4 p-2 text-gray-600 hover:text-gray-900">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <!-- Search Results Area -->
            <div class="flex-1 p-4">
                <div class="text-center text-gray-500 mt-20">
                     <i class="fas fa-search text-4xl mb-4"></i>
                     <p>Start typing to search...</p>
                 </div>
            </div>
        </div>
    </div>
`;

// Function to initialize the dashboard layout
function initializeDashboardLayout(pageTitle = 'Dashboard', currentPage = 'dashboard') {
    // Set page title
    document.title = `SBAM Dashboard - ${pageTitle}`;
    
    // Insert mobile overlays
    document.body.insertAdjacentHTML('afterbegin', mobileOverlaysTemplate);
    
    // Insert header
    document.body.insertAdjacentHTML('afterbegin', headerTemplate);
    
    // Set page title
    document.getElementById('page-title').textContent = pageTitle;
    
    // Create main container
    const mainContainer = document.createElement('div');
    mainContainer.className = 'flex min-h-screen pt-16';
    
    // Insert sidebar
    mainContainer.innerHTML = sidebarTemplate;
    
    // Create content area
    const contentArea = document.createElement('div');
    contentArea.className = 'flex-1 flex flex-col lg:ml-64';
    contentArea.innerHTML = `
        <main id="main-content" class="min-h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <!-- Content will be inserted here -->
        </main>
    `;
    
    mainContainer.appendChild(contentArea);
    document.body.appendChild(mainContainer);
    
    // Highlight current page in navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('bg-primary', 'bg-opacity-10', 'text-primary');
            link.classList.remove('text-gray-700', 'dark:text-gray-300');
        }
    });
    
    // Initialize all event listeners after DOM is ready
    setTimeout(() => {
        // Initialize mobile menu
        if (typeof initializeMobileMenu === 'function') {
            initializeMobileMenu();
        }
        
        // Initialize mobile search
        if (typeof initializeMobileSearch === 'function') {
            initializeMobileSearch();
        }
        
        // Initialize theme management
        if (typeof initializeTheme === 'function') {
            initializeTheme();
        }
        
        // Initialize logout functionality
        if (typeof initializeLogout === 'function') {
            initializeLogout();
        }
    }, 100);
    
    // Initialize dashboard functionality
    if (typeof initializeDashboard === 'function') {
        initializeDashboard(currentPage);
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeDashboardLayout };
}

// Make function globally accessible
window.initializeDashboardLayout = initializeDashboardLayout;