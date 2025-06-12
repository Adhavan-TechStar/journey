import { useState, useEffect } from 'react';

interface FuturePageProps {
  onNavigate: () => void;
}

const FuturePage = ({ onNavigate }: FuturePageProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const futurePlans = [
    {
      id: 'documentor',
      title: 'DocQmentor Completion',
      icon: '🧠',
      color: 'linear-gradient(135deg, #388e3c, #66bb6a)',
      items: [
        {
          title: 'Finalizing Development',
          description: `Completing the remaining features and enhancements for the DocQmentor application`,
          subitems: [
            'Implementing additional document type support beyond invoices',
            'Enhancing the confidence scoring system with machine learning refinements',
            'Adding bulk processing capabilities for high-volume document workflows',
            'Developing advanced search and filtering for the document repository',
            'Creating comprehensive admin dashboard for system monitoring'
          ]
        }
      ]
    },
    {
      id: 'clientproject',
      title: 'Live Client Project',
      icon: '🇺🇸',
      color: 'linear-gradient(135deg, #1976d2, #42a5f5)',
      items: [
        {
          title: 'Joining a live client project',
          description: 'Transitioning to work on a real-world project for a US-based client',
          subitems: [
            'Applying my full-stack development skills in a production environment',
            'Collaborating with international teams and stakeholders',
            'Gaining experience with enterprise-grade development processes',
            'Working with cutting-edge technologies in cloud and AI',
            'Delivering measurable business value through technology solutions'
          ]
        }
      ]
    }
  ];

  return (
    <div className="future-container">
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

      <header className="future-header">
        <button className="back-button" onClick={onNavigate}>
          ← Back to Home
        </button>
        <h1 className="future-title">My Future at TechStar</h1>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </header>

      <main className={`future-main ${isVisible ? 'fade-in' : ''}`}>
        <div className="timeline">
          {futurePlans.map((section, index) => (
            <div 
              key={section.id} 
              className={`timeline-item ${isVisible ? 'slide-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{section.icon}</span>
              </div>
              
              <div 
                className={`timeline-content ${expandedSection === section.id ? 'expanded' : ''}`}
                style={{ background: section.color }}
              >
                <div 
                  className="timeline-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <h2>{section.title}</h2>
                  <span className="expand-icon">
                    {expandedSection === section.id ? '−' : '+'}
                  </span>
                </div>
                
                {expandedSection === section.id && (
                  <div className="timeline-details">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="detail-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        {item.subitems && (
                          <ul className="subitems">
                            {item.subitems.map((subitem, subIndex) => (
                              <li key={subIndex}>
                                {subitem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="future-footer">
          <p>
            This is just the beginning of my journey at TechStar. I am excited to continue learning, growing, and contributing to innovative projects that make a difference.
          </p>
          </div>
      </main>
    </div>
  );
};

export default FuturePage;