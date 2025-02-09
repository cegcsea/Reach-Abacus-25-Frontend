import React, { useState } from "react";
import { UserData } from "../context/userContext";
import { useParams, useNavigate } from "react-router-dom";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import { workshopsReach as workshops } from "../constants/workshops";

const Payment = () => {
  const navigate = useNavigate();
  const { handleVerifyWorkshopPayment, user } = UserData();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    transactionId: "",
    paymentMobile: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Get your payment screenshot...");
  const [isOpen, setIsOpen] = useState(false);
  const workshop = workshops.find((ws) => ws.code === parseInt(id));
 // console.log(workshops, id);
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
        workshopId: parseInt(id),
        paymentMobile: formData.paymentMobile,
        transactionId: formData.transactionId,
        formData: formReqData,
        users: userArray,
      },
      navigate
    );
  };
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-5 relative mt-16 pt-6">
      <div className="w-full max-w-md bg-gray-900 border-2 border-[#8a1818] rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center border-b-2 border-[#8a1818] pb-2">
          <span className="text-[#8a1818]">&lt;</span> Payment{" "}
          <span className="text-[#8a1818]">&gt;</span>
        </h2>
        <p className="text-gray-400 text-center mt-2">
          It's always better to lay down the burden of loan ASAP!
        </p>
        <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
          <button
            type="button"
            className="bg-[#8a1818] text-white font-semibold py-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Hide QR Code!" : "Show QR Code!"} &lt;~&gt;
          </button>
          {isOpen && (
            <div className="flex justify-center">
              <img
                src={workshop.qr}
                alt="QR Code"
                className="w-64 h-88 border-2 border-[#8a1818] rounded-md"
              />
            </div>
          )}
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
            onChange={handleMobileChange}
            className="w-full p-3 bg-black border border-[#8a1818] text-white rounded-md"
            required
          />
          <div className="flex flex-col items-center">
            <label
              htmlFor="screenshot"
              className="flex items-center gap-2 bg-black border border-red-600 px-4 py-2 rounded-md cursor-pointer"
            >
              <span className="bg-[#8a1818] text-white px-3 py-1 rounded">
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
                className="rounded-lg bg-[#8a1818] text-white px-3 py-1 mt-3"
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
            className="bg-[#8a1818] text-white font-semibold py-2 rounded"
          >
            Verify Payment &lt;~&gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
