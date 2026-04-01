import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Experience from './pages/Experience';
import JoinCrew from './pages/JoinCrew';
import BookUs from './pages/BookUs';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/join-the-crew" element={<JoinCrew />} />
        <Route path="/book-us" element={<BookUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
