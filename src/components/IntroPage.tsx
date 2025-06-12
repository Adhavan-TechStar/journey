import { useState, useEffect } from 'react';

interface IntroPageProps {
  onNavigate: () => void;
  onNavigateToFuture: () => void;
}

const IntroPage = ({ onNavigate, onNavigateToFuture }: IntroPageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    { name: 'Angular - C#', logo: '/public/Angula.png' },
    { name: 'SharePoint', logo: '/public/sharepointlogo.png' },
    { name: 'PowerApps', logo: '/public/powerapps.png' },
    { name: 'Power-Bi', logo: '/public/powerbi.png' },
    { name: 'Power Automate', logo: '/public/powerautomate.png' },
    { name: 'Copilot Studio', logo: '/public/copilotstudio.png' },
    { name: 'Azure', logo: '/public/azure.png' },
  ];

  return (
    <div className="intro-container">
      <div className="stars"></div>
      <div className="twinkling"></div>

      {/* Top-right logo */}
      <img
        src="/techstar_logo.png"
        alt="TechStar Logo"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '80px',
          height: 'auto',
          zIndex: 10,
        }}
      />

      <header className="intro-header">
        <h1 className="company-title">My 6-Month Journey Presentation</h1>
        <div className="header-line"></div>
      </header>

      <main className="intro-main">
        <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
          <div className="avatar-bubble-wrapper">
            {/* Speech Bubbles */}
            <div className="speech-bubble top-left">
              <strong>Blocker</strong>
              <p>“Do u have a blocker?”<br /><em>- Madhu Sir</em></p>
            </div>
            <div className="speech-bubble top-right">
              <strong>Best</strong>
              <p>“Get the best of best solution!”<br /><em>- Pooja Mam</em></p>
            </div>
            <div className="speech-bubble bottom-left">
              <strong>Blogs</strong>
              <p>“Read the Blog”<br /><em>- Amit Sir</em></p>
            </div>

            {/* Avatar */}
            <div className="avatar-container">
              <img
                src="/your-avatar-image.png.png"
                alt="My Avatar"
                className="hero-avatar floating"
              />
              <div className="avatar-glow"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <h2 className="hero-title">
              Welcome to My
              <span className="gradient-text"> Amazing Journey!</span>
            </h2>
            <p className="hero-subtitle">
              Discover the incredible skills and projects I've mastered in the past 6 months
            </p>

            <div className="button-group" style={{ marginBottom: '30px' }}>
              <button className="cta-button" onClick={onNavigate}>
                <span>What Happened With Me in Past 6 Months?</span>
                <div className="button-shine"></div>
              </button>

              <button className="cta-button future-button" onClick={onNavigateToFuture}>
                <span>What's My Future Plans in TechStar?</span>
                <div className="button-shine"></div>
              </button>
            </div>

            <div className="skills-preview-grid">
              {technologies.map((tech) => (
                <div className="skill-item" key={tech.name}>
                  <div className="skill-badge">{tech.name}</div>
                  <img
                    src={tech.logo}
                    alt={`${tech.name} Logo`}
                    className="tech-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntroPage;
