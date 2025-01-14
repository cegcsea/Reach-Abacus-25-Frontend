import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import { server } from "../main";
const server = "http://localhost:3001";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  async function login({ email, password }, navigate) {
    setBtnLoading(true);
    try {
      const response = await axios.post(`${server}/user/login`, {
        email,
        password,
      });
      const data = response.data;
      setUser(data.user);
      toast.success(data.message);
      console.log(data);
      localStorage.setItem("abacustoken", data.token);
      localStorage.setItem("abacususer", JSON.stringify(data.user));
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      setIsAuth(false);
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  async function getRegistrationLink({ email }, navigate) {
    setBtnLoading(true);
    console.log(email, typeof email);
    try {
      const response = await axios.post(
        `${server}/user/get-registration-link`,
        { email }
      );
      const data = response.data;
      toast.success(data.message);
      localStorage.setItem("activationToken", data.activationToken);
      navigate(`/register/${email}/${data.token}`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setBtnLoading(false);
    }
  }
  // User Registration
  async function register(formData, navigate) {
    setBtnLoading(true);
    try {
      const response = await axios.post(
        `${server}/user/register/${formData.email}/${formData.token}`,
        {
          name: formData.name,
          email: formData.email,
          token: formData.token, // If token is required
          college: formData.college,
          //hostCollege: formData.hostCollege,
          accomodation: formData.accomodation,
          dept: formData.dept,
          year: formData.year,
          mobile: formData.mobile,
          password: formData.password,
        }
      );
      const data = response.data;
      toast.success(data.message);
      localStorage.setItem("activationToken", data.activationToken);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setBtnLoading(false);
    }
  }

  // Forgot Password
  async function forgotPassword({ email }) {
    setBtnLoading(true);
    try {
      const response = await axios.post(
        `${server}/user/get-password-reset-link`,
        {
          email,
        }
      );
      const data = response.data;
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Reset Forgotten Password
  async function forgotPasswordReset(
    userId,
    token,
    newPassword,
    confirmPassword,
    navigate
  ) {
    setBtnLoading(true);
    try {
      const response = await axios.post(
        `${server}/user/reset-password/${userId}/${token}`,
        {
          newPassword: newPassword,
          confirmPassword: confirmPassword,
          userId: userId,
          token: token,
        }
      );
      const data = response.data;
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Change Password
  async function changePassword(password, newPassword, navigate) {
    setBtnLoading(true);
    const token = localStorage.getItem("abacustoken");
    console.log(token);
    try {
      const response = await axios.put(
        `${server}/user/change-password`,
        {
          password,
          newPassword,
        },
        {
          headers: { token },
        }
      );
      const data = response.data;
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
    }
  }

  // Fetch User Profile
  async function profile() {
    const token = localStorage.getItem("abacustoken");
    try {
      const { data } = await axios.get(`${server}/user/profile`, {
        headers: { token },
      });
      console.log(data.data);
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Update User Profile
  async function updateProfile(updatedData) {
    setBtnLoading(true);
    const token = localStorage.getItem("abacustoken");
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
    const token = localStorage.getItem("abacustoken");
    try {
      const response = await axios.post(`${server}/user/query`, queryData, {
        headers: { token },
      });
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  // Event Registration
  async function eventRegister(eventId) {
    setBtnLoading(true);
    const token = localStorage.getItem("abacustoken");
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
      const { data } = await axios.get(`${server}/events`);
      return data.events;
    } catch (error) {
      console.log(error);
      toast.error("Error fetching events");
    }
  }

  // Workshop Registration
  async function workshopRegister(workshopId) {
    setBtnLoading(true);
    const token = localStorage.getItem("abacustoken");
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
      const { data } = await axios.get(`${server}/workshops`);
      return data.workshops;
    } catch (error) {
      console.log(error);
      toast.error("Error fetching workshops");
    }
  }

  // Verify Workshop Payment Details
  async function verifyWorkshopPaymentDetails(workshopId) {
    const token = localStorage.getItem("abacustoken");
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
    const token = localStorage.getItem("abacustoken");
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

  useEffect(() => {
    const savedUser = localStorage.getItem("abacususer");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser); // Parse the saved user
      console.log(parsedUser); // Debugging: Ensure the user is valid JSON
      setUser(parsedUser);
      setIsAuth(true);
      setLoading(false);
    }

    //fetchUser(); // Always fetch the user to ensure the latest data is shown
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
        getRegistrationLink,
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
