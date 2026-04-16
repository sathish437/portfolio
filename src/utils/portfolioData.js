import { projectCategories } from './projectsData';

export const portfolioData = {
    profile: {
        name: "Sathish",
        role: "Java Full Stack Developer",
        intro: "Building structured web applications from frontend to backend.",
        status: "Available for new projects",
        social: {
            github: "https://github.com/sathish437",
            linkedin: "https://linkedin.com/in/sathish", // Placeholder, since they couldn't remember their exact handling, using their github name for now.
            email: "mailto:duraisamysathish4@gmail.com"
        }
    },
    sections: {
        about: {
            title: "About",
            intro: "I am a Java Full Stack Developer with hands-on experience in building web applications from frontend to backend. I focus on structured projects and applying my technical and problem-solving skills to real-world applications.",
            techHighlight: "Skilled in Java, Spring Boot, React, and MySQL.",
            statement: "Focused on building scalable applications and solving real-world problems through clean and efficient code."
        },
        skills: {
            title: "Skills",
            categories: [
                {
                    name: "Programming Languages",
                    icon: "Code2",
                    color: "cool",
                    items: [
                        { name: "Java", desc: "OOP, Collections", icon: "Code", highlight: true, proficiency: 85 },
                        { name: "JavaScript", desc: "ES6 basics", icon: "Zap", highlight: false, proficiency: 75 }
                    ]
                },
                {
                    name: "Frontend",
                    icon: "Layout",
                    color: "cool",
                    items: [
                        { name: "HTML5", icon: "Code", highlight: false, proficiency: 90 },
                        { name: "CSS3", icon: "Palette", highlight: false, proficiency: 85 },
                        { name: "Tailwind CSS", icon: "Wind", highlight: false, proficiency: 88 },
                        { name: "React.js", desc: "Components, Hooks, API Integration", icon: "Sparkles", highlight: true, proficiency: 82 }
                    ]
                },
                {
                    name: "Backend",
                    icon: "Server",
                    color: "cool",
                    items: [
                        { name: "Spring Boot", desc: "REST API Development", icon: "Leaf", highlight: true, proficiency: 80 },
                        { name: "Hibernate / JPA", icon: "Database", highlight: false, proficiency: 75 },
                        { name: "MVC Architecture", icon: "Layers", highlight: false, proficiency: 78 }
                    ]
                },
                {
                    name: "Database",
                    icon: "Database",
                    color: "cool",
                    items: [
                        { name: "MySQL", desc: "CRUD Operations, Relationships", icon: "Database", highlight: false, proficiency: 82 },
                        { name: "PostgreSQL", desc: "CRUD Operations, Relationships", icon: "Database", highlight: false, proficiency: 78 }
                    ]
                },
                {
                    name: "Tools & DevOps",
                    icon: "Wrench",
                    color: "cool",
                    items: [
                        { name: "Git", icon: "GitBranch", highlight: false, proficiency: 80 },
                        { name: "GitHub", icon: "Github", highlight: false, proficiency: 80 },
                        { name: "Maven", icon: "Package", highlight: false, proficiency: 75 },
                        { name: "Postman", icon: "FileText", highlight: false, proficiency: 85 }
                    ]
                }
            ]
        },
        projects: projectCategories,
        contact: {
            title: "Contact",
            methods: [
                { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/insert-username", link: "https://linkedin.com/in/" },
                { id: "github", label: "GitHub", value: "github.com/sathish437", link: "https://github.com/sathish437" }
            ]
        }
    }
}
