import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import '../styles/products.css';

export default function ProductGallery() {
    return (
        <section className="gallery" id="products">
            {/* Section Header */}
            <motion.div
                className="gallery__header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <p className="gallery__eyebrow label-small">Our Collection</p>
                <h2 className="gallery__title heading-section">
                    Crafted with Intention
                </h2>
            </motion.div>

            {/* 2-Column Product Grid */}
            <div className="gallery__grid">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
        </section>
    );
}
