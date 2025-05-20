import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CookingTutorials from './CookingTutorials';
import NutritionalApp from './NutritionalApp';
import Recipes from './Recipes';


function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cooking-tutorials" element={<CookingTutorials />} />
        <Route path="/nutritional-app" element={<NutritionalApp />} />
        <Route path="/recipes" element={<Recipes />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default RouterApp;
