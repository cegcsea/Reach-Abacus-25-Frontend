import React, { Suspense } from "react";
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
import { UserData } from "./context/userContext";
import { LoaderData } from "./context/loaderContext";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";
import BulkPayment from "./pages/BulkPayment";
import About from "./components/About.js";
import Accommodation from "./pages/Accomodation.jsx";
import EventPayment from "./pages/EventPayment.js";
import Login from "./components/Login.js";
import IndividualSponsors from "./components/IndividualSponsors";
const App = () => {
  const { isMenuOpen, setIsMenuOpen } = UserData();
  const { isLoading, setIsLoading } = LoaderData();
  // const [isMenuOpen, setIsMenuOpen] =
  //   useState(false); /* need to the userContext*/
  // const [active, setActive] = useState("home"); /* need to to the userContext*/
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1750);
    }
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && (
          <div className="fixed inset-0 backdrop-blur-md bg-transparent bg-opacity-50 z-40"></div>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/:id" element={<IndividualWorkshops />} />
          <Route path="/workshops/:id/payment" element={<Payment />} />
          <Route path="/events/:id/payment" element={<EventPayment />} />
          <Route path="/workshops/:id/bulkpayment" element={<BulkPayment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/profile/change-password" element={<ChangePassword />} />
          <Route path="/profile/update" element={<UpdateProfile />} />
          <Route path="/register/:email/:token" element={<RegisterDetails />} />
          <Route path="/events" element={<EventPage />} />{" "}
          <Route path="/events/technical-events" element={<TechnicalPage />} />
          <Route
            path="/events/non-technical-events"
            element={<TechnicalPage />}
          />
          
          <Route path="/" element={<EventPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/accomodation" element={<Accommodation />} />
          <Route path="/events/:id" element={<NoviceInit />} />
          <Route path="/sponsors" element={<IndividualSponsors />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
