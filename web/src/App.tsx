import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Transactions } from './components/transactions/transactions';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/transactions"
          element={<Transactions />} 
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
