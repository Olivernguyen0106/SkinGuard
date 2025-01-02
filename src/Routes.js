import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Predict from './pages/Predict/predict';
import Home from './pages';
import Information from './pages/Information/information';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Trang chủ */}
      <Route path="/predict" element={<Predict />} /> {/* Trang prediction */}
      <Route path="/information" element={<Information />} /> {/* Trang Information */}
    </Routes>
  );
};

export default AppRoutes;
