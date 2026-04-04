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
    'learn-english-checklist': 'Helps users track and improve their English learning progress with a structured checklist.',
    'simple-calc': 'Performs basic arithmetic operations like addition, subtraction, multiplication, and division.',
    'simple-convertors': 'Converts values between different units like length, weight, or temperature.',
    'simple-stopwatch': 'Tracks time with start, stop, and reset functionality.',
    'it-your-notepad': 'Allows users to write, edit, and manage notes easily.',
    'stopwatch': 'A digital stopwatch to measure time intervals accurately.',
    'e-commerce': 'Displays products and simulates an online shopping experience.',
    'totolist': 'Helps users create, manage, and track daily tasks.',
    'hato-gymworkouts': 'Provides workout plans and exercises for fitness tracking.',
    'food-nutrition': 'Shows nutritional information for different foods in a clean UI.',
    'jokegenerator': 'Generates random jokes for entertainment.',
    'data-science-guidence': 'Provides basic guidance and resources for learning data science.',
    'bill-system': 'Generates bills and calculates totals for items dynamically.',
    'shopping-app': 'Allows users to browse products and manage a shopping cart.',
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

const createProject = (url, stack, idStart) => ({
    id: idStart,
    name: formatProjectTitle(url),
    description: getDescription(url),
    stack: stack,
    links: { live: url }
});

export const projectCategories = [
    {
        categoryName: "HTML, CSS, JavaScript",
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
        ].map((url, i) => createProject(url, vanillaTechStack, i + 10))
    },
    {
        categoryName: "HTML, Tailwind CSS, JavaScript , Rest API",
        projects: [
            "https://food-nutrition-2.onrender.com/",
            "https://jokegenerator-3-j0ku.onrender.com/",
            "https://data-science-guidence46.netlify.app/"
        ].map((url, i) => createProject(url, tailwindJSTechStack, i + 20))
    },
    {
        categoryName: "React, Tailwind CSS",
        projects: [
            "https://bill-system-67.netlify.app/",
            "https://shopping-app-782.netlify.app/"
        ].map((url, i) => createProject(url, reactTailwindTechStack, i + 30))
    }
];

// Combine all for places where categorization isn't needed, if any
export const allProjects = projectCategories.flatMap(c => c.projects);
