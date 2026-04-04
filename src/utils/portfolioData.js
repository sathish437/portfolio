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
                    items: [
                        { name: "Java", desc: "OOP, Collections", highlight: true },
                        { name: "JavaScript", desc: "ES6 basics", highlight: false }
                    ]
                },
                {
                    name: "Frontend",
                    items: [
                        { name: "HTML5", highlight: false },
                        { name: "CSS3", highlight: false },
                        { name: "Tailwind CSS", highlight: false },
                        { name: "React.js", desc: "Components, Hooks, API Integration", highlight: true }
                    ]
                },
                {
                    name: "Backend",
                    items: [
                        { name: "Spring Boot", desc: "REST API Development", highlight: true },
                        { name: "Hibernate / JPA", highlight: false },
                        { name: "MVC Architecture", highlight: false }
                    ]
                },
                {
                    name: "Database",
                    items: [
                        { name: "MySQL", desc: "CRUD Operations, Relationships", highlight: false },
                        { name: "PostgreSQL", desc: "CRUD Operations, Relationships", highlight: false }
                    ]
                },
                {
                    name: "Tools",
                    items: [
                        { name: "Git", highlight: false },
                        { name: "GitHub", highlight: false },
                        { name: "Maven", highlight: false },
                        { name: "Postman", highlight: false }
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
