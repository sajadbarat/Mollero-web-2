import { motion } from 'framer-motion';
import { products } from '../data/products';
import '../styles/hero.css';

// Animation variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Cards slide in from bottom with stagger
const cardVariants = (i) => ({
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.94,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.85,
            delay: i * 0.12 + 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
});

export default function Hero() {
    const handleScrollToProducts = () => {
        const el = document.querySelector('#products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero__inner">
                {/* Left: Brand Content */}
                <motion.div
                    className="hero__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p className="hero__eyebrow label-small" variants={textVariants}>
                        Artisan Chocolatier
                    </motion.p>

                    <motion.h1 className="hero__title heading-display" variants={textVariants}>
                        Mollera<br />
                        <em>Chocolates</em>
                    </motion.h1>

                    <motion.p className="hero__tagline" variants={textVariants}>
                        {/* TODO: Replace with actual brand tagline */}
                        Experience the Art of Pure Indulgence. Crafted with rare cacao and an obsessive attention to detail.
                    </motion.p>

                    <motion.button
                        className="hero__cta"
                        variants={textVariants}
                        onClick={handleScrollToProducts}
                    >
                        <span>Explore Collection</span>
                        <span className="hero__cta-arrow">→</span>
                    </motion.button>
                </motion.div>

                {/* Right: 2-column staggered product showcase — 4 featured products */}
                <div className="hero__grid" aria-hidden="true">
                    {products.slice(0, 4).map((product, i) => (
                        <motion.div
                            key={product.id}
                            className="hero__product-card"
                            variants={cardVariants(i)}
                            initial="hidden"
                            animate="visible"
                        >
                            <img
                                className="hero__product-img"
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                            />
                            <div className="hero__product-info">
                                <p className="hero__product-tag">{product.tag}</p>
                                <p className="hero__product-name">{product.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative label */}
            <p className="hero__decor-line">Est. 2024 · Artisan Chocolate</p>
        </section>
    );
}
