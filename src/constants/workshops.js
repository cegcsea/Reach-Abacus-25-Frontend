import ML from "../assets/Reach/ML.png";
import placement from "../assets/Reach/placement.svg";
import UI from "../assets/images/mobile-app-ux-ui-basics.jpg";
import UI_200 from "../assets/Reach/200.jpg";
import UI_150 from "../assets/Reach/150.jpg";
import UI_1200 from "../assets/Reach/1200.jpg";
import PAY from "../assets/Reach/new.jpg"
import LLM from '../assets/Reach/web.png';
import BACKEND from '../assets/Reach/pythonwo.png';

export const workshopsReach = [
  {
    title: "Breaking the Web: A Hands-On Web Exploitation Workshop",
    to: "LLM",
    image: LLM,

    qr: UI_200,
    venue: [
      {
        name: "J.J. College of Engineering and Technology,Tiruchirappalli ",
        time: "09:00 AM to 01:00 PM",
        location: "CSE Department, First Floor Lab",
      },
    ],
    code: 1,
    content:
      "This hands-on “Website Breaking” workshop introduces participants to real-world web security vulnerabilities through practical demonstrations, including Cross-Site Scripting (XSS), SQL injection for login bypass, cookie and session manipulation, insecure direct object references (IDOR), and path and directory traversal. A CTF-style live demo by the CEG Tech Forum will walk students through the complete attack lifecycle—starting with scanning and enumeration, identifying an entry point, gaining initial access, escalating privileges, and finally executing a full attack chain—helping participants understand how attackers think and how to build more secure applications.",
    prerequisites:
      "Burp Suite Community Edition pre-installed (WSL users: ensure Java is installed and the GUI is tested).\nLaptops required.\nInternet connectivity required",

    // speakers: "John Doe, Jane Smith",
    moreInfo: {
      certificate: "Physical Certificate",
      takeaways: "Takeaways",
      time: "9:00 AM to 01:00 PM",
      date: "6th February 2026",
      venue: "J.J. College of Engineering and Technology,Tiruchirappalli",
      entryFee: "Rs. 200/-",
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
  // {
  //   title: "Backend Development from Zero to API (Python + FastAPI)",
  //   to: "backend",
  //   image: BACKEND,
  //   // bulkBooking: PAY,
  //   qr: UI_150,
  //   venue: [
  //     {
  //       name: "J.J. College of Engineering and Technology,Tiruchirappalli",
  //       time: "09:00 AM to 01:00 PM",
  //       location: "CSE Department, Second Floor Lab",
  //     },
  //   ],
  //   code: 2,
  //   content:"This workshop provides a complete beginner-friendly introduction to backend development, covering how web applications work behind the scenes.Participants will learn fundamental concepts like client–server architecture, REST principles, HTTP methods, and API behavior.Through guided coding, students will build their own backend using Python + FastAPI, including request validation, routing, and structured responses.The workshop also covers database integration using SQLite, CRUD operations, and interactive API testing through Swagger UI.This hands-on session equips learners with the skills to build real-world backend systems and progress into full-stack development.",
  //   prerequistes:
  //     "1.Laptops required.\nBasic Python knowledge recommended but not mandatory.\nNo prior backend experience needed",
  //   // speakers: "John Doe, Jane Smith",
  //   moreInfo: {
  //     certificate: "Physical Certificate",
  //     takeaways: "Takeaways",
  //     time: "9:00 AM to 01:00 PM",
  //     date: "7th February, 2026",
  //     venue: "Your audi/lab",
  //     entryFee: "Rs. 150/-",
  //   },
  //   contact: [
  //     // {
  //     //   id: 1,
  //     //   name: "Ajai Krishna",
  //     //   phone: "+91 7010707652",
  //     // },
  //     { id: 1, name: "Sanjay Ganesan", phone: "+91 8148358787" },
  //   ],
  // },
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
      "Participate in focused sessions on interview techniques, enhancing your confidence and wadiness for placement scenarios. Stay informed about current hiring trends and industry expectations, positioning yourself effectively during placement processes. Engage in simulated interview experiences, receiving valuable feedback to optimize your performance in real-world placements.",
  },
];
