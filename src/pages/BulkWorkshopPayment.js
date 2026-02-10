import React, { useState, useEffect, useMemo } from "react";
import { UserData } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import { workshopsReach as workshops } from "../constants/workshops";
import toast from "react-hot-toast";
import { FaCheckCircle, FaLaptopCode } from "react-icons/fa";

const BulkWorkshopPayment = () => {
  const navigate = useNavigate();
  const { handleVerifyBulkWorkshopPayment, user } = UserData();
  const [formData, setFormData] = useState({
    transactionId: "",
    paymentMobile: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Get your payment screenshot...");
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = LoaderData();

  // Check for existing bulk payment (workshopId: 0)
  const bulkPayment = user?.WorkshopPayment?.find(
    (p) => p.workshopId === 0 && ["SUCCESS", "PENDING"].includes(p.status),
  );

  // Check for individual workshop registrations (codes 1 or 2)
  // Backend blocks bulk payment if registered for ANY of the included workshops
  // We must check both confirmed workshops AND pending payments
  const individualRegistrations = useMemo(
    () => [
      // Check confirmed workshops
      ...(user?.workshops?.filter((w) => [1, 2].includes(w.workshopId)) || []),
      // Check pending/success payments for individual workshops
      ...(user?.WorkshopPayment?.filter(
        (p) =>
          [1, 2].includes(p.workshopId) &&
          ["SUCCESS", "PENDING"].includes(p.status),
      ) || []),
    ],
    [user?.workshops, user?.WorkshopPayment],
  );

  useEffect(() => {
    if (bulkPayment) {
      if (bulkPayment.status === "SUCCESS") {
        toast.success("You have already purchased the bulk workshop package!");
      } else {
        toast.success("Your bulk workshop payment is pending verification.");
      }
      navigate("/workshops");
    } else if (individualRegistrations.length > 0) {
      toast.error(
        "You are already registered for one or both workshops individually. Bulk package is not available.",
      );
      navigate("/workshops");
    }
  }, [bulkPayment, individualRegistrations, navigate]);

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
    if (!user?.id) {
      toast.error("Please log in again to continue.");
      navigate("/auth");
      return;
    }
    const formReqData = new FormData();
    formReqData.append("paymentScreenshot", file);
    const userArray = [parseInt(user.id)];

    handleVerifyBulkWorkshopPayment(
      {
        workshopId: workshops.map((w) => w.code), // Both workshop codes as array
        paymentMobile: formData.paymentMobile,
        transactionId: formData.transactionId,
        formData: formReqData,
        userIds: userArray,
      },
      navigate,
    );
  };

  if (isLoading || bulkPayment || individualRegistrations.length > 0) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-5 relative mt-16 pt-6 min-h-screen">
      <div className="w-full max-w-2xl bg-gray-900 border-2 border-[#c0a068] rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaLaptopCode className="text-3xl text-[#c0a068]" />
          <h2 className="text-2xl md:text-3xl font-bold text-center border-b-2 border-[#c0a068] pb-2">
            <span className="text-[#c0a068]">&lt;</span> Bulk Workshop
            Registration <span className="text-[#c0a068]">&gt;</span>
          </h2>
        </div>

        {/* Workshop Details */}
        <div className="bg-[#1a1a1a] rounded-lg p-4 mb-6 border border-[#c0a068]/30">
          <h3 className="text-lg font-bold text-[#c0a068] mb-3">
            Included Workshops:
          </h3>
          <div className="space-y-3">
            {workshops.map((workshop) => (
              <div
                key={workshop.code}
                className="flex items-start gap-3 bg-[#252525] rounded-lg p-3"
              >
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">{workshop.title}</p>
                  <p className="text-gray-400 text-sm">
                    {workshop.moreInfo.date} • {workshop.moreInfo.time}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {workshop.moreInfo.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#c0a068]/30 flex items-center justify-between">
            <div>
              <p className="text-gray-400 line-through">Regular Price: ₹600</p>
              <p className="text-2xl font-bold text-[#c0a068]">
                Bulk Price: ₹500
              </p>
            </div>
            <div className="bg-green-500/20 border border-green-500 rounded-lg px-4 py-2">
              <p className="text-green-400 font-bold">Save ₹100!</p>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                src={workshops[0].bulkQR}
                alt="Bulk Registration QR Code"
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

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => navigate("/workshops")}
              className="flex-1 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#c0a068] text-black font-semibold py-2 rounded hover:bg-[#aa8c2c] transition-all"
            >
              Verify Payment &lt;~&gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BulkWorkshopPayment;
