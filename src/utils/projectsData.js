export const formatProjectTitle = (url) => {
    try {
        const parsedUrl = new URL(url);
        let namePart = parsedUrl.hostname.split('.')[0];

        // Remove trailing numbers or generic IDs (e.g., -60045000333, -65, 46, -2, -3-j0ku, -782, -5347)
        namePart = namePart.replace(/-\d+-?[a-z0-9]*$/, ''); // Catches -3-j0ku
        namePart = namePart.replace(/-\d+$/, '');
        namePart = namePart.replace(/\d+$/, '');

        // Custom overrides for specific project name styles based on the examples requested
        const overrides = {
            'simple-calc': 'Simple Calculator',
            'totolist': 'Todo List',
            'hato-gymworkouts': 'Hato Gym Workouts',
            'it-your-notepad': 'IT Your Notepad' // or just let it format normally
        };

        if (overrides[namePart]) {
            return overrides[namePart];
        }

        // Split by hyphens and capitalize each word
        let title = namePart
            .split('-')
            .filter(Boolean)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return title;
    } catch (e) {
        return "Untitled Project";
    }
};

const vanillaTechStack = ["HTML", "CSS", "JavaScript"];
const tailwindJSTechStack = ["HTML", "Tailwind CSS", "JavaScript"];
const reactTailwindTechStack = ["React", "Tailwind CSS"];

const descriptions = {
    'learn-english-checklist': 'Interactive checklist developed to track and enhance English language learning milestones with structured progress monitoring.',
    'simple-calc': 'Streamlined calculator tool performing essential arithmetic operations with an intuitive user interface.',
    'simple-convertors': 'Multi-unit conversion utility supporting length, weight, and temperature transformations for daily use.',
    'simple-stopwatch': 'Clean, responsive stopwatch application featuring precise start, stop, and reset functionalities.',
    'it-your-notepad': 'Functional note-taking application designed for efficient drafting, editing, and organization of digital notes.',
    'stopclock': 'Highly accurate digital stopclock optimized for measuring time intervals with high precision.',
    'e-commerce': 'Modern e-commerce storefront demonstration showcasing product listings and interactive shopping experiences.',
    'totolist': 'Productivity-focused task manager enabling users to organize, prioritize, and complete daily objectives.',
    'hato-gymworkouts': 'Comprehensive fitness companion offering curated workout plans and detailed exercise tracking.',
    'food-nutrition': 'Data-driven nutrition dashboard providing instant access to caloric and nutritional information for various food items.',
    'jokegenerator': 'Lighthearted web application that utilizes API integration to deliver a constant stream of humor across various categories.',
    'data-science-guidence': 'Educational hub offering structured pathways and curated resources for aspiring data scientists.',
    'bill-system': 'Dynamic billing solution designed to automate total calculations and generate structured invoices in real-time.',
    'shopping-app': 'Feature-rich shopping platform with integrated product browsing and seamless cart management.',
};

const getDescription = (url) => {
    try {
        const slug = new URL(url).hostname.split('.')[0]
            .replace(/-\d+-?[a-z0-9]*$/, '')
            .replace(/-\d+$/, '')
            .replace(/\d+$/, '');
        return descriptions[slug] || '';
    } catch { return ''; }
};

const createProject = (url, stack, idStart, featured = false) => ({
    id: idStart,
    name: formatProjectTitle(url),
    description: getDescription(url),
    stack: stack,
    links: { live: url },
    featured: featured
});

export const projectCategories = [
    {
        categoryName: "Core Web Projects (HTML, CSS, JavaScript)",
        categoryDescription: "Collection of fundamental web development projects focusing on core concepts and layout structures.",
        categoryImage: "/img/catagiry1.png",
        projects: [
            "https://learn-english-checklist-60045000333.development.catalystserverless.in/app/index.html",
            "https://simple-calc-60045000333.development.catalystserverless.in/app/index.html",
            "https://simple-convertors.netlify.app/",
            "https://simple-stopwatch-65.netlify.app/",
            "https://it-your-notepad.netlify.app/",
            "https://stopclock-63.netlify.app/",
            "https://e-commerce-60045000333.development.catalystserverless.in/app/index.html",
            "https://totolist-60045000333.development.catalystserverless.in/app/index.html",
            "https://hato-gymworkouts-5347.netlify.app/"
        ].map((url, i) => createProject(url, vanillaTechStack, i + 10, i < 2))
    },
    {
        categoryName: "Modern UI & API Projects (Tailwind, JavaScript, REST API)",
        categoryDescription: "Data-driven web applications leveraging modern CSS frameworks and integrating with external REST APIs.",
        categoryImage: "/img/category2.jpg",
        projects: [
            "https://food-nutrition-2.onrender.com/",
            "https://jokegenerator-3-j0ku.onrender.com/",
            "https://data-science-guidence46.netlify.app/"
        ].map((url, i) => createProject(url, tailwindJSTechStack, i + 20, i < 1))
    },
    {
        categoryName: "Advanced Frontend Apps (React & Tailwind)",
        categoryDescription: "Complex stateful applications built with modern frontend frameworks outlining advanced component architecture.",
        categoryImage: "/img/category3.jpg",
        projects: [
            "https://bill-system-67.netlify.app/",
            "https://shopping-app-782.netlify.app/"
        ].map((url, i) => createProject(url, reactTailwindTechStack, i + 30, i < 2))
    }
];

// Combine all for places where categorization isn't needed, if any
export const allProjects = projectCategories.flatMap(c => c.projects);
