import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CookingTutorials from './CookingTutorials';

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cooking-tutorials" element={<CookingTutorials />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default RouterApp;
