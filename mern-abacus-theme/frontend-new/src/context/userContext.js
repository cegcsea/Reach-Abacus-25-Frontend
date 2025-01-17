import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { LoaderData } from "./loaderContext";
// import { server } from "../main";
const server = "http://localhost:3001";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { setIsLoading } = LoaderData();
  const [user, setUser] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  // const [auth, setAuth] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  const [userWorkshops, setUserWorkshops] = useState([]);
  const [session, setSession] = useState([]);
  const [isMenuOpen, setIsMenuOpen] =
    useState(false); /* need to the userContext*/
  const [active, setActive] = useState("home"); /* need to to the userContext*/

  async function login({ email, password }, navigate) {
    setBtnLoading(true);
    setIsLoading(true);
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
      setIsLoading(false);
    }
  }

  async function getRegistrationLink({ email }, navigate) {
    setBtnLoading(true);
    setIsLoading(true);
    //console.log(email, typeof email);
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
      setIsLoading(false);
    }
  }
  // User Registration
  async function register(formData, navigate) {
    setBtnLoading(true);
    setIsLoading(true);
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
      setIsLoading(false);
    }
  }

  // Forgot Password
  async function forgotPassword({ email }) {
    setBtnLoading(true);
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${server}/user/get-password-reset-link`,
        {
          email,
        }
      );
      const data = response.data;
      //console.log(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
      setIsLoading(false);
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
    setIsLoading(true);
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
      setIsLoading(false);
    }
  }

  // Change Password
  async function changePassword(password, newPassword, navigate) {
    setBtnLoading(true);
    setIsLoading(true);
    const token = localStorage.getItem("abacustoken");
    //console.log(token);
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
      setIsLoading(false);
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
      setUserWorkshops(data.data.workshops);
      //console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  // Update User Profile
  async function updateProfile(updatedData, navigate) {
    setBtnLoading(true);
    setIsLoading(true);
    //console.log("updateData:" + updatedData.year);
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
      setIsLoading(false);
    }
  }

  // Post Query
  async function postQuery(queryData) {
    const token = localStorage.getItem("abacustoken");
    //console.log(queryData);
    try {
      const response = await axios.post(
        `${server}/user/post-query`,
        queryData,
        {
          headers: { token },
        }
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
    setIsLoading(true);
    const token = localStorage.getItem("abacustoken");
    try {
      const response = await axios.post(
        `${server}/user/event-register`,
        eventId,
        { headers: { token } }
      );
      const data = response.data;
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
      setIsLoading(false);
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
      //console.log("Events data:", data.events);

      // Set user events data
      setUserEvents(data.events.events);
    } catch (error) {
      //console.error("Error fetching events:", error);
      console.error(
        "Error response:",
        error.response ? error.response.data : "No response data"
      );
      //toast.error("Error fetching events");
    }
  }

  // Workshop Registration
  async function freeWorkshopRegister({ workshopId }) {
    setBtnLoading(true);
    setIsLoading(true);
    const token = localStorage.getItem("abacustoken");
    try {
      const response = await axios.post(
        `${server}/user/workshop-register`,
        { workshopId },
        { headers: { token } }
      );
      const data = response.data;
      //console.log(data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setBtnLoading(false);
      setIsLoading(false);
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
      //console.log("Workshops data:", data.data);
      //console.log("User workshop payments:", data.user);

      // Set session and user workshop data
      setSession(data.data.workshops);
      //console.log(data.data.workshops);
      //setUserWorkshops(data.user.workshopPayments);
    } catch (error) {
      // Handle error
      console.error("Error fetching events:", error);
      console.error(
        "Error response:",
        error.response ? error.response.data : "No response data"
      );
      //toast.error("Error fetching workshops");
    }
  }

  // Verify Workshop Payment Details
  async function verifyWorkshopPaymentDetails(paymentData) {
    const token = localStorage.getItem("abacustoken");
    try {
      const response = await axios.post(
        `${server}/user/verify-workshop-payment-details`,
        paymentData,
        { headers: { token } }
      );
      const { message, data: payment } = response.data;

      return { message, payment };
    } catch (err) {
      if (err.response) throw err.response.data.message;
      throw err;
    }
  }

  // Upload Workshop Payment Screenshot
  async function workshopPaymentScreenshot({ payment, formData }) {
    const token = localStorage.getItem("abacustoken");

    try {
      const response = await axios.post(
        `${server}/user/workshop-payment-screenshot/${payment.id}`,
        formData,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { message } = response.data;

      return { message };
    } catch (err) {
      if (err.response) throw err.response.data.message;
      throw err;
    }
  }

  const handleVerifyWorkshopPayment = (data, navigate) => {
    toast.promise(
      verifyWorkshopPaymentDetails({
        workshopId: data.workshopId,
        paymentMobile: data.paymentMobile,
        transactionId: data.transactionId,
      }).then((responsesData) => {
        workshopPaymentScreenshot({
          payment: responsesData.payment,
          formData: data.formData,
        });
      }),
      {
        loading: "Verifying...",
        success: (screenshotData) => {
          refreshauth();
          navigate(`/workshops`);
          return "Payment Details will be verified shortly!";
        },

        error: (err) => {
          return typeof err == "object" ? err.message : err;
        },
      }
    );
  };

  async function handleLogout() {
    localStorage.removeItem("abacususer");
    localStorage.removeItem("abacustoken");
    setIsAuth(false);
    setUserEvents([]);
    setUser({});
    setUserWorkshops([]);
  }

  async function refreshauth() {
    const token = localStorage.getItem("abacususer");
    if (token) {
      profile()
        .then((data) => {
          setIsAuth(true);
          // console.log(data);
          // setUser(data.user);
          // setUserWorkshops(data.user.workshopPayments);
        })
        .catch((error) => {});
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
    console.log(user);
  }, []);
  useEffect(() => {
    console.log("active", active);
    console.log("user:", user);
    console.log("userevents", userEvents);
    console.log("user workshops", userWorkshops);
    console.log("sessions", session);
  }, [user]);

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
        freeWorkshopRegister,
        getWorkshops,
        refreshauth,
        handleVerifyWorkshopPayment,
        active,
        setActive,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
