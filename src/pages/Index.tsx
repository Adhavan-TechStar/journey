import { useState } from 'react';
import IntroPage from '../components/IntroPage';
import RoadmapPage from '../components/RoadmapPage';
import FuturePage from '../components/FuturePage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('intro');

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {currentPage === 'intro' && (
        <IntroPage
          onNavigate={() => setCurrentPage('roadmap')}
          onNavigateToFuture={() => setCurrentPage('future')}
        />
      )}

      {currentPage === 'roadmap' && (
        <RoadmapPage
          onNavigate={() => setCurrentPage('intro')}
          onNavigateToFuture={() => setCurrentPage('future')}
        />
      )}

      {currentPage === 'future' && (
        <FuturePage
          onNavigate={() => setCurrentPage('intro')}
        />
      )}
    </div>
  );
};

export default Index;