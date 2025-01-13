import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { server } from "../main";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  // User Login
  async function login(email, password, navigate) {
    setBtnLoading(true);
    try {
      const response = await axios.post(`${server}/api/user/login`, {
        email,
        password,
      });
      const data = response.data;
      setUser(data.exists);
      toast.success(data.message);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.exists));
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      setIsAuth(false);
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // User Registration
  async function register(name, email, password, navigate) {
    setBtnLoading(true);
    try {
      const response = await axios.post(`${server}/api/user/register`, {
        name,
        email,
        password,
      });
      const data = response.data;
      toast.success(data.message);
      localStorage.setItem("activationToken", data.activationToken);
      navigate("/verify");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Forgot Password
  async function forgotPassword(email) {
    setBtnLoading(true);
    try {
      const response = await axios.post(`${server}/api/user/forgot-password`, {
        email,
      });
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Reset Forgotten Password
  async function forgotPasswordReset(token, newPassword) {
    setBtnLoading(true);
    try {
      const response = await axios.post(
        `${server}/api/user/reset-password`,
        {
          token,
          newPassword,
        }
      );
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Change Password
  async function changePassword(oldPassword, newPassword) {
    setBtnLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${server}/api/user/change-password`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: { token },
        }
      );
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Fetch User Profile
  async function profile() {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(`${server}/api/user/profile`, {
        headers: { token },
      });
      setUser(data.userData);
    } catch (error) {
      console.log(error);
    }
  }

  // Update User Profile
  async function updateProfile(updatedData) {
    setBtnLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${server}/api/user/profile/update`,
        updatedData,
        { headers: { token } }
      );
      const data = response.data;
      setUser(data.updatedUser);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Post Query
  async function postQuery(queryData) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${server}/api/user/query`,
        queryData,
        { headers: { token } }
      );
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  // Event Registration
  async function eventRegister(eventId) {
    setBtnLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${server}/api/events/register`,
        { eventId },
        { headers: { token } }
      );
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Get Events
  async function getEvents() {
    try {
      const { data } = await axios.get(`${server}/api/events`);
      return data.events;
    } catch (error) {
      console.log(error);
      toast.error("Error fetching events");
    }
  }

  // Workshop Registration
  async function workshopRegister(workshopId) {
    setBtnLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${server}/api/workshops/register`,
        { workshopId },
        { headers: { token } }
      );
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Get Workshops
  async function getWorkshops() {
    try {
      const { data } = await axios.get(`${server}/api/workshops`);
      return data.workshops;
    } catch (error) {
      console.log(error);
      toast.error("Error fetching workshops");
    }
  }

  // Verify Workshop Payment Details
  async function verifyWorkshopPaymentDetails(workshopId) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${server}/api/workshops/verify-payment`,
        { workshopId },
        { headers: { token } }
      );
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  // Upload Workshop Payment Screenshot
  async function workshopPaymentScreenshot(workshopId, screenshotFile) {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("workshopId", workshopId);
    formData.append("paymentScreenshot", screenshotFile);

    try {
      const response = await axios.post(
        `${server}/api/workshops/payment-screenshot`,
        formData,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  // Fetch User if Token Exists
  async function fetchUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.get(`${server}/api/user/profile`, {
        headers: { token },
      });
      setIsAuth(true);
      setUser(data.userData);
      localStorage.setItem("user", JSON.stringify(data.userData));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuth(true);
      setLoading(false);
      fetchUser();
    } else {
      fetchUser();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        btnLoading,
        login,
        loading,
        register,
        forgotPassword,
        forgotPasswordReset,
        changePassword,
        profile,
        updateProfile,
        postQuery,
        eventRegister,
        getEvents,
        workshopRegister,
        getWorkshops,
        verifyWorkshopPaymentDetails,
        workshopPaymentScreenshot,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
