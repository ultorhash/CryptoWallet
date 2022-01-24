import React, { FC } from 'react';
import { Navbar } from './components/navbar/navbar';
import { Route } from 'react-router-dom';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { BrowserRouter, Routes } from 'react-router-dom';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
