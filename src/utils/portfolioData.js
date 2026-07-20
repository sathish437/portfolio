import { projectCategories } from './projectsData';

export const portfolioData = {
    profile: {
        name: "Sathish",
        role: "Java Full Stack Developer",
        intro: "Architecting high-performance, structured web solutions from clean backend API endpoints to polished interactive user interfaces.",
        status: "Available for new projects",
        social: {
            github: "https://github.com/sathish437",
            linkedin: "https://www.linkedin.com/in/sathish-duraisamy-a56999298/",
            email: "mailto:duraisamysathish4@gmail.com"
        }
    },
    sections: {
        about: {
            title: "About",
            intro: "Java Full Stack Developer passionate about building scalable web applications using Spring Boot, React.js, and modern web technologies. Focused on creating clean backend APIs and responsive user experiences.",
            techHighlight: "Skilled in Java, Spring Boot, Microservices, Hibernate/JPA, React.js, MySQL, and PostgreSQL.",
            statement: "Committed to engineering scalable web infrastructure, optimizing query performances, and translating complex technical requirements into user-friendly digital tools."
        },
        skills: {
            title: "Skills",
            categories: [
                {
                    name: "Programming Languages",
                    items: [
                        { name: "Java", highlight: true },
                        { name: "JavaScript", highlight: true }
                    ]
                },
                {
                    name: "Frontend",
                    items: [
                        { name: "React.js", highlight: true },
                        { name: "HTML5" },
                        { name: "CSS3" },
                        { name: "Tailwind CSS", highlight: true },
                        { name: "Responsive Web Design" }
                    ]
                },
                {
                    name: "Backend",
                    items: [
                        { name: "Spring Boot", highlight: true },
                        { name: "Spring Security", highlight: true },
                        { name: "REST APIs" },
                        { name: "JDBC" },
                        { name: "JWT Authentication", highlight: true },
                        { name: "Microservices", highlight: true }
                    ]
                },
                {
                    name: "Database",
                    items: [
                        { name: "MySQL", highlight: true },
                        { name: "PostgreSQL", highlight: true }
                    ]
                },
                {
                    name: "Microservices & Cloud",
                    items: [
                        { name: "Spring Cloud", highlight: true },
                        { name: "Eureka Server" },
                        { name: "API Gateway", highlight: true },
                        { name: "OpenFeign" },
                        { name: "Config Server" }
                    ]
                },
                {
                    name: "DevOps & Tools",
                    items: [
                        { name: "Docker", highlight: true },
                        { name: "Git", highlight: true },
                        { name: "GitHub" },
                        { name: "Maven" },
                        { name: "Postman" },
                        { name: "Swagger/OpenAPI" },
                        { name: "IntelliJ IDEA" }
                    ]
                }
            ]
        },
        projects: projectCategories,
        contact: {
            title: "Contact",
            methods: [
                { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/sathish-duraisamy-a56999298", link: "https://www.linkedin.com/in/sathish-duraisamy-a56999298/" },
                { id: "github", label: "GitHub", value: "github.com/sathish437", link: "https://github.com/sathish437" },
                { id: "email", label: "Email", value: "duraisamysathish4@gmail.com", link: "mailto:duraisamysathish4@gmail.com" }
            ]
        }
    }
};
