import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/about"
          element={<About />} 
        />
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
