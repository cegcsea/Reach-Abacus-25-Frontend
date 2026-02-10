import React, { useState, useEffect } from "react";
import { UserData } from "../context/userContext";
import { useParams, useNavigate } from "react-router-dom";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import { workshopsReach as workshops } from "../constants/workshops";
import toast from "react-hot-toast";

const Payment = () => {
  const navigate = useNavigate();
  const {
    handleVerifyWorkshopPayment,
    freeWorkshopRegister,
    user,
    getAmbassadorStatus,
  } = UserData();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    transactionId: "",
    paymentMobile: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Get your payment screenshot...");
  const [isOpen, setIsOpen] = useState(false);
  const [ambassadorStatus, setAmbassadorStatus] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);

  // Find workshop by 'code' field from URL param
  const workshop = workshops.find((ws) => ws.code === parseInt(id));

  // Fetch ambassador status on mount
  useEffect(() => {
    const fetchAmbassadorStatus = async () => {
      try {
        const status = await getAmbassadorStatus();
        setAmbassadorStatus(status);
      } catch (error) {
        console.error("Error fetching ambassador status:", error);
      }
      setLoadingStatus(false);
    };

    fetchAmbassadorStatus();
  }, [getAmbassadorStatus]);

  // Check if user is eligible for free workshop
  const isFreeEligible =
    ambassadorStatus?.isAmbassador && ambassadorStatus?.isEligible;
  const workshopReferrals = ambassadorStatus?.workshopReferrals || 0;

  // Check if already registered
  const isRegistered = user?.WorkshopPayment?.some(
    (payment) =>
      payment.workshopId === workshop?.code && payment.status === "SUCCESS",
  );

  useEffect(() => {
    if (isRegistered) {
      toast.error("You are already registered for this workshop!");
      navigate("/workshops");
    }
  }, [isRegistered, navigate]);

  const handleFreeRegistration = async () => {
    if (!isFreeEligible) {
      toast.error("You are not eligible for free registration");
      return;
    }

    try {
      const response = await freeWorkshopRegister({
        workshopId: workshop.code,
        claimFree: true,
      });

      if (response?.data?.isFree) {
        toast.success("Successfully registered for free workshop!");
        navigate("/dashboard");
      } else {
        toast.error("Free registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to register. Please try again.");
    }
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleMobileChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setFormData((prev) => ({ ...prev, paymentMobile: e.target.value }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formReqData = new FormData();
    formReqData.append("paymentScreenshot", file);
    const userArray = [parseInt(user.id)];
    //console.log(userArray);
    handleVerifyWorkshopPayment(
      {
        workshopId: workshop.code,
        paymentMobile: formData.paymentMobile,
        transactionId: formData.transactionId,
        formData: formReqData,
        users: userArray,
      },
      navigate,
    );
  };
  const { isLoading } = LoaderData();

  if (isLoading || loadingStatus) {
    return <Loader />;
  }

  if (!workshop) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p>Workshop not found</p>
      </div>
    );
  }

  // If user is eligible for free registration, show free registration option
  if (isFreeEligible) {
    return (
      <div className="flex flex-col items-center justify-center bg-black text-white p-5 relative mt-16 pt-6 min-h-screen">
        <div className="w-full max-w-md bg-gradient-to-br from-green-900/20 to-[#c0a068]/20 border-2 border-[#c0a068] rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center border-b-2 border-[#c0a068] pb-2">
            <span className="text-[#c0a068]">&lt;</span> Free Registration{" "}
            <span className="text-[#c0a068]">&gt;</span>
          </h2>
          <div className="mt-6 space-y-4">
            <div className="bg-green-500/10 border border-green-500 rounded-lg p-4">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                🎉 Congratulations!
              </h3>
              <p className="text-gray-300">
                You've successfully referred{" "}
                <span className="font-bold text-[#c0a068]">
                  {workshopReferrals}
                </span>{" "}
                users and earned a FREE workshop registration!
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#c0a068]/30">
              <h4 className="font-semibold text-[#c0a068] mb-2">
                Workshop Details:
              </h4>
              <p className="text-white font-bold">{workshop.title}</p>
              <p className="text-gray-400 text-sm mt-2">
                {workshop.moreInfo.date}
              </p>
              <p className="text-gray-400 text-sm">{workshop.moreInfo.time}</p>
              <p className="text-gray-400 text-sm">{workshop.moreInfo.venue}</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500 rounded-lg p-3">
              <p className="text-yellow-400 text-sm">
                ⚠️ Note: You can only use your free registration once. Choose
                wisely!
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => navigate("/workshops")}
                className="flex-1 px-4 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
              >
                Go Back
              </button>
              <button
                onClick={handleFreeRegistration}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg"
              >
                Register FREE &lt;~&gt;
              </button>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={() => navigate("/workshops")}
                className="text-[#c0a068] text-sm hover:underline"
              >
                Or pay normally if you want to save your free registration
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Normal payment flow
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-5 relative mt-16 pt-6">
      <div className="w-full max-w-md bg-gray-900 border-2 border-[#c0a068] rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center border-b-2 border-[#c0a068] pb-2">
          <span className="text-[#c0a068]">&lt;</span> Payment{" "}
          <span className="text-[#c0a068]">&gt;</span>
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Complete your workshop registration
        </p>
        <div className="mt-4 bg-[#1a1a1a] rounded-lg p-3 border border-[#c0a068]/30">
          <p className="text-white font-semibold">{workshop.title}</p>
          <p className="text-[#c0a068] text-2xl font-bold mt-1">
            ₹{workshop.price}
          </p>
        </div>
        <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
          <button
            type="button"
            className="bg-[#c0a068] text-black font-semibold py-2 rounded hover:bg-[#aa8c2c] transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Hide QR Code!" : "Show QR Code!"} &lt;~&gt;
          </button>
          {isOpen && (
            <div className="flex justify-center">
              <img
                src={workshop.qr}
                alt="QR Code"
                className="w-64 h-88 border-2 border-[#c0a068] rounded-md"
              />
            </div>
          )}
          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
            className="w-full p-3 bg-black border border-[#c0a068] text-white rounded-md focus:outline-none focus:border-[#aa8c2c]"
            required
          />
          <input
            type="text"
            name="paymentMobile"
            placeholder="Payment Mobile No."
            value={formData.paymentMobile}
            onChange={handleMobileChange}
            className="w-full p-3 bg-black border border-[#c0a068] text-white rounded-md focus:outline-none focus:border-[#aa8c2c]"
            required
          />
          <div className="flex flex-col items-center">
            <label
              htmlFor="screenshot"
              className="flex items-center gap-2 bg-black border border-[#c0a068] px-4 py-2 rounded-md cursor-pointer hover:border-[#aa8c2c] transition-all"
            >
              <span className="bg-[#c0a068] text-black px-3 py-1 rounded hover:bg-[#aa8c2c] transition-all">
                Upload
              </span>
              <span className="text-gray-400 text-sm">
                {fileName.length > 30
                  ? fileName.slice(0, 25) + "..."
                  : fileName}
              </span>
            </label>
            <input
              type="file"
              id="screenshot"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              required
            />
            {file !== null && (
              <button
                type="button"
                className="rounded-lg bg-[#c0a068] text-black px-3 py-1 mt-3 hover:bg-[#aa8c2c] transition-all"
                onClick={() => {
                  setFile(null);
                  setFileName("Get your payment screenshot...");
                }}
              >
                remove
              </button>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#c0a068] text-black font-semibold py-2 rounded hover:bg-[#aa8c2c] transition-all"
          >
            Verify Payment &lt;~&gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
