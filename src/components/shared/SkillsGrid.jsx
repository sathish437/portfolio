import { motion } from 'framer-motion';
import SkillCategorySection from './SkillCategorySection';

export default function SkillsGrid({ data }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
            },
        },
    };

    const combinedCategories = data.categories;

    return (
        <div className="relative w-full overflow-visible">
            <div className="absolute -top-40 -left-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 -right-40 w-80 h-80 bg-accent/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-content flex flex-col gap-8 pb-2 overflow-visible"
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
