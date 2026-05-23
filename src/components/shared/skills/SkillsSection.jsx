import SkillsGrid from '../SkillsGrid';

/**
 * Self-contained Skills section layout + scroll.
 * Mobile: single dedicated scroll viewport (no nested overflow on parents).
 * Desktop / window: content flows in parent scroll — no inner scroll container.
 */
export default function SkillsSection({ data, variant = 'desktop' }) {
    if (variant === 'mobile') {
        return (
            <div className="relative h-[100dvh] w-full flex flex-col bg-background overflow-hidden">
                <div className="shrink-0 px-6 pt-20 pb-4 max-w-lg mx-auto w-full relative z-10">
                    <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl mb-8 shadow-lg grayscale">
                        💡
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-accent uppercase">
                        Expertise
                    </h2>
                </div>

                <div className="skills-scroll-viewport flex-1 min-h-0 w-full overflow-x-hidden overflow-y-auto no-scrollbar">
                    <div className="px-6 pb-28 max-w-lg mx-auto w-full">
                        <SkillsGrid data={data} />
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'window') {
        return (
            <div className="skills-section-flow">
                <h2 className="text-2xl font-black mb-8 tracking-tight text-accent uppercase text-left">
                    Expertise
                </h2>
                <SkillsGrid data={data} />
            </div>
        );
    }

    return (
        <div className="skills-section-flow w-full">
            <SkillsGrid data={data} />
        </div>
    );
}
