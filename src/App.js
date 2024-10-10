import React, { Suspense, lazy } from 'react';
import './components/assets/styles/style.css';

const PortfolioContainer = lazy(() => import('./components/PortfolioContainer'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioContainer />
      </Suspense>
    </div>
  );
};

export default App;