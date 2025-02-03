'use client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from '../Component/auth/page';
import Product from '../Component/Product/data';
import ProductDetail from '../Component/ProductDetail/page';

const AppRouter = () => {
  return (
    <Router>
      
      <Auth />  
      <Routes>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
