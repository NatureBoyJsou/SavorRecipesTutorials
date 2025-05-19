import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CookingTutorials from './CookingTutorials';
import Banner from "./Banner";
import FoodGallery from "./FoodGallery";
import Header from "./Header";
import ModelViewer from "./ModelViewer";



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
