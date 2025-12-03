import { useState } from 'react';
import './CallToAction.css';

export function CallToAction() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail('');
      
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }, 1500)
  };

  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-gradient-orb cta-orb-1"></div>
        <div className="cta-gradient-orb cta-orb-2"></div>
        <div className="cta-gradient-orb cta-orb-3"></div>
      </div>

      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-badge">
            <span className="cta-badge-dot"></span>
            <span>Ready to Transform Your Development</span>
          </div>

          <h2 className="cta-title">
            Start Building with
            <span className="cta-title-gradient"> KIMZAN Platform</span>
          </h2>

          <p className="cta-description">
            Join thousands of developers who are already building faster, smarter, and more efficiently.
            Get started today with our enterprise-grade platform.
          </p>

          <div className="cta-stats-row">
            <div className="cta-stat-item">
              <div className="cta-stat-icon">⚡</div>
              <div className="cta-stat-text">
                <div className="cta-stat-value">10x</div>
                <div className="cta-stat-label">Faster Development</div>
              </div>
            </div>
            <div className="cta-stat-item">
              <div className="cta-stat-icon">🚀</div>
              <div className="cta-stat-text">
                <div className="cta-stat-value">99.9%</div>
                <div className="cta-stat-label">Uptime SLA</div>
              </div>
            </div>
            <div className="cta-stat-item">
              <div className="cta-stat-icon">🔒</div>
              <div className="cta-stat-text">
                <div className="cta-stat-value">Enterprise</div>
                <div className="cta-stat-label">Security Grade</div>
              </div>
            </div>
          </div>

          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="cta-input-wrapper">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="cta-input"
                disabled={isSubmitting || submitted}
              />
              <button
                type="submit"
                className={`cta-submit-btn ${isSubmitting ? 'cta-btn-loading' : ''} ${submitted ? 'cta-btn-success' : ''}`}
                disabled={isSubmitting || submitted}
              >
                {submitted ? (
                  <>
                    <span className="cta-btn-icon">✓</span>
                    <span>Request Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="cta-btn-spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Get Started Free</span>
                    <span className="cta-btn-arrow">→</span>
                  </>
                )}
              </button>
            </div>
            <p className="cta-form-note">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </form>

          <div className="cta-actions">
            <button className="cta-secondary-btn">
              <span className="cta-btn-icon">📅</span>
              <span>Schedule a Demo</span>
            </button>
            <button className="cta-secondary-btn">
              <span className="cta-btn-icon">💬</span>
              <span>Talk to Sales</span>
            </button>
          </div>

          <div className="cta-contact-info">
            <div className="cta-contact-item">
              <span className="cta-contact-icon">📧</span>
              <div className="cta-contact-details">
                <div className="cta-contact-label">Email Us</div>
                <a href="mailto:hello@kimzan.com" className="cta-contact-link">hello@kimzan.com</a>
              </div>
            </div>
            <div className="cta-contact-divider"></div>
            <div className="cta-contact-item">
              <span className="cta-contact-icon">📞</span>
              <div className="cta-contact-details">
                <div className="cta-contact-label">Call Us</div>
                <a href="tel:+1-800-KIMZAN" className="cta-contact-link">+1 (800) KIMZAN</a>
              </div>
            </div>
            <div className="cta-contact-divider"></div>
            <div className="cta-contact-item">
              <span className="cta-contact-icon">🌐</span>
              <div className="cta-contact-details">
                <div className="cta-contact-label">Visit Us</div>
                <a href="https://kimzan.com" className="cta-contact-link" target="_blank" rel="noopener noreferrer">kimzan.com</a>
              </div>
            </div>
          </div>

          <div className="cta-trust-badges">
            <div className="cta-trust-item">
              <span className="cta-trust-icon">🏆</span>
              <span className="cta-trust-text">SOC 2 Certified</span>
            </div>
            <div className="cta-trust-item">
              <span className="cta-trust-icon">🔐</span>
              <span className="cta-trust-text">GDPR Compliant</span>
            </div>
            <div className="cta-trust-item">
              <span className="cta-trust-icon">✨</span>
              <span className="cta-trust-text">ISO 27001</span>
            </div>
            <div className="cta-trust-item">
              <span className="cta-trust-icon">🛡️</span>
              <span className="cta-trust-text">HIPAA Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}