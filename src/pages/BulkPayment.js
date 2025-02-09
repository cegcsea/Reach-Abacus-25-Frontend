import React, { useState } from "react";
import { UserData } from "../context/userContext";
import { useParams, useNavigate } from "react-router-dom";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import toast from "react-hot-toast";
import { workshopsReach as workshops } from "../constants/workshops";
const BulkPayment = () => {
  const navigate = useNavigate();
  const { handleVerifyWorkshopPayment } = UserData();
  const { id } = useParams();
  const { isLoading } = LoaderData();

  const [formData, setFormData] = useState({
    transactionId: "",
    paymentMobile: "",
  });
  const [userIds, setUserIds] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Get your payment screenshot...");
  const [isOpen, setIsOpen] = useState(false);
  const workshop = workshops.find((ws) => ws.code === parseInt(id));
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserIdsChange = (event) => {
    setUserIds(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formReqData = new FormData();
    formReqData.append("paymentScreenshot", file);

    const uniqueUserIds = [...new Set(userIds.split(",").map((uid) => parseInt(uid)))];
    console.log(uniqueUserIds.length, userIds);
    if (uniqueUserIds.length !== 5) {
      toast.error("Please provide exactly five unique user IDs.");
      return;
    }
    console.log(uniqueUserIds);
    handleVerifyWorkshopPayment(
      {
        workshopId: parseInt(id),
        paymentMobile: formData.paymentMobile,
        transactionId: formData.transactionId,
        formData: formReqData,
        users: uniqueUserIds,
      },
      navigate
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-5 relative mt-16 pt-6">
      <div className="w-full max-w-md bg-gray-900 border-2 border-[#8a1818] rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center border-b-2 border-[#8a1818] pb-2">
          <span className="text-[#8a1818]">&lt;</span> Bulk Payment{" "}
          <span className="text-[#8a1818]">&gt;</span>
        </h2>
        <div className="flex justify-center w-full  flex-col">
          <p className="font-bold text-xl text-white">Note!</p>
          <ul className="list-disc list-inside text-justify pl-1">
            <li>Bulk registration Rs.1200 for 5 members</li>
            <li>All five participants should register in the website individually and
              enter Reach IDs separated by commas
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="bg-[#8a1818] p-2 text-white font-semibold py-2 rounded mt-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide QR Code!" : "Show QR Code!"} &lt;~&gt;
        </button>
        {isOpen && (
          <div className="flex justify-center">
            <img
              src={workshop.bulkBooking}
              alt="QR Code"
              className="w-64 h-88 border-2 my-1 border-[#8a1818] rounded-md"
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
          <input
            type="text"
            placeholder="Enter Reach-ids.Eg:10,12,15,13,22"
            value={userIds}
            onChange={handleUserIdsChange}
            className="w-full py-3 px-2 bg-black border border-[#8a1818] text-white rounded-md"
            required
          />
          <div className="flex flex-col items-center">
            <label
              htmlFor="screenshot"
              className="flex items-center gap-2 bg-black border border-red-600 px-4 py-2 rounded-md cursor-pointer"
            >
              <span className="bg-[#8a1818] text-white pl-2 pr-4 py-1  rounded">
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
            className="bg-[#8a1818] text-white py-2 rounded"
          >
            Submit Bulk Payment &lt;~&gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default BulkPayment;
