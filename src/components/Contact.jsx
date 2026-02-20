import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/sections.css';

// TODO: Replace with actual contact details
const CONTACT_INFO = [
    {
        label: 'Instagram',
        value: '@mollerachocolate',
        href: 'https://www.instagram.com/mollerachocolate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'Phone',
        value: '0542 912 4040',
        href: 'tel:05429124040',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        label: 'Email',
        value: 'Mollerachocolate@gmail.com',
        href: 'mailto:Mollerachocolate@gmail.com',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
            </svg>
        ),
    },
    {
        label: 'Location',
        value: 'Ankara, Turkey',
        href: null,
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
            </svg>
        ),
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Connect to actual form submission service (e.g., Formspree, EmailJS)
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__inner">
                {/* Left: Info */}
                <motion.div
                    className="contact__left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="contact__eyebrow label-small">Get in Touch</p>
                    <h2 className="contact__title heading-section">
                        Let's Start a<br />Conversation
                    </h2>

                    <ul className="contact__info-list">
                        {CONTACT_INFO.map((item) => (
                            <li key={item.label} className="contact__info-item">
                                <span className="contact__info-icon">{item.icon}</span>
                                <div className="contact__info-content">
                                    <p className="contact__info-label label-small">{item.label}</p>
                                    <p className="contact__info-value">
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.value}
                                            </a>
                                        ) : (
                                            item.value
                                        )}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Social links */}
                    <div className="contact__social">
                        <a
                            href="https://www.instagram.com/mollerachocolate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__social-link"
                        >
                            Instagram ↗
                        </a>
                        <a
                            href="mailto:Mollerachocolate@gmail.com"
                            className="contact__social-link"
                        >
                            Email ↗
                        </a>
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ paddingTop: '40px' }}
                        >
                            <p style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.75rem',
                                fontWeight: 300,
                                color: 'var(--champagne)',
                                marginBottom: '12px',
                            }}>
                                Thank you.
                            </p>
                            <p style={{ fontSize: '0.875rem', color: 'var(--champagne)', opacity: 0.6 }}>
                                We'll be in touch soon.
                            </p>
                        </motion.div>
                    ) : (
                        <form className="contact__form" onSubmit={handleSubmit} noValidate>
                            <div className="contact__form-group">
                                <label className="contact__form-label label-small" htmlFor="contact-name">
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    className="contact__form-input"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="contact__form-group">
                                <label className="contact__form-label label-small" htmlFor="contact-email">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    className="contact__form-input"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="contact__form-group">
                                <label className="contact__form-label label-small" htmlFor="contact-message">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    className="contact__form-textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your inquiry..."
                                    rows={4}
                                    required
                                />
                            </div>

                            <button type="submit" className="contact__form-submit">
                                Send Message →
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
