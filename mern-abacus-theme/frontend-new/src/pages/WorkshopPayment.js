import React, { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import { workshops } from '../../constants';
import dots from '../../assets/Events/sidebg.png';
import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';

function WorkshopPayment() {
    const { isLoading } = useContext(LoaderContext);
    const { handleVerifyWorkshopPayment } = useContext(AuthContext);
    const { id } = useParams();
    const [formData, setFormData] = useState({ transactionId: "", paymentMobile: "" });
    const [file, setFiles] = useState(null);
    const [singleWorkshop, setSingleWorkshop] = useState({});
    const [fileName, setFileName] = useState('Get your payment screenshot...');
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const foundWorkshop = workshops.find((workshop) => `${workshop.code}` === id);
        setSingleWorkshop(foundWorkshop);
        console.log(foundWorkshop);

        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    const handleFileChange = (event) => {
        setFileName(event.target.files[0].name);
        setFiles(event.target.files[0]);
    };

    const handleMobileChange = (e) => {
        const regex = /^[0-9\b]+$/;

        if (e.target.value === '' || regex.test(e.target.value)) {
            setFormData((prevFormData) => ({ ...prevFormData, paymentMobile: e.target.value }));
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formReqData = new FormData();
        formReqData.append('paymentScreenshot', file);
        handleVerifyWorkshopPayment({
            workshopId: parseInt(id),
            paymentMobile: formData.paymentMobile,
            transactionId: formData.transactionId,
            formData: formReqData,
        });
    };

    return (
        <div className="flex justify-center items-center py-10 sm:px-0 px-4 bg-black gap-5">
            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}

            <div className="querybox flex flex-col gap-4 w-full sm:w-2/5 border border-red-600 text-white p-5 sm:p-10 bg-[#121212]">
                <div className='text-2xl text-center'>
                    <span className='text-red-600'>&#60;</span>
                    &nbsp;Payment&nbsp;
                    <span className='text-red-600'>&#62;</span>
                </div>
                <p className='text-base text-gray-400 text-center'>
                    It's always better to lay down the burden of loan ASAP!
                </p>

                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <button type='button' className="py-2 px-4 text-white border border-red-600 hover:bg-red-700 duration-150"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "Hide QR Code!" : "Show QR Code!"} {"<"}~{">"}
                    </button>
                    {isOpen && (
                        <div>
                            <img src={singleWorkshop.qr} alt='qrCode' className='w-full object-cover' />
                        </div>
                    )}

                    <input type='text' name='transactionId' placeholder='Transaction ID' onChange={handleChange} value={formData.transactionId}
                        className='p-2 outline-none border border-red-600 text-[18px] bg-[#1a1a1a] text-white'
                        style={{ width: '100%' }} required />

                    <input type='text' name='paymentMobile' placeholder='Payment Mobile No.' onChange={handleMobileChange} value={formData.paymentMobile}
                        className='p-2 outline-none border border-red-600 text-[18px] bg-[#1a1a1a] text-white'
                        style={{ width: '100%' }} required />

                    <div>
                        <label htmlFor='screenshot' className='flex flex-row w-full justify-center items-center cursor-pointer'>
                            <div className="py-2 px-4 text-white border border-red-600 hover:bg-red-700 duration-150">
                                Upload
                            </div>
                            <p className='text-base border border-red-600 text-gray-400 p-2'>
                                {fileName.length > 30 ? fileName.slice(0, isMobile ? 17 : 25) + "..." : fileName}
                            </p>
                        </label>
                        <input type='file' id='screenshot' accept="image/*" name='paymentScreenshot' className='hidden' onChange={handleFileChange} />
                    </div>

                    <div className="self-center">
                        <button type='submit' className="py-2 px-4 text-white border border-red-600 hover:bg-red-700 duration-150">
                            Verify Payment {"<"}~{">"}
                        </button>
                    </div>
                </form>
            </div>

            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center rotate-180">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}
        </div>
    );
}

export default WorkshopPayment;
