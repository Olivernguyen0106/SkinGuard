import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Predict from './pages/Predict/predict';
import Home from './pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Trang chủ */}
      <Route path="/predict" element={<Predict />} /> {/* Trang prediction */}
    </Routes>
  );
};

export default AppRoutes;
