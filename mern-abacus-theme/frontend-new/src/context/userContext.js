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
  // const [auth, setAuth] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  const [userWorkshops, setUserWorkshops] = useState([]);
  const [session, setSession] = useState([]);
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
      //console.log(data.data);
      setUser(data.data);
      setIsAuth(true);
      setUserWorkshops(data.user.workshopPayments);
      //console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  // Update User Profile
  async function updateProfile(updatedData, navigate) {
    setBtnLoading(true);
    console.log("updateData:" + updatedData.year);
    const token = localStorage.getItem("abacustoken");
    try {
      const response = await axios.put(
        `${server}/user/update-profile`,
        updatedData,
        { headers: { token } }
      );
      const data = response.data;
      setUser(data.updatedUser);
      toast.success(data.message);
      navigate("/profile");
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
        `${server}/user/events/register`,
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
    const token = localStorage.getItem("abacustoken");
    try {
      // Fetch events data from server
      const { data } = await axios.get(`${server}/user/get-events`, {
        headers: { token },
      });
      console.log("Events data:", data.events);

      // Set user events data
      setUserEvents(data.events.events);
    } catch (error) {
      console.error("Error fetching events:", error);
      console.error(
        "Error response:",
        error.response ? error.response.data : "No response data"
      );
      toast.error("Error fetching events");
    }
  }

  // Workshop Registration
  async function workshopRegister(workshopId) {
    setBtnLoading(true);
    const token = localStorage.getItem("abacustoken");
    try {
      const response = await axios.post(
        `${server}/user/workshops/register`,
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
    const token = localStorage.getItem("abacustoken");
    try {
      // Fetch workshop data from server
      const { data } = await axios.get(`${server}/user/get-workshops`, {
        headers: { token },
      });
      console.log("Workshops data:", data.data);
      //console.log("User workshop payments:", data.user);

      // Set session and user workshop data
      setSession(data.data.workshops);
      //setUserWorkshops(data.user.workshopPayments);
    } catch (error) {
      // Handle error
      console.error("Error fetching events:", error);
      console.error(
        "Error response:",
        error.response ? error.response.data : "No response data"
      );
      toast.error("Error fetching workshops");
    }
  }

  // Verify Workshop Payment Details
  async function verifyWorkshopPaymentDetails(workshopId) {
    const token = localStorage.getItem("abacustoken");
    try {
      const response = await axios.post(
        `${server}/user/workshops/verify-payment`,
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
        `${server}/workshops/payment-screenshot`,
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
  async function handleLogout() {
    localStorage.removeItem("abacususer");
    localStorage.removeItem("abacustoken");
    setIsAuth(false);
    setUserEvents([]);
    setUser({});
    setUserWorkshops([]);
  }

  // useEffect(() => {
  //   const savedUser = localStorage.getItem("abacususer");

  //   // If user is found in localStorage
  //   if (savedUser) {
  //     const parsedUser = JSON.parse(savedUser);
  //     console.log("parseduser:", parsedUser); // Debugging: Ensure user data is valid JSON
  //     setUser(parsedUser);
  //     setIsAuth(true);
  //   }

  //   // Start loading and fetch data
  //   setLoading(true);
  //   profile().then(); // Fetch profile data
  //   getEvents(); // Fetch events
  //   getWorkshops(); // Fetch workshops
  // }, []);
  async function refreshauth() {
    const token = localStorage.getItem("abacususer");
    if (token) {
      profile();
      // .then((data) => {
      //   setAuth(true);
      //   setUser(data.user);
      //   setUserWorkshops(data.user.workshopPayments);
      // })
      // .catch((error) => {});
      getEvents()
        .then((data) => {
          setUserEvents(data.events.events);
        })
        .catch((error) => {});
      getWorkshops()
        .then((data) => {
          setSession(data.workshops.workshops);
        })
        .catch((error) => {});
    } else {
      setIsAuth(false);
      setUser({});
    }
  }
  useEffect(() => {
    refreshauth();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        btnLoading,
        loading,
        login,
        handleLogout,
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
        refreshauth,
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
