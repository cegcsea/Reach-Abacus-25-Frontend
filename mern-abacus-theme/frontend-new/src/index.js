import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';  // Import EventPage
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";
import Navbar from './components/Navbar';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
