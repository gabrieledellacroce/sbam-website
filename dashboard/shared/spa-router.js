// SPA Router for SBAM Dashboard

// Page content definitions
const pageContents = {
    dashboard: {
        title: 'Dashboard',
        content: `
            <div class="p-6">
                <!-- Welcome Section -->
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Welcome to SBAM Dashboard</h2>
                    <p class="text-gray-600 dark:text-gray-400">Manage your AI algorithms and analytics from here.</p>
                </div>
                
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-primary bg-opacity-10 rounded-lg">
                                <i class="fas fa-robot text-primary text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Active Algos</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">12</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-cyan bg-opacity-10 rounded-lg">
                                <i class="fas fa-chart-line text-cyan text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Performance</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">98.5%</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-violet bg-opacity-10 rounded-lg">
                                <i class="fas fa-database text-violet text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Data Processed</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">2.4TB</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-green-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-check-circle text-green-500 text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Success Rate</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">99.2%</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Quick Actions -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Actions</h3>
                        <div class="space-y-3">
                            <a href="#" onclick="navigateToPage('algo')" class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                                <div class="p-2 bg-primary bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-colors">
                                    <i class="fas fa-robot text-primary"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="font-medium text-gray-900 dark:text-gray-100">Manage Algorithms</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Create and configure AI algorithms</p>
                                </div>
                            </a>
                            
                            <a href="#" onclick="navigateToPage('analytics')" class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                                <div class="p-2 bg-cyan bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-colors">
                                    <i class="fas fa-chart-bar text-cyan"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="font-medium text-gray-900 dark:text-gray-100">View Analytics</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Monitor performance and metrics</p>
                                </div>
                            </a>
                            
                            <a href="#" onclick="navigateToPage('settings')" class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                                <div class="p-2 bg-violet bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-colors">
                                    <i class="fas fa-cog text-violet"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="font-medium text-gray-900 dark:text-gray-100">Settings</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Configure your account preferences</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h3>
                        <div class="space-y-3">
                            <div class="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                                <div class="p-2 bg-green-500 bg-opacity-10 rounded-lg">
                                    <i class="fas fa-check text-green-500"></i>
                                </div>
                                <div class="ml-3 flex-1">
                                    <p class="font-medium text-gray-900 dark:text-gray-100">Algorithm deployed successfully</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                                <div class="p-2 bg-blue-500 bg-opacity-10 rounded-lg">
                                    <i class="fas fa-info text-blue-500"></i>
                                </div>
                                <div class="ml-3 flex-1">
                                    <p class="font-medium text-gray-900 dark:text-gray-100">New data batch processed</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">15 minutes ago</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                                <div class="p-2 bg-yellow-500 bg-opacity-10 rounded-lg">
                                    <i class="fas fa-exclamation text-yellow-500"></i>
                                </div>
                                <div class="ml-3 flex-1">
                                    <p class="font-medium text-gray-900 dark:text-gray-100">Performance alert resolved</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    algo: {
        title: 'Algorithms',
        content: `
            <div class="p-6">
                <!-- Algorithms Header -->
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Algorithm Management</h2>
                    <p class="text-gray-600 dark:text-gray-400">Create, configure, and monitor your AI algorithms.</p>
                </div>
                
                <!-- Algorithm Stats -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-primary bg-opacity-10 rounded-lg">
                                <i class="fas fa-robot text-primary text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Algorithms</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">24</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-green-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-play text-green-500 text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Active</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">18</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-yellow-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-pause text-yellow-500 text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Paused</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">6</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Search and Filter -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="flex-1">
                            <div class="relative">
                                <input type="text" placeholder="Search algorithms..." class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-search text-gray-400 dark:text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <select class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>All Types</option>
                                <option>NLP</option>
                                <option>Computer Vision</option>
                                <option>Analytics</option>
                            </select>
                            <button class="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                <i class="fas fa-plus mr-2"></i>New Algorithm
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Algorithm Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Algorithm Card 1 -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-2 bg-primary bg-opacity-10 rounded-lg">
                                <i class="fas fa-search text-primary text-xl"></i>
                            </div>
                            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Active</span>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">SEO Optimizer</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Analyzes and optimizes content for search engines using advanced NLP techniques.</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-500 dark:text-gray-400">Last run: 2 hours ago</span>
                            <div class="flex space-x-2">
                                <button class="p-2 text-gray-400 hover:text-primary transition-colors">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Algorithm Card 2 -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-2 bg-cyan bg-opacity-10 rounded-lg">
                                <i class="fas fa-chart-line text-cyan text-xl"></i>
                            </div>
                            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Active</span>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Analytics Engine</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Real-time data processing and insights generation for business intelligence.</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-500 dark:text-gray-400">Last run: 5 minutes ago</span>
                            <div class="flex space-x-2">
                                <button class="p-2 text-gray-400 hover:text-primary transition-colors">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Algorithm Card 3 -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="p-2 bg-violet bg-opacity-10 rounded-lg">
                                <i class="fas fa-brain text-violet text-xl"></i>
                            </div>
                            <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Paused</span>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">NLP Processor</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Advanced natural language processing for sentiment analysis and text classification.</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-500 dark:text-gray-400">Last run: 1 day ago</span>
                            <div class="flex space-x-2">
                                <button class="p-2 text-gray-400 hover:text-primary transition-colors">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Create New Algorithm Card -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer">
                        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4">
                            <i class="fas fa-plus text-gray-400 text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Create New Algorithm</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm">Start building your next AI algorithm</p>
                    </div>
                </div>
            </div>
        `
    },
    
    analytics: {
        title: 'Analytics',
        content: `
            <div class="p-6">
                <!-- Analytics Header -->
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Analytics Dashboard</h2>
                    <p class="text-gray-600 dark:text-gray-400">Monitor performance metrics and insights across all your algorithms.</p>
                </div>
                
                <!-- Key Metrics -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-blue-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-server text-blue-500 text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Requests</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">1.2M</p>
                                <p class="text-xs text-green-500">+12% from last month</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-green-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-check-circle text-green-500 text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Success Rate</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">99.8%</p>
                                <p class="text-xs text-green-500">+0.3% from last month</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-yellow-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-clock text-yellow-500 text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Response Time</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">245ms</p>
                                <p class="text-xs text-red-500">+15ms from last month</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center">
                            <div class="p-2 bg-purple-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-database text-purple-500 text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Data Processed</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">847GB</p>
                                <p class="text-xs text-green-500">+23% from last month</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Charts Section -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <!-- Performance Chart -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Performance Over Time</h3>
                        <div class="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div class="text-center">
                                <i class="fas fa-chart-line text-4xl text-gray-400 mb-2"></i>
                                <p class="text-gray-500 dark:text-gray-400">Chart visualization would go here</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Algorithm Usage -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Algorithm Usage</h3>
                        <div class="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div class="text-center">
                                <i class="fas fa-chart-pie text-4xl text-gray-400 mb-2"></i>
                                <p class="text-gray-500 dark:text-gray-400">Pie chart visualization would go here</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Recent Activity -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h3>
                    <div class="space-y-4">
                        <div class="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div class="p-2 bg-green-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-check text-green-500"></i>
                            </div>
                            <div class="ml-4 flex-1">
                                <p class="font-medium text-gray-900 dark:text-gray-100">SEO Optimizer completed batch processing</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Processed 1,247 documents in 3.2 seconds</p>
                            </div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">2 min ago</span>
                        </div>
                        
                        <div class="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div class="p-2 bg-blue-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-info text-blue-500"></i>
                            </div>
                            <div class="ml-4 flex-1">
                                <p class="font-medium text-gray-900 dark:text-gray-100">Analytics Engine generated new insights</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Identified 3 optimization opportunities</p>
                            </div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">15 min ago</span>
                        </div>
                        
                        <div class="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div class="p-2 bg-yellow-500 bg-opacity-10 rounded-lg">
                                <i class="fas fa-exclamation text-yellow-500"></i>
                            </div>
                            <div class="ml-4 flex-1">
                                <p class="font-medium text-gray-900 dark:text-gray-100">High latency detected on NLP Processor</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Response time increased to 450ms</p>
                            </div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">1 hour ago</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    settings: {
        title: 'Settings',
        content: `
            <div class="p-6">
                <!-- Settings Header -->
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Account Settings</h2>
                    <p class="text-gray-600 dark:text-gray-400">Manage your account preferences and security settings.</p>
                </div>
                
                <!-- Settings Tabs -->
                <div class="mb-6">
                    <div class="border-b border-gray-200 dark:border-gray-700">
                        <nav class="-mb-px flex space-x-8">
                            <button class="settings-tab active py-2 px-1 border-b-2 border-primary font-medium text-sm text-primary" data-tab="profile">
                                Profile Information
                            </button>
                            <button class="settings-tab py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" data-tab="email">
                                Email
                            </button>
                            <button class="settings-tab py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" data-tab="password">
                                Password
                            </button>
                            <button class="settings-tab py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" data-tab="billing">
                                Billing
                            </button>
                        </nav>
                    </div>
                </div>
                
                <!-- Profile Information Tab -->
                <div id="profile-tab" class="settings-content">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Profile Information</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">Update your personal information and profile details.</p>
                        
                        <form class="space-y-6">
                            <div>
                                <label for="display-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Display Name</label>
                                <input type="text" id="display-name" name="display-name" placeholder="Enter your display name" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>
                            
                            <div>
                                <label for="bio" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
                                <textarea id="bio" name="bio" rows="4" placeholder="Tell us about yourself" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                            </div>
                            
                            <div class="flex justify-end">
                                <button type="submit" class="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <!-- Email Tab -->
                <div id="email-tab" class="settings-content hidden">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Email Settings</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">Manage your email address and verification status.</p>
                        
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Email</label>
                                <div class="flex items-center space-x-3">
                                    <span id="current-email" class="text-gray-900 dark:text-gray-100">Loading...</span>
                                    <span id="verification-status" class="px-2 py-1 text-xs font-medium rounded-full">Loading...</span>
                                </div>
                            </div>
                            
                            <div id="verification-actions" class="hidden">
                                <button id="resend-verification-email" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                    Resend Verification Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Password Tab -->
                <div id="password-tab" class="settings-content hidden">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Change Password</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">Update your password to keep your account secure.</p>
                        
                        <form id="password-form" class="space-y-6">
                            <div>
                                <label for="current-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Password</label>
                                <input type="password" id="current-password" name="current-password" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>
                            
                            <div>
                                <label for="new-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New Password</label>
                                <input type="password" id="new-password" name="new-password" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>
                            
                            <div>
                                <label for="confirm-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm New Password</label>
                                <input type="password" id="confirm-password" name="confirm-password" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>
                            
                            <div class="flex justify-end">
                                <button type="submit" class="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <!-- Billing Tab -->
                <div id="billing-tab" class="settings-content hidden">
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Billing Information</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">Manage your subscription and billing details.</p>
                        
                        <div class="space-y-6">
                            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h4 class="font-medium text-gray-900 dark:text-gray-100">Current Plan</h4>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">Free Plan</p>
                                    </div>
                                    <div class="text-right">
                                        <p class="font-medium text-gray-900 dark:text-gray-100">$0/month</p>
                                        <p class="text-sm text-gray-600 dark:text-gray-400">No billing</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="text-center py-8">
                                <i class="fas fa-credit-card text-4xl text-gray-400 mb-4"></i>
                                <h4 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Upgrade Your Plan</h4>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">Get access to premium features and unlimited usage.</p>
                                <button class="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                    View Plans
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// Current page state
let currentPage = 'dashboard';

// Layout templates are defined in layout.js



// Navigation function
function navigateToPage(page) {
    if (pageContents[page]) {
        currentPage = page;
        
        // Update page title
        document.getElementById('page-title').textContent = pageContents[page].title;
        document.title = `SBAM Dashboard - ${pageContents[page].title}`;
        
        // Update content
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = pageContents[page].content;
        }
        
        // Update navigation active state
        if (typeof setActiveNavigation === 'function') {
            setActiveNavigation(page);
        } else {
            updateNavigationState(page);
        }
        
        // Close mobile menu if open
        if (typeof window.closeMobileMenu === 'function') {
            window.closeMobileMenu();
        }
        
        // Initialize page-specific functionality
        initializePageSpecificFeatures(page);
        
        // Update URL without page reload
        const newUrl = page === 'dashboard' ? '/dashboard/' : `/dashboard/${page}/`;
        history.pushState({ page }, '', newUrl);
    }
}

// Update navigation active state
function updateNavigationState(activePage) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const icon = link.querySelector('i');
        if (icon) {
            icon.classList.remove('text-primary');
            icon.classList.add('text-gray-500');
        }
    });
    
    const activeLink = document.querySelector(`[data-page="${activePage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        const icon = activeLink.querySelector('i');
        if (icon) {
            icon.classList.remove('text-gray-500');
            icon.classList.add('text-primary');
        }
    }
}

// Initialize page-specific features
function initializePageSpecificFeatures(page) {
    if (page === 'settings') {
        initializeSettingsTabs();
    }
}

// Settings tabs functionality
function initializeSettingsTabs() {
    const tabs = document.querySelectorAll('.settings-tab');
    const contents = document.querySelectorAll('.settings-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Update tab active state
            tabs.forEach(t => {
                t.classList.remove('active', 'border-primary', 'text-primary');
                t.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            });
            
            tab.classList.add('active', 'border-primary', 'text-primary');
            tab.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            
            // Update content visibility
            contents.forEach(content => {
                content.classList.add('hidden');
            });
            
            const targetContent = document.getElementById(`${targetTab}-tab`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
}

// Mobile menu functions are handled by common.js

// Initialize the SPA
function initializeSPA() {
    console.log('Starting SPA initialization...');
    
    // Initialize layout components
    if (typeof initializeDashboardLayout !== 'undefined') {
        console.log('Initializing dashboard layout...');
        initializeDashboardLayout();
    } else {
        console.error('Error: initializeDashboardLayout function not found.');
        return;
    }

    // Initialize common functionalities
    console.log('Initializing common functionalities...');
    if (typeof initializeMobileMenu !== 'undefined') {
        initializeMobileMenu();
        console.log('Mobile menu initialized');
    }
    if (typeof initializeMobileSearch !== 'undefined') {
        initializeMobileSearch();
        console.log('Mobile search initialized');
    }
    if (typeof initializeTheme !== 'undefined') {
        initializeTheme();
        console.log('Theme initialized');
    }
    if (typeof initializeLogout !== 'undefined') {
        initializeLogout();
        console.log('Logout initialized');
    }

    // Initial page load
    console.log('Loading initial page...');
    const initialPage = window.location.hash.substring(1) || 'dashboard';
    navigateToPage(initialPage);

    // Hide loading screen
    console.log('Hiding loading screen...');
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
    
    console.log('SPA initialization complete!');
}

// Make navigateToPage globally accessible
window.navigateToPage = navigateToPage;
window.initializeSPA = initializeSPA;

// Note: SPA initialization is now handled by index.html
// to ensure proper Firebase loading order