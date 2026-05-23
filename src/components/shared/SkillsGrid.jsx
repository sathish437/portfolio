import { motion } from 'framer-motion';
import SkillCategorySection from './SkillCategorySection';

export default function SkillsGrid({ data }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    // Dynamically combine "Database" and "Tools & DevOps" categories into a single category "Tools & Databases"
    const combinedCategories = [];
    data.categories.forEach(cat => {
        if (cat.name === 'Database' || cat.name === 'Tools & DevOps') {
            let toolsDbCat = combinedCategories.find(c => c.name === 'Tools & Databases');
            if (!toolsDbCat) {
                toolsDbCat = {
                    name: 'Tools & Databases',
                    icon: 'Database',
                    color: 'cool',
                    items: []
                };
                combinedCategories.push(toolsDbCat);
            }
            // Merge skill items
            cat.items.forEach(item => {
                if (!toolsDbCat.items.some(existing => existing.name === item.name)) {
                    toolsDbCat.items.push(item);
                }
            });
        } else {
            combinedCategories.push(cat);
        }
    });

    return (
        <div className="relative w-full">
            {/* Background Glow Effects */}
            <div className="absolute -top-40 -left-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none touch-none" />
            <div className="absolute top-1/3 -right-40 w-80 h-80 bg-accent/6 rounded-full blur-3xl pointer-events-none touch-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none touch-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-content flex flex-col gap-10"
            >
                {combinedCategories.map((category, categoryIndex) => (
                    <SkillCategorySection
                        key={category.name}
                        category={category}
                        index={categoryIndex}
                    />
                ))}
            </motion.div>
        </div>
    );
}

