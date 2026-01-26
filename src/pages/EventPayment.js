import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoaderData } from "../context/loaderContext";
import { UserData } from "../context/userContext";
import Loader from "../components/Loader/Loader";
import toast from "react-hot-toast";
import price from "../assets/images/price.png";
import { events } from "../constants/events";
function EventPayment() {
  const { isLoading } = LoaderData();
  const { user, handleEventPayment } = UserData();
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    transactionId: "",
    paymentMobile: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Get your payment screenshot...");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const allEvents = events.flatMap((category) => category.event);
  const selectedEvent = allEvents.find((event) => {
    console.log(`Checking event:`, event.to, "Expected:", id, event.to === id);
    return event.to === id;
  });
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  if (isLoading) return <Loader />;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Upload your payment screenshot!");

    const formReqData = new FormData();
    formReqData.append("paymentScreenshot", file);
    const userArray = [parseInt(user.id)];
    // console.log(
    //   selectedEvent.id,
    //   formData.paymentMobile,
    //   formData.transactionId
    // );
    await handleEventPayment(
      {
        eventId: parseInt(selectedEvent.id),
        paymentMobile: formData.paymentMobile,
        transactionId: formData.transactionId,
        formData: formReqData,
        users: userArray,
      },
      navigate
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-5 relative min-h-screen mt-16 pt-6">
      {!isMobile && (
        <div className="w-[30%] flex justify-center items-center">
          <img src={price} alt="price-bg" />
        </div>
      )}

      <div className="w-full max-w-md bg-gray-900 border-2 border-[#8a1818] rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center border-b-2 border-[#8a1818] pb-2">
          <span className="text-[#8a1818]">{"<"}</span>
          Event Payment
          <span className="text-[#8a1818]">{">"}</span>
        </h2>

        <div className="flex justify-center w-full flex-col mt-4">
          <p className="font-bold text-xl text-white">Note!</p>
          <ul className="list-disc list-inside text-justify pl-1">
            <li>Complete the payment for your chosen event.</li>
            <li>Upload a screenshot of your transaction for verification.</li>
          </ul>
        </div>

        <button
          type="button"
          className="bg-[#8a1818] p-2 text-white font-semibold py-2 rounded mt-2 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide QR Code!" : "Show QR Code!"} {"<~>"}
        </button>
        {isOpen && (
          <div className="flex justify-center mt-2">
            <img
              src={price}
              alt="payment-qr"
              className="w-64 h-88 border-2 border-[#8a1818] rounded-md"
            />
          </div>
        )}

        <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
            className="w-full p-3 bg-black border border-[#8a1818] text-white rounded-md"
            required
          />
          <input
            type="text"
            name="paymentMobile"
            placeholder="Payment Mobile No."
            value={formData.paymentMobile}
            onChange={handleChange}
            className="w-full p-3 bg-black border border-[#8a1818] text-white rounded-md"
            required
          />
          <div className="flex flex-col items-center">
            <label
              htmlFor="screenshot"
              className="flex items-center gap-2 bg-black border border-[#8a1818] px-4 py-2 rounded-md cursor-pointer w-full justify-center"
            >
              <span className="bg-[#8a1818] text-white pl-2 pr-4 py-1 rounded">
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
          </div>
          <button
            type="submit"
            className="bg-[#8a1818] text-white py-2 rounded w-full"
          >
            Submit Event Payment {"<~>"}
          </button>
        </form>
      </div>

      {!isMobile && (
        <div className="w-[30%] flex justify-center items-center rotate-180">
          <img src={price} alt="price-bg" />
        </div>
      )}
    </div>
  );
}

export default EventPayment;
