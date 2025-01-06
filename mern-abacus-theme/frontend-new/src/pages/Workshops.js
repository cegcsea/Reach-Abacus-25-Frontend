// import React from "react";
// import { workshops } from "../constants/workshops";
// import { useNavigate } from "react-router-dom";

// const Workshops = () => {
//     const navigate=useNavigate();
//   return (
//     <div className="text-white font-semibold text-3xl mt-40">
//       <h1 className="text-5xl overflow-hidden items-start  lg:mx-0 w-[100%] ">
//         Workshops
//       </h1>
//       <div className="flex flex-col xl:flex-row flex-wrap mt-10">
//         {workshops.map((workshop, index) => (
//           <div
//             key={index}
//             className="border border-solid border-red-900 w-[70%] lg:w-[45%]  xl:h-auto my-3 mx-auto bg-gradient-to-br from-[#421919] via-[#7d1a1a] to-[#460d0d] p-5 rounded-xl overflow-hidden flex flex-col "
//           >
//             <img
//               src={workshop.image}
//               alt={`${workshop.title}`}
//               className="object-contain border-solid border-[#b5b1b1] border-[3px] my-2 rounded-lg h-[150px] md:h-[250px] lg:h-[70%]"
//             />

//             <h1 className="flex items-center justify-center text-xl font-bold text-center mt-3 overflow-hidden">
//               {workshop.title}
//             </h1>
//             <button className="bg-white rounded-xl text-sm md:text-xl text-red-600 w-[70%] mt-4 xl:w-[30%] mx-auto overflow-hidden xl:p-3 py-auto " onClick={()=>{navigate(`${workshop.to}`)}}>
//               Read More {`<~>`}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Workshops;





import React from "react";
import { FaPhoneAlt } from "react-icons/fa";  // Importing the Font Awesome Phone icon

const Workshops = () => {
  const burgundy = '#800020';
  const white = '#fff';

  return (
    <div className="bg-black min-h-screen flex justify-center items-center py-8">
      <div className="w-full max-w-7xl px-4">
        {/* Title */}
        <h2 style={{ color: white }} className="text-3xl font-semibold mt-16 mb-8 text-center">Workshops</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-[#4b0b14] via-[#5b0e26] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#4b0b14]">
            <h3 className="text-xl font-semibold mb-4 border-b-2 pb-4" style={{ borderBottomColor: burgundy }}>
              # Rapid Development with AI
            </h3>
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Workshop 1"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <p className="text-lg font-medium pt-4">// Conducted by experts from</p>
          </div>


          {/* Card 2 */}
          <div className="bg-gradient-to-b from-[#4b0b14] via-[#5b0e26] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#4b0b14]">
            <h3 className="text-xl font-semibold mb-4 border-b-2 pb-4" style={{ borderBottomColor: burgundy }}>
              # Gen AI unleashed
            </h3>
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Workshop 2"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <p className="text-lg font-medium pt-4">// Conducted by experts from</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-[#4b0b14] via-[#5b0e26] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#4b0b14]">
            <h3 className="text-xl font-semibold mb-4 border-b-2 pb-4" style={{ borderBottomColor: burgundy }}>
            # Building a cloud home
            </h3>
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Workshop 2"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <p className="text-lg font-medium pt-4">// Conducted by experts from</p>
          </div>
        </div>

        {/* Centered Contact Box */}
        <div 
          style={{ backgroundColor: burgundy, borderColor: white }} 
          className="text-white p-6 rounded-lg shadow-lg mt-12 mx-auto w-96 border-2"
        >
          <h2 style={{ textAlign: 'left', color: white }} className="text-2xl font-semibold mb-4"># Contact</h2>
          <h3 style={{ textAlign: 'left', color: white }} className="text-xl font-semibold mb-4">For Queries Regarding Workshops</h3>

          <div className="flex items-center justify-between gap-4">
            {/* Name Box */}
            <div className="bg-black text-white px-4 py-2 rounded-md flex-grow">Gautham</div>

            {/* Phone Box */}
            <div className="flex items-center gap-2">
              <div className="bg-black text-white px-4 py-2 rounded-md">+1 234 567 890</div>

              {/* Call Icon Box */}
              <div className="bg-black text-white p-2 rounded-full">
                <FaPhoneAlt size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
