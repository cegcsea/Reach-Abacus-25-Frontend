import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import EventPage from "./pages/EventPage"; // Import EventPage
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import TechnicalPage from "./pages/TechnicalPage";
import Workshops from "./pages/Workshops";
import IndividualWorkshops from "./pages/IndividualWorkshops";
import NoviceInit from "./pages/EventIndividual/NoviceInit";
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";
import RegisterDetails from "./pages/RegisterDetails";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import UpdateProfile from "./pages/UpdateProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Payment from "./pages/Payment";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false); /* need to the userContext*/
  const [active, setActive] = useState("home"); /* need to to the userContext*/
  return (
    <BrowserRouter>
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        active={active}
        setActive={setActive}
      />
      {isMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-transparent bg-opacity-50 z-40"></div>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sponsors" element={<HomePage />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshops/:id" element={<IndividualWorkshops />} />
        <Route path='/workshops/:id/payment' element={<Payment />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/profile/change-password" element={<ChangePassword />} />
        <Route path="/profile/update" element={<UpdateProfile />} />
        <Route path="/register/:email/:token" element={<RegisterDetails />} />
        <Route path="/events" element={<EventPage />} />{" "}
        <Route path="/technical-events" element={<TechnicalPage />} />
        <Route path="/" element={<EventPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/EventIndividual/:id" element={<NoviceInit />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
