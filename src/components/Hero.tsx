import { useState, useEffect } from 'react';
import './Hero.css';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, []);

  return (
    <section className="hero">
      <div 
        className="hero-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`
        }}
      />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Enterprise-Grade Platform</span>
        </div>
        <h1 className="hero-title">
          Transform Your Business with
          <span className="hero-title-gradient"> KIMZAN</span>
        </h1>
        <p className="hero-description">
          Unlock unprecedented efficiency with our AI-powered automation platform.
          Streamline operations, boost productivity, and scale with confidence.
        </p>
        <div className="hero-cta">
          <button className="btn-primary">
            Get Started
            <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="btn-secondary">
            Watch Demo
            <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">500+</div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">99.9%</div>
            <div className="stat-label">Uptime SLA</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">10M+</div>
            <div className="stat-label">Tasks Automated</div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-card card-1">
          <div className="card-icon">⚡</div>
          <div className="card-text">Lightning Fast</div>
        </div>
        <div className="floating-card card-2">
          <div className="card-icon">🔒</div>
          <div className="card-text">Bank-Level Security</div>
        </div>
        <div className="floating-card card-3">
          <div className="card-icon">📊</div>
          <div className="card-text">Real-Time Analytics</div>
        </div>
      </div>
    </section>
  )
}