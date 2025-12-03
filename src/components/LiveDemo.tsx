import { useState, useEffect } from 'react';
import './LiveDemo.css';

interface CodeExample {
  id: string;
  title: string;
  prompt: string;
  code: string;
  language: string;
  description: string
}

const codeExamples: CodeExample[] = [
  {
    id: '1',
    title: 'React Component',
    prompt: 'Create a modern card component with hover effects',
    code: `export function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>;
  )
}`,
    language: 'typescript',
    description: 'AI-generated React component with TypeScript'
  },
  {
    id: '2',
    title: 'API Integration',
    prompt: 'Build a data fetching hook with error handling',
    code: `export function useData(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false))
  }, [url]);
  
  return { data, loading }
}`,
    language: 'typescript',
    description: 'Custom hook with automatic error handling'
  },
  {
    id: '3',
    title: 'Form Validation',
    prompt: 'Create a form with real-time validation',
    code: `export function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const validate = (value: string) => {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    setError(regex.test(value) ? '' : 'Invalid email')
  };
  
  return (
    <form>
      <input 
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validate(e.target.value)
        }}
      />
      {error && <span>{error}</span>}
    </form>
  )
}`,
    language: 'typescript',
    description: 'Form with instant validation feedback'
  }
];

export function LiveDemo() {
  const [activeExample, setActiveExample] = useState<CodeExample>(codeExamples[0]);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530);

    return () => clearInterval(cursorInterval)
  }, []);

  useEffect(() => {
    setDisplayedCode('');
    setIsTyping(true);
    let currentIndex = 0;
    const code = activeExample.code;

    const typingInterval = setInterval(() => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        currentIndex++
      } else {
        setIsTyping(false);
        clearInterval(typingInterval)
      }
    }, 20);

    return () => clearInterval(typingInterval)
  }, [activeExample]);

  const handleExampleClick = (example: CodeExample) => {
    if (example.id !== activeExample.id) {
      setActiveExample(example)
    }
  };

  return (
    <section className="live-demo-section">
      <div className="demo-background-gradient"></div>
      
      <div className="demo-container">
        <div className="demo-header">
          <div className="demo-badge">
            <span className="badge-pulse"></span>
            <span>Live AI Code Generation</span>
          </div>
          <h2 className="demo-title">
            Watch AI Build <span className="gradient-text">Production Code</span>
          </h2>
          <p className="demo-subtitle">
            See how KIMZAN's AI generates clean, production-ready code in real-time.
            Select an example below to see the magic happen.
          </p>
        </div>

        <div className="demo-content">
          <div className="demo-sidebar">
            <h3 className="sidebar-title">Code Examples</h3>
            <div className="example-list">
              {codeExamples.map((example) => (
                <button
                  key={example.id}
                  className={`example-button ${activeExample.id === example.id ? 'active' : ''}`}
                  onClick={() => handleExampleClick(example)}
                >
                  <div className="example-button-content">
                    <span className="example-number">{example.id}</span>
                    <div className="example-info">
                      <h4>{example.title}</h4>
                      <p>{example.description}</p>
                    </div>
                  </div>
                  {activeExample.id === example.id && (
                    <div className="active-indicator"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="demo-main">
            <div className="prompt-section">
              <div className="prompt-header">
                <span className="prompt-icon">💬</span>
                <span className="prompt-label">User Prompt</span>
              </div>
              <div className="prompt-content">
                <p>{activeExample.prompt}</p>
              </div>
            </div>

            <div className="code-section">
              <div className="code-header">
                <div className="code-tabs">
                  <div className="code-tab active">
                    <span className="tab-icon">⚛️</span>
                    <span>{activeExample.title}.tsx</span>
                  </div>
                </div>
                <div className="code-actions">
                  <button className="action-button" title="Copy code">
                    <span>📋</span>
                  </button>
                  <div className="status-indicator">
                    <span className="status-dot"></span>
                    <span className="status-text">{isTyping ? 'Generating...' : 'Complete'}</span>
                  </div>
                </div>
              </div>
              <div className="code-content">
                <pre className="code-block">
                  <code className="language-typescript">
                    {displayedCode}
                    {isTyping && cursorVisible && <span className="typing-cursor">|</span>}
                  </code>
                </pre>
              </div>
            </div>

            <div className="stats-section">
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-content">
                  <div className="stat-value">2.3s</div>
                  <div className="stat-label">Generation Time</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✓</div>
                <div className="stat-content">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Type Safe</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Errors</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="demo-footer">
          <div className="footer-content">
            <div className="footer-text">
              <h3>Ready to experience the power of AI-driven development?</h3>
              <p>Join thousands of developers who are building faster with KIMZAN</p>
            </div>
            <button className="cta-button">
              <span>Start Building</span>
              <span className="button-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}