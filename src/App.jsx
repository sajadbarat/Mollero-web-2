import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Mollera Chocolates — Premium Artisan Chocolate Showcase
 * 
 * Sections:
 *  1. Header   — Sticky minimal nav with mobile hamburger
 *  2. Hero     — Asymmetric floating product card showcase
 *  3. Products — 2-column gallery with scroll animations
 *  4. About    — Centered brand story (max-width 700px)
 *  5. Contact  — Info + form on navy background
 *  6. Footer   — Minimal dark chocolate footer
 */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
