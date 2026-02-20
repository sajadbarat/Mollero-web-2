import { motion } from 'framer-motion';
import '../styles/products.css';

// Reusable scroll fade-up animation hook
const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function ProductCard({ product, index }) {
    return (
        <motion.article
            className="product-card"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: (index % 2) * 0.15 }}
        >
            {/* Product Image */}
            <div className="product-card__image-wrap">
                <img
                    className="product-card__image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    style={{ objectPosition: product.imagePosition || 'center' }}
                />
                {/* Tag badge */}
                <span className="product-card__tag label-small">{product.tag}</span>
            </div>

            {/* Product Info */}
            <div className="product-card__body">
                <p className="product-card__subtitle label-small">{product.subtitle}</p>
                <h3 className="product-card__name heading-section">{product.name}</h3>
                {/* TODO: Replace with actual product description */}
                <p className="product-card__description">{product.description}</p>
                {/* Animated gold underline on hover */}
                <div className="product-card__line" />
            </div>
        </motion.article>
    );
}
