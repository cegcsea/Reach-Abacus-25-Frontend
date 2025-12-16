import ML from "../assets/Reach/ML.png";
import placement from "../assets/Reach/placement.svg";
import UI from "../assets/images/mobile-app-ux-ui-basics.jpg";
import GENAI_300 from "../assets/Reach/300.jpg";
import UI_150 from "../assets/Reach/150.jpg";
import GENAI_1200 from "../assets/Reach/1200.jpg";
import PAY from "../assets/Reach/new.jpg"
import LLM from '../assets/Reach/llm.png';
import BACKEND from '../assets/Reach/pythonwo.png';

export const workshopsReach = [
  {
    title: "Building LLM Applications from Scratch",
    to: "LLM",
    image: LLM,

    qr: UI_150,
    venue: [
      {
        name: "PSNA College of Engineering and Technology",
        time: "09:00 AM to 12:00 PM",
        location: "CSE Department, First Floor Lab",
      },
    ],
    code: 1,
    content:
      "This workshop introduces students to the fascinating world of Large Language Models (LLMs) and modern AI applications. Participants will explore how LLMs work behind the scenes, understand the principles of prompt engineering, and learn how to build practical AI tools without heavy frameworks.You will also dive into topics like conversational memory, system prompts, and retrieval-augmented generation (RAG).A guided hands-on session will help students build a working AI chatbot or a document-based Q&A system using direct LLM APIs and vector search.By the end of the workshop, participants will gain practical skills applicable to internships, projects, and real-world AI development.",
    prerequisites:
      "Basic programming understanding is helpful but not mandatory.\nLaptops required.\nInternet connectivity required",

    // speakers: "John Doe, Jane Smith",
    moreInfo: {
      certificate: "E-Certificate",
      takeaways: "Takeaways",
      time: "9:00 AM to 12:00 PM",
      date: "21st February, 2025",
      venue: "Your college audi/lab",
      entryFee: "Rs. 300/-",
    },
    contact: [
      // {
      //   id: 1,
      //   name: "Sandhya",
      //   phone: "+91 9363319596",
      // },
      { id: 1, name: "Sanjay Ganesan", phone: "+91 8148358787" },
    ],
  },
  {
    title: "Backend Development from Zero to API (Python + FastAPI)",
    to: "backend",
    image: BACKEND,
    bulkBooking: PAY,
    qr: GENAI_300,
    venue: [
      {
        name: "PSNA College of Engineering and Technology",
        time: "09:30 AM to 04:00 PM",
        location: "CSE Department, Second Floor Lab",
      },
    ],
    code: 2,
    content:"This workshop provides a complete beginner-friendly introduction to backend development, covering how web applications work behind the scenes.Participants will learn fundamental concepts like client–server architecture, REST principles, HTTP methods, and API behavior.Through guided coding, students will build their own backend using Python + FastAPI, including request validation, routing, and structured responses.The workshop also covers database integration using SQLite, CRUD operations, and interactive API testing through Swagger UI.This hands-on session equips learners with the skills to build real-world backend systems and progress into full-stack development.",
    prerequistes:
      "1.Laptops required.\nBasic Python knowledge recommended but not mandatory.\nNo prior backend experience needed",
    // speakers: "John Doe, Jane Smith",
    moreInfo: {
      certificate: "E-Certificate",
      takeaways: "Takeaways",
      time: "9:00 AM to 12:00 PM",
      date: "21st February, 2025",
      venue: "Your audi/lab",
      entryFee: "Rs. 150/-",
    },
    contact: [
      // {
      //   id: 1,
      //   name: "Ajai Krishna",
      //   phone: "+91 7010707652",
      // },
      { id: 1, name: "Sanjay Ganesan", phone: "+91 8148358787" },
    ],
  },
];

// export   const abacusWorkshops = [
//     {
//       id: 1,
//       title: "Rapid Development with AI",
//       image: "https://via.placeholder.com/150",
//       description: "Conducted by experts in the field.",
//       to: "ai-development",
//     },
//     {
//       id: 2,
//       title: "Gen AI Unleashed",
//       image: "https://via.placeholder.com/150",
//       description: "Explore the potential of Generative AI.",
//       to: "gen-ai",
//     },
//     {
//       id: 3,
//       title: "Building a Cloud Home",
//       image: "https://via.placeholder.com/150",
//       description: "Learn to create your own cloud environment.",
//       to: "cloud-home",
//     },
//   ];

export const sessions = [
  {
    code: 3,
    title: "Placement Session",
    image: placement,
    content:
      "Participate in focused sessions on interview techniques, enhancing your confidence and readiness for placement scenarios. Stay informed about current hiring trends and industry expectations, positioning yourself effectively during placement processes. Engage in simulated interview experiences, receiving valuable feedback to optimize your performance in real-world placements.",
  },
];
