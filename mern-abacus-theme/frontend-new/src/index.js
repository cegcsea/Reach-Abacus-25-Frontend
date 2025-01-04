import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';  // Import EventPage
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} /> {/* Add Route for EventPage */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
