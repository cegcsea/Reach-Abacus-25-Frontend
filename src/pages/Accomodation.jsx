import React, { useState } from "react";
import { LoaderData } from "../context/loaderContext";
import { UserData } from "../context/userContext";
import toast from "react-hot-toast";
import price from "../assets/images/price.png";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

function Accommodation() {
  const { isLoading } = LoaderData();
  const { handleAccomodationPayment, user } = UserData();
  const [selectionDay, setSelectionDay] = useState(null);
  const [selectionDates, setSelectionDates] = useState(null);
  const [food, setFood] = useState("false");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    transactionId: "",
    paymentMobile: "",
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Get your payment screenshot...");
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [basePrice, setBasePrice] = useState(250);
  const [price, setPrice] = useState(0);

  const dayCountOptions = [
    { label: "Single day", value: "1" },
    { label: "Two Days", value: "2" },
    { label: "Three Days", value: "3" },
    { label: "Four Days", value: "4" },
  ];

  const singleDayOptions = [
    { label: "March 20", value: "1", day0: true },
    { label: "March 21", value: "1", day1: true },
    { label: "March 22", value: "1", day2: true },
    { label: "March 23", value: "1", day3: true },
  ];

  const doubleDayOptions = [
    { label: "March 20 & 21", value: "2", day0: true, day1: true },
    { label: "March 21 & 22", value: "2", day1: true, day2: true },
    { label: "March 22 & 23", value: "2", day2: true, day3: true },
  ];

  const tripleDayOptions = [
    {
      label: "March 20, 21 & 22",
      value: "3",
      day0: true,
      day1: true,
      day2: true,
    },
    {
      label: "March 21, 22 & 23",
      value: "3",
      day1: true,
      day2: true,
      day3: true,
    },
  ];

  const allDayOptions = [
    {
      label: "March 20 to March 23",
      value: "4",
      day0: true,
      day1: true,
      day2: true,
      day3: true,
    },
  ];

  if (isLoading) return <Loader />;

  const handleDayCountChange = (e) => {
    const selectedValue = e.target.value;
    const option = dayCountOptions.find((opt) => opt.value === selectedValue);
    setSelectionDates(option);
    setSelectionDay(null);
    setHide(false);
  };

  const handleDateSelection = (e) => {
    const selectedValue = e.target.value;
    let option;
    switch (selectionDates?.value) {
      case "1":
        option = singleDayOptions.find((opt) => opt.label === selectedValue);
        break;
      case "2":
        option = doubleDayOptions.find((opt) => opt.label === selectedValue);
        break;
      case "3":
        option = tripleDayOptions.find((opt) => opt.label === selectedValue);
        break;
      case "4":
        option = allDayOptions.find((opt) => opt.label === selectedValue);
        break;
      default:
        return;
    }
    setSelectionDay(option);
    setHide(true);
    const newPrice = parseInt(option.value) * basePrice;
    setPrice(newPrice);
  };

  const handleFood = (e) => {
    const foodValue = e.target.value;
    setFood(foodValue);
    const newBasePrice = foodValue === "true" ? 400 : 250;
    setBasePrice(newBasePrice);
    if (selectionDay) {
      const newPrice = parseInt(selectionDay.value) * newBasePrice;
      setPrice(newPrice);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const handleMobileChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setFormData((prev) => ({ ...prev, paymentMobile: e.target.value }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Upload your payment screenshot!");
    if (!selectionDay) return toast.error("Select your dates of stay!");

    const formReqData = new FormData();
    formReqData.append("paymentScreenshot", file);
    const userArray = [parseInt(user.id)];
    console.log(user.id, userArray);
    await handleAccomodationPayment(
      {
        day0: selectionDay.day0 || false,
        day1: selectionDay.day1 || false,
        day2: selectionDay.day2 || false,
        day3: selectionDay.day3 || false,
        food: food === "true",
        amount: price,
        paymentMobile: formData.paymentMobile,
        transactionId: formData.transactionId,
        formData: formReqData,
        users: userArray,
      },
      navigate,
    );
  };

  return (
    <div className="flex justify-center items-center py-10 sm:px-0 min-h-screen px-4 mt-10 gap-5 bg-transparent">
      <div className="querybox flex flex-col gap-4 w-full sm:w-2/5 bg-[#1a1a1a] border border-[#c0a068] rounded-lg shadow-lg p-5 sm:p-10 text-[#ffffffe6]">
        <div className="text-2xl md:text-3xl font-bold text-center border-b border-[#c0a068] pb-2">
          <span className="text-[#c0a068]">{"<"}</span>
          &nbsp;Accommodation&nbsp;
          <span className="text-[#c0a068]">{">"}</span>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-semibold">
              For how many days do you need accommodation?
            </label>
            <select
              value={selectionDates?.value || ""}
              onChange={handleDayCountChange}
              className="p-2 outline-none border border-[#c0a068] text-[18px] bg-[#050505] text-[#ffffffe6] rounded-md focus:bg-[#c0a068]/10 transition-colors"
            >
              <option value="" disabled className="bg-[#050505] text-gray-500">
                Select how many days
              </option>
              {dayCountOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-[#050505] text-[#ffffffe6]"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {selectionDates && (
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-semibold">
                For which dates do you need accommodation?
              </label>
              <select
                value={selectionDay?.label || ""}
                onChange={handleDateSelection}
                className="p-2 outline-none border border-[#c0a068] text-[18px] bg-[#050505] text-[#ffffffe6] rounded-md focus:bg-[#c0a068]/10 transition-colors"
              >
                <option
                  value=""
                  disabled
                  className="bg-[#050505] text-gray-500"
                >
                  Select dates of your stay
                </option>
                {(selectionDates.value === "1"
                  ? singleDayOptions
                  : selectionDates.value === "2"
                    ? doubleDayOptions
                    : selectionDates.value === "3"
                      ? tripleDayOptions
                      : allDayOptions
                ).map((option) => (
                  <option
                    key={option.label}
                    value={option.label}
                    className="bg-[#050505] text-[#ffffffe6]"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex flex-col gap-2 text-[#ffffffe6]">
            <p>Do you need food for your stay?</p>
            <div className="flex gap-5">
              <div className="flex gap-3 items-center">
                <input
                  type="radio"
                  name="food"
                  id="radio-yes"
                  value="true"
                  checked={food === "true"}
                  onChange={handleFood}
                  className="accent-[#c0a068]"
                />
                <label htmlFor="radio-yes">Yes</label>
              </div>
              <div className="flex gap-3 items-center">
                <input
                  type="radio"
                  name="food"
                  id="radio-no"
                  value="false"
                  checked={food === "false"}
                  onChange={handleFood}
                  className="accent-[#c0a068]"
                />
                <label htmlFor="radio-no">No</label>
              </div>
            </div>
          </div>

          {hide && (
            <>
              <hr className="opacity-50 border-[#c0a068]" />
              <div className="text-2xl md:text-3xl font-bold text-center border-b border-[#c0a068] pb-2">
                <span className="text-[#c0a068]">{"<"}</span>
                &nbsp;Payment&nbsp;
                <span className="text-[#c0a068]">{">"}</span>
              </div>
              <button
                type="button"
                className="bg-[#c0a068] hover:bg-[#aa8c2c] duration-150 p-2 text-black font-bold py-2 rounded w-full border border-[#c0a068]"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Hide QR Code!" : "Show QR Code!"} {"<~>"}
              </button>
              {isOpen && (
                <div className="flex justify-center mt-2">
                  <img
                    src={price}
                    alt="payment-qr"
                    className="w-64 h-88 border-2 border-[#c0a068] rounded-md"
                  />
                </div>
              )}

              <input
                type="text"
                name="transactionId"
                placeholder="Transaction ID"
                onChange={handleChange}
                value={formData.transactionId}
                className="w-full p-3 bg-[#050505] border border-[#c0a068] text-[#ffffffe6] placeholder-gray-500 rounded-md focus:outline-none focus:bg-[#c0a068]/10"
                required
              />

              <input
                type="text"
                name="paymentMobile"
                placeholder="Payment Mobile No."
                onChange={handleMobileChange}
                value={formData.paymentMobile}
                className="w-full p-3 bg-[#050505] border border-[#c0a068] text-[#ffffffe6] placeholder-gray-500 rounded-md focus:outline-none focus:bg-[#c0a068]/10"
                required
              />

              <div className="flex flex-col items-center">
                <label
                  htmlFor="screenshot"
                  className="flex items-center gap-2 bg-[#050505] border border-[#c0a068] px-4 py-2 rounded-md cursor-pointer w-full justify-center hover:bg-[#c0a068]/10 transition-colors"
                >
                  <span className="bg-[#c0a068] text-black font-semibold pl-2 pr-4 py-1 rounded">
                    Upload
                  </span>
                  <span className="text-gray-400 text-sm truncate max-w-[200px]">
                    {fileName}
                  </span>
                </label>
                <input
                  type="file"
                  id="screenshot"
                  accept="image/*"
                  name="paymentScreenshot"
                  className="hidden"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div className="self-center w-full">
                <button
                  type="submit"
                  className="bg-[#c0a068] hover:bg-[#aa8c2c] duration-150 text-black font-bold py-2 rounded w-full border border-[#c0a068]"
                >
                  Book Accommodation {"<~>"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Accommodation;
