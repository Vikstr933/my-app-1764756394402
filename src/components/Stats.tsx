import { useState, useEffect, useRef } from 'react';
import './Stats.css';

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  icon: string
}

const stats: Stat[] = [
  {
    id: '1',
    label: 'Active Users',
    value: 50000,
    suffix: '+',
    description: 'Developers building with our platform',
    icon: '👥'
  },
  {
    id: '2',
    label: 'Code Generated',
    value: 2,
    suffix: 'M+',
    description: 'Lines of production-ready code',
    icon: '💻'
  },
  {
    id: '3',
    label: 'Time Saved',
    value: 85,
    suffix: '%',
    description: 'Average development time reduction',
    icon: '⚡'
  },
  {
    id: '4',
    label: 'Success Rate',
    value: 99.9,
    suffix: '%',
    description: 'Code compilation success rate',
    icon: '✨'
  }
];

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (end - startValue) * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    };

    requestAnimationFrame(animate)
  }, [end, duration, shouldStart, hasAnimated]);

  return count
}

function StatCard({ stat, index, isVisible }: { stat: Stat; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  const formatNumber = (num: number): string => {
    if (stat.suffix === 'M+') {
      return num.toFixed(1)
    }
    if (stat.suffix === '%') {
      return num.toFixed(1)
    }
    return Math.floor(num).toLocaleString()
  };

  return (
    <div 
      className="stat-card"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-content">
        <div className="stat-value">
          {stat.prefix && <span className="stat-prefix">{stat.prefix}</span>}
          <span className="stat-number">{formatNumber(count)}</span>
          <span className="stat-suffix">{stat.suffix}</span>
        </div>
        <h3 className="stat-label">{stat.label}</h3>
        <p className="stat-description">{stat.description}</p>
      </div>
      <div className="stat-glow"></div>
    </div>
  )
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        })
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-background">
        <div className="stats-gradient"></div>
        <div className="stats-grid-pattern"></div>
      </div>

      <div className="stats-container">
        <div className="stats-header">
          <div className="stats-badge">
            <span className="badge-pulse"></span>
            <span>Platform Metrics</span>
          </div>
          <h2 className="stats-title">
            Trusted by Thousands
            <span className="title-gradient"> Worldwide</span>
          </h2>
          <p className="stats-subtitle">
            Join a growing community of developers who are building faster and smarter with our AI-powered platform.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.id} 
              stat={stat} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="stats-footer">
          <div className="stats-divider"></div>
          <p className="stats-note">
            Real-time metrics updated daily • Trusted by Fortune 500 companies
          </p>
        </div>
      </div>
    </section>
  )
}