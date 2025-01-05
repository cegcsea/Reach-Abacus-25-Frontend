import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';  // Import EventPage
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";
import TechnicalPage from './pages/TechnicalPage';
import NonTechnicalPage from './pages/NonTechnicalPage'
import PreEvent from './pages/PreEvent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} /> {/* Add Route for EventPage */}
        <Route path="/technical-events" element={<TechnicalPage />} />
        <Route path="/non-technical-events" element={<NonTechnicalPage />} />
        <Route path="/pre-events" element={<PreEvent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
