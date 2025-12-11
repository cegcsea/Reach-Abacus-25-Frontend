import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./LightRays.css"; 
import LightRays from "./components/LightRays"; 
import Galaxy from "./components/Galaxy"; // Import the Galaxy component
import EventPage from "./pages/EventPage";
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
import BulkPayment from "./pages/BulkPayment";
import { UserData } from "./context/userContext";
import { LoaderData } from "./context/loaderContext";
import Loader from "./components/Loader/Loader";

const App = () => {
  const { isMenuOpen, setIsMenuOpen } = UserData();
  const { isLoading, setIsLoading } = LoaderData();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  }, [isLoading, setIsLoading]);

  if (isLoading) return <Loader />;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        {/* GALAXY BACKGROUND — Behind everything with VISIBLE settings */}
        <Galaxy
          density={5.0} // Very high density
          hueShift={45} // Gold hue
          starSpeed={0.2}
          speed={1.2} // Faster animation
          glowIntensity={0.5} // More glow
          saturation={1.0} // Full saturation for rich gold
          mouseInteraction={true}
          mouseRepulsion={true}
          repulsionStrength={2.0}
          twinkleIntensity={1.0} // Full twinkle
          rotationSpeed={0.15}
          particleSize={1.2} // Larger particles
          dustIntensity={5.0} // Very high intensity
          brightness={2.0} // High brightness
          transparent={true}
          className="interactive"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -100
          }}
        />

        {/* Optional: Add a dark gradient overlay to make dust stand out */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%)',
          zIndex: -99,
          pointerEvents: 'none'
        }} />

        {/* GLOBAL LIGHT RAYS — Above galaxy but below content */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#c0a068"
          raysSpeed={1.2}
          lightSpread={0.9}
          rayLength={1.1}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.02}
          className="custom-rays"
        />

        {/* Navbar (top) */}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Optional backdrop when menu open */}
        {isMenuOpen && (
          <div className="fixed inset-0 backdrop-blur-md bg-transparent bg-opacity-50 z-40"></div>
        )}

        {/* Your routes - Ensure content has proper contrast */}
        <div className="relative z-10" style={{
          minHeight: '100vh',
          background: 'transparent'
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sponsors" element={<HomePage />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshops/:id" element={<IndividualWorkshops />} />
            <Route path="/workshops/:id/payment" element={<Payment />} />
            <Route path="/workshops/:id/bulkpayment" element={<BulkPayment />} />
            <Route path="/login" element={<HomePage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
            <Route path="/profile/change-password" element={<ChangePassword />} />
            <Route path="/profile/update" element={<UpdateProfile />} />
            <Route path="/register/:email/:token" element={<RegisterDetails />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/events/technical-events" element={<TechnicalPage />} />
            <Route path="/events/non-technical-events" element={<TechnicalPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/events/:id" element={<NoviceInit />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
