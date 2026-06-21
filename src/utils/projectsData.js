const cleanHostSegment = (segment) => {
    return segment
        .replace(/-[a-z0-9]{4}$/i, '') // Strips 4-character hashes like -le87, -iwkx, -5xf1, -j0ku
        .replace(/-\d+$/, '')          // Strips trailing hyphenated digits like -65, -1, -60045000333
        .replace(/\d+$/, '');          // Strips trailing digits without hyphen like 46
};

export const formatProjectTitle = (url) => {
    try {
        const parsedUrl = new URL(url);
        let namePart = parsedUrl.hostname.split('.')[0];

        namePart = cleanHostSegment(namePart);

        const overrides = {
            'simple-calc': 'Simple Calculator',
            'totolist': 'Todo List',
            'hato-gymworkouts': 'Hato Gym Workouts',
            'it-your-notepad': 'IT Your Notepad',
            'healthsync': 'HealthSync',
            'chatbot': 'AI Chatbot',
            'ecom': 'E-Commerce Platform',
            'progressoverview': 'Progress Overview',
            'jobvacancy': 'Job Vacancy',
            'librarymanagementfrontend': 'Library Management System',
            'simplereg': 'Simple Registration System',
        };

        if (overrides[namePart]) return overrides[namePart];

        return namePart
            .split('-')
            .filter(Boolean)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    } catch (e) {
        return 'Untitled Project';
    }
};

// ─── Tech Stack Presets ──────────────────────────────────────────────────────

const vanillaStack   = ['HTML5', 'CSS3', 'JavaScript'];
const tailwindStack  = ['HTML5', 'Tailwind CSS', 'JavaScript', 'REST API'];
const reactStack     = ['React', 'Tailwind CSS', 'JavaScript', 'REST API'];
const fullStack      = ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'REST API'];
const renderStack    = ['React', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Render'];

// ─── Project Enrichment Map ──────────────────────────────────────────────────
// type:    'Web App' | 'Tool' | 'Dashboard' | 'Full Stack' | 'API Integration' | 'Platform'
// status:  'Live' | 'Beta' | 'Archived'
// features: up to 3 short bullet strings

const projectMeta = {
    'learn-english-checklist': {
        type: 'Tool',
        status: 'Live',
        features: ['Milestone progress tracking', 'Structured learning flow', 'Persistent state'],
    },
    'simple-calc': {
        type: 'Tool',
        status: 'Live',
        features: ['Full arithmetic operations', 'Keyboard input support', 'Zero-dependency build'],
    },
    'simple-convertors': {
        type: 'Tool',
        status: 'Live',
        features: ['Multi-unit support (length, weight, temp)', 'Instant live conversion', 'Mobile responsive'],
    },
    'simple-stopwatch': {
        type: 'Tool',
        status: 'Live',
        features: ['Start / Pause / Reset controls', 'Millisecond precision', 'Minimal UI'],
    },
    'it-your-notepad': {
        type: 'Tool',
        status: 'Live',
        features: ['In-browser text editing', 'Auto-save to localStorage', 'Clean writing UI'],
    },
    'stopclock': {
        type: 'Tool',
        status: 'Live',
        features: ['High-precision clock', 'Lap tracking', 'Animated display'],
    },
    'e-commerce': {
        type: 'Web App',
        status: 'Live',
        features: ['Product catalogue grid', 'Cart state management', 'Responsive layout'],
    },
    'totolist': {
        type: 'Tool',
        status: 'Live',
        features: ['CRUD task management', 'Priority sorting', 'Persistent localStorage'],
    },
    'hato-gymworkouts': {
        type: 'Web App',
        status: 'Live',
        features: ['Curated workout plans', 'Category filtering', 'Progress indicators'],
    },
    'food-nutrition': {
        type: 'Dashboard',
        status: 'Live',
        features: ['Nutrition data lookup via API', 'Macronutrient breakdown', 'Search-driven UX'],
    },
    'jokegenerator': {
        type: 'API Integration',
        status: 'Live',
        features: ['Live joke API stream', 'Category filter', 'Share functionality'],
    },
    'data-science-guidence': {
        type: 'Web App',
        status: 'Live',
        features: ['Structured learning paths', 'Resource curated library', 'Responsive grid layout'],
    },
    'bill-system': {
        type: 'Dashboard',
        status: 'Live',
        features: ['Real-time invoice generation', 'Auto-total calculation', 'Print-ready output'],
    },
    'shopping-app': {
        type: 'Web App',
        status: 'Live',
        features: ['Product browsing & filtering', 'Cart with quantity controls', 'State-driven checkout flow'],
    },
    'progressoverview': {
        type: 'Dashboard',
        status: 'Live',
        features: ['Workflow performance metrics', 'Task status visualization', 'Cloud deployed on Render'],
    },
    'healthsync': {
        type: 'Full Stack',
        status: 'Live',
        features: ['Health record management', 'Activity tracking dashboard', 'Secure REST API backend'],
    },
    'chatbot': {
        type: 'Full Stack',
        status: 'Live',
        features: ['Real-time AI chat interface', 'Gemini API integration', 'Session memory management'],
    },
    'ecom': {
        type: 'Platform',
        status: 'Live',
        features: ['Full product & cart lifecycle', 'Spring Boot REST backend', 'React SPA storefront'],
    },
    'jobvacancy': {
        type: 'Web App',
        status: 'Live',
        features: ['Job listing and search functionality', 'Dynamic API based data loading', 'Responsive user interface'],
    },
    'librarymanagementfrontend': {
        type: 'Full Stack',
        status: 'Live',
        features: ['Library workflow management', 'REST API based backend', 'PostgreSQL database storage'],
    },
    'simplereg': {
        type: 'Full Stack',
        status: 'Live',
        features: ['User registration flow', 'Backend API integration', 'Database connectivity'],
    },
};

// ─── Slug Extraction Helper ───────────────────────────────────────────────────

const getSlug = (url) => {
    try {
        const segment = new URL(url).hostname.split('.')[0];
        return cleanHostSegment(segment);
    } catch { return ''; }
};

const descriptions = {
    'learn-english-checklist': 'Interactive checklist to track and enhance English language learning milestones with structured progress monitoring.',
    'simple-calc':             'Streamlined calculator performing essential arithmetic operations with a minimal, intuitive interface.',
    'simple-convertors':       'Multi-unit conversion utility supporting length, weight, and temperature transformations.',
    'simple-stopwatch':        'Clean, responsive stopwatch with precise start, stop, and reset controls.',
    'it-your-notepad':         'Browser-native notepad for drafting, editing, and organizing digital notes with auto-save.',
    'stopclock':               'High-accuracy digital stopclock with lap tracking and animated display.',
    'e-commerce':              'Modern e-commerce storefront demonstrating product listings and interactive cart management.',
    'totolist':                'Productivity-first task manager for organizing, prioritizing, and completing daily objectives.',
    'hato-gymworkouts':        'Comprehensive fitness companion offering curated workout plans and exercise category filtering.',
    'food-nutrition':          'Data-driven nutrition dashboard providing instant macronutrient breakdowns via REST API.',
    'jokegenerator':           'Lighthearted app leveraging a live joke API to stream humor across multiple categories.',
    'data-science-guidence':   'Educational hub offering structured learning paths and curated resources for aspiring data scientists.',
    'bill-system':             'Dynamic billing solution that auto-calculates totals and generates print-ready invoices.',
    'shopping-app':            'Feature-rich shopping platform with integrated product browsing and seamless cart controls.',
    'progressoverview':        'Clean progress tracking dashboard to monitor performance metrics and task workflow status.',
    'healthsync':              'Full-stack health management app for wellness data tracking and secure record management.',
    'chatbot':                 'Interactive AI chatbot with Gemini API integration and real-time conversation sessions.',
    'ecom':                    'Production-grade e-commerce platform with Spring Boot REST API and React SPA frontend.',
    'jobvacancy':              'A job listing platform built with React and Tailwind CSS with REST API integration for dynamic job data handling.',
    'librarymanagementfrontend': 'Full stack library management system with React frontend, Spring Boot backend APIs, and PostgreSQL database integration.',
    'simplereg':               'Full stack registration application with React interface and Spring Boot REST backend.',
};

// ─── Project Factory ──────────────────────────────────────────────────────────

const createProject = (url, stack, idStart, featured = false) => {
    const slug = getSlug(url);
    const meta = projectMeta[slug] || {};
    return {
        id: idStart,
        name: formatProjectTitle(url),
        description: descriptions[slug] || 'High-performance enterprise application.',
        type: meta.type || 'Web App',
        status: meta.status || 'Live',
        features: meta.features || [],
        stack,
        links: { live: url },
        featured,
    };
};

// ─── Project Categories ───────────────────────────────────────────────────────

export const projectCategories = [
    {
        categoryName: 'Spring Boot Applications',
        categoryShort: 'React + Spring Boot',
        categoryDescription: 'Enterprise style applications built with React frontend and Spring Boot backend services.',
        categoryImage: '/img/category4.png',
        projects: [
            'https://librarymanagementfrontend-ngf5.onrender.com/',
            'https://simplereg-fe1q.onrender.com/',
        ].map((url, i) => createProject(url, fullStack, i + 60, false)),
    },
    {
        categoryName: 'Full Stack Apps',
        categoryShort: 'Render Cloud',
        categoryDescription: 'Production-ready full stack applications deployed on Render cloud with React frontends and Spring Boot / Node.js backends.',
        categoryImage: '/img/category5.png',
        projects: [
            'https://progressoverview-1.onrender.com',
            'https://healthsync-le87.onrender.com',
            'https://chatbot-iwkx.onrender.com',
            'https://ecom-5xf1.onrender.com',
        ].map((url, i) => createProject(url, fullStack, i + 50, i < 2)),
    },
    {
        categoryName: 'Advanced Frontend Apps',
        categoryShort: 'React & Tailwind',
        categoryDescription: 'Complex stateful applications built with React and Tailwind — showcasing advanced component architecture and state management.',
        categoryImage: '/img/category3.png',
        projects: [
            'https://bill-system-67.netlify.app/',
            'https://shopping-app-782.netlify.app/',
            'https://jobvacancy1.onrender.com/',
        ].map((url, i) => createProject(url, reactStack, i + 30, i < 2)),
    },
    {
        categoryName: 'Modern UI & API Projects',
        categoryShort: 'Tailwind / REST API',
        categoryDescription: 'Data-driven web apps leveraging Tailwind CSS and external REST APIs for dynamic, visually polished user experiences.',
        categoryImage: '/img/category2.png',
        projects: [
            'https://food-nutrition-2.onrender.com/',
            'https://jokegenerator-3-j0ku.onrender.com/',
            'https://data-science-guidence46.netlify.app/',
        ].map((url, i) => createProject(url, tailwindStack, i + 20, i < 1)),
    },
    {
        categoryName: 'Core Web Projects',
        categoryShort: 'HTML / CSS / JS',
        categoryDescription: 'Foundational projects built with vanilla HTML, CSS, and JavaScript — demonstrating core web concepts, responsive layouts, and DOM manipulation.',
        categoryImage: '/img/catagiry1.png',
        projects: [
            'https://learn-english-checklist-60045000333.development.catalystserverless.in/app/index.html',
            'https://simple-calc-60045000333.development.catalystserverless.in/app/index.html',
            'https://simple-convertors.netlify.app/',
            'https://simple-stopwatch-65.netlify.app/',
            'https://it-your-notepad.netlify.app/',
            'https://stopclock-63.netlify.app/',
            'https://e-commerce-60045000333.development.catalystserverless.in/app/index.html',
            'https://totolist-60045000333.development.catalystserverless.in/app/index.html',
            'https://hato-gymworkouts-5347.netlify.app/',
        ].map((url, i) => createProject(url, vanillaStack, i + 10, i < 2)),
    },
];

// Flat list for any non-categorized usage
export const allProjects = projectCategories.flatMap(c => c.projects);
