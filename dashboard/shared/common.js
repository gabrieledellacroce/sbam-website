// Shared Dashboard Functionality

// Firebase is already initialized by firebase-config.js
// No need to redeclare firebaseConfig or reinitialize
const auth = firebase.auth();
const db = firebase.firestore();

// Authentication check
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User authenticated:', user.email);
        document.body.classList.add('access-granted');
        displayUserInfo(user);
        checkEmailVerification(user);
    } else {
        console.log('User not authenticated, showing guest mode');
        document.body.classList.add('access-granted');
        displayGuestInfo();
    }
});

// Email verification check
function checkEmailVerification(user) {
    const banner = document.getElementById('verification-banner');
    if (banner) {
        if (!user.emailVerified) {
            banner.classList.remove('hidden');
        } else {
            banner.classList.add('hidden');
        }
    }
    
    // Auto-refresh verification status
    const checkInterval = setInterval(() => {
        if (auth.currentUser) {
            auth.currentUser.reload().then(() => {
                if (auth.currentUser.emailVerified && banner && !banner.classList.contains('hidden')) {
                    banner.classList.add('hidden');
                    clearInterval(checkInterval);
                    location.reload();
                }
            });
        } else {
            clearInterval(checkInterval);
        }
    }, 5000);
}

// Display guest information when not authenticated
function displayGuestInfo() {
    // Update guest info elements if they exist
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userInitials = document.getElementById('userInitials');
    const userInitialsDesktop = document.getElementById('userInitialsDesktop');
    const userInitialsSidebar = document.getElementById('userInitialsSidebar');

    // Update guest info if elements exist
    if (userName) userName.textContent = 'Guest User';
    if (userEmail) userEmail.textContent = 'guest@sbam.ai';
    if (userInitials) userInitials.textContent = 'GU';
    if (userInitialsDesktop) userInitialsDesktop.textContent = 'GU';
    if (userInitialsSidebar) userInitialsSidebar.textContent = 'GU';
    
    // Hide email verification banner for guests
    const banner = document.getElementById('verification-banner');
    if (banner) banner.classList.add('hidden');
}

// Display user information
function displayUserInfo(user) {
    // Update user info elements if they exist
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userInitials = document.getElementById('userInitials');
    const userInitialsDesktop = document.getElementById('userInitialsDesktop');
    const userInitialsSidebar = document.getElementById('userInitialsSidebar');

    const displayName = user.displayName || user.email.split('@')[0];
    
    // Update name and email if elements exist
    if (userName) userName.textContent = displayName;
    if (userEmail) userEmail.textContent = user.email;
    
    // Generate initials
    let initials = '';
    if (user.displayName) {
        initials = user.displayName.split(' ')
            .filter(name => name.length > 0)
            .map(name => name.charAt(0).toUpperCase())
            .join('')
            .substring(0, 2);
    } else {
        const emailUsername = user.email.split('@')[0];
        initials = emailUsername.substring(0, 2).toUpperCase();
    }
    
    if (initials.length === 0) {
        initials = user.email.charAt(0).toUpperCase();
    }
    
    // Set initials in all locations if elements exist
    if (userInitials) userInitials.textContent = initials;
    if (userInitialsDesktop) userInitialsDesktop.textContent = initials;
    if (userInitialsSidebar) userInitialsSidebar.textContent = initials;
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    function openMobileMenu() {
        sidebar.classList.remove('-translate-x-full');
        mobileMenuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        sidebar.classList.add('-translate-x-full');
        mobileMenuOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeMobileMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    // Close mobile menu when clicking on navigation links
    const navLinks = sidebar?.querySelectorAll('nav a');
    navLinks?.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024) {
                closeMobileMenu();
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeMobileMenu();
        }
    });
}

// Make functions globally accessible
window.displayUserInfo = displayUserInfo;
window.displayGuestInfo = displayGuestInfo;
window.initializeMobileMenu = initializeMobileMenu;
window.initializeMobileSearch = initializeMobileSearch;
window.initializeTheme = initializeTheme;
window.initializeLogout = initializeLogout;
window.setActiveNavigation = setActiveNavigation;

// Mobile search functionality
function initializeMobileSearch() {
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    const mobileSearchOverlay = document.getElementById('mobile-search-overlay');
    const closeMobileSearchBtn = document.getElementById('close-mobile-search');
    
    function openMobileSearch() {
        mobileSearchOverlay.classList.remove('translate-y-full');
        mobileSearchOverlay.classList.add('translate-y-0');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            const searchInput = mobileSearchOverlay.querySelector('input');
            if (searchInput) searchInput.focus();
        }, 300);
    }
    
    function closeMobileSearch() {
        mobileSearchOverlay.classList.add('translate-y-full');
        mobileSearchOverlay.classList.remove('translate-y-0');
        document.body.style.overflow = '';
    }
    
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', openMobileSearch);
    }
    
    if (closeMobileSearchBtn) {
        closeMobileSearchBtn.addEventListener('click', closeMobileSearch);
    }
    
    // Close mobile search when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileSearchOverlay.classList.contains('translate-y-full')) {
            closeMobileSearch();
        }
    });
}

// Theme Management
function initializeTheme() {
    const lightBtn = document.getElementById('theme-light');
    const darkBtn = document.getElementById('theme-dark');
    const systemBtn = document.getElementById('theme-system');
    const buttons = [lightBtn, darkBtn, systemBtn];

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    function updateButtonStyles(activeTheme) {
        buttons.forEach(btn => {
            if (btn) {
                btn.classList.remove('active');
                if (btn.id === `theme-${activeTheme}`) {
                    btn.classList.add('active');
                }
            }
        });
    }

    function setTheme(theme) {
        if (theme === 'system') {
            localStorage.removeItem('sbam-theme');
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(systemDark ? 'dark' : 'light');
        } else {
            localStorage.setItem('sbam-theme', theme);
            applyTheme(theme);
        }
        updateButtonStyles(theme);
    }

    // Initial theme setup
    const savedTheme = localStorage.getItem('sbam-theme') || 'system';
    setTheme(savedTheme);

    // Event Listeners
    if (lightBtn) lightBtn.addEventListener('click', () => setTheme('light'));
    if (darkBtn) darkBtn.addEventListener('click', () => setTheme('dark'));
    if (systemBtn) systemBtn.addEventListener('click', () => setTheme('system'));

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('sbam-theme') === null || localStorage.getItem('sbam-theme') === 'system') {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Logout functionality
function initializeLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                await auth.signOut();
                window.location.href = '../../main-site/';
            } catch (error) {
                console.error('Logout error:', error);
                alert('Logout failed: ' + error.message);
            }
        });
    }
}

// Set active navigation item
function setActiveNavigation(currentPage) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('bg-primary', 'bg-opacity-10', 'text-primary', 'border-r-2', 'border-primary');
        link.classList.add('text-gray-700', 'dark:text-gray-300');
        
        // Reset icon colors
        const icon = link.querySelector('i');
        if (icon) {
            icon.classList.remove('text-primary');
            icon.classList.add('text-gray-500');
        }
    });
    
    // Add active class to current page nav link
    const activeLink = document.querySelector(`[data-page="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.remove('text-gray-700', 'dark:text-gray-300');
        activeLink.classList.add('bg-primary', 'bg-opacity-10', 'text-primary', 'border-r-2', 'border-primary');
        
        // Set icon color
        const icon = activeLink.querySelector('i');
        if (icon) {
            icon.classList.remove('text-gray-500');
            icon.classList.add('text-primary');
        }
    }
}

// Initialize all dashboard functionality
function initializeDashboard(currentPage = 'dashboard') {
    initializeMobileMenu();
    initializeMobileSearch();
    setupThemeControls();
    initializeLogout();
    setActiveNavigation(currentPage);
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Try to determine current page from URL
        const path = window.location.pathname;
        let currentPage = 'dashboard';
        
        if (path.includes('/analytics')) currentPage = 'analytics';
        else if (path.includes('/algo')) currentPage = 'algo';
        else if (path.includes('/settings')) currentPage = 'settings';
        
        initializeDashboard(currentPage);
    });
} else {
    const path = window.location.pathname;
    let currentPage = 'dashboard';
    
    if (path.includes('/analytics')) currentPage = 'analytics';
    else if (path.includes('/algo')) currentPage = 'algo';
    else if (path.includes('/settings')) currentPage = 'settings';
    
    initializeDashboard(currentPage);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeDashboard,
        setupThemeControls,
        displayUserInfo,
        auth,
        db
    };
}