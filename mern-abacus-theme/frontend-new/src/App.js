import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage"; // Import EventPage
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  return (
    <BrowserRouter>
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        active={active}
        setActive={setActive}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/sponsors" element={<HomePage />} />
        <Route path="/workshops" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
