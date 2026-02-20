import { motion } from 'framer-motion';
import '../styles/sections.css';

// TODO: Replace placeholder text with actual brand story
const ABOUT_TEXT = [
    "At Mollera, we believe chocolate is not merely a confection — it is a language. A language of terroir, of craft, of quiet luxury. Each bar we create begins with a single question: what does this cacao want to say?",
    "We source our beans directly from small-scale farmers across Ecuador, Madagascar, and Peru, building relationships rooted in transparency and mutual respect. From fermentation to final enrobing, every step is guided by an obsessive attention to detail and a deep reverence for the raw material.",
];

const STATS = [
    { number: '12+', label: 'Origins' },
    { number: '50+', label: 'Collections' },
    { number: '100%', label: 'Artisan' },
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about__inner">
                <motion.p
                    className="about__eyebrow label-small"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7 }}
                >
                    Our Story
                </motion.p>

                <motion.h2
                    className="about__title heading-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Where Craft Meets <em>Obsession</em>
                </motion.h2>

                <motion.div
                    className="about__divider"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ transformOrigin: 'center' }}
                />

                {ABOUT_TEXT.map((para, i) => (
                    <motion.p
                        key={i}
                        className="about__text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                    >
                        {para}
                    </motion.p>
                ))}

                {/* Stats */}
                <motion.div
                    className="about__stats"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {STATS.map((stat) => (
                        <div key={stat.label} className="about__stat">
                            <p className="about__stat-number heading-display">{stat.number}</p>
                            <p className="about__stat-label label-small">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
