import '../styles/sections.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <span className="footer__brand">Mollera Chocolates</span>
            {/* TODO: Update copyright year dynamically */}
            <p className="footer__copy">© {year} Mollera Chocolates. All rights reserved.</p>
            <nav className="footer__links">
                <a href="#products" className="footer__link">Collection</a>
                <a href="#about" className="footer__link">Story</a>
                <a href="#contact" className="footer__link">Contact</a>
            </nav>
        </footer>
    );
}
