import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Home from './Home';
import CookingTutorials from './CookingTutorials';



function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cooking-tutorials" element={<CookingTutorials />} />
        {/* Add other routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
