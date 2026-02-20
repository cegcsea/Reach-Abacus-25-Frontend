import placement from "../assets/Reach/placement.svg";
import CloudImage from "../assets/Workshops/cloud.png";
import MCPImage from "../assets/Workshops/mcp.png";
import QR300 from "../assets/Workshops/300QR.jpeg";
import BulkQR from "../assets/Workshops/500QR.png";

export const workshopsReach = [
  {
    title: "Cloud Computing Essentials in the Era of AI",
    to: "cloud-computing-ai",
    image: CloudImage,
    qr: QR300,
    bulkQR: BulkQR,
    code: 1,
    price: 300,
    bulkBooking: true,
    registrationClosed: true,
    content:
      "Learn core cloud concepts and AI-powered cloud services with hands-on exposure to real-world use cases. This workshop is designed for beginners and is highly relevant to the industry. Participants are required to bring their laptops for practical sessions.",
    prerequisites:
      "Laptop is mandatory. No prior cloud computing knowledge required - beginner-friendly!",
    venue: [
      {
        name: "Hall of 1960, Chemistry Department",
        time: "09:00 AM to 04:00 PM",
        location: "Hall of 1960, Chemistry Department",
      },
    ],
    moreInfo: {
      certificate: "Physical Certificate + E-Certificate",
      takeaways:
        "Hands-on cloud computing skills, AI service experience, Real-world use cases",
      time: "9:00 AM to 4:00 PM",
      date: "20th February, 2026",
      venue: "Hall of 1960, Chemistry Department",
      entryFee: "₹300",
    },
    contact: [
      {
        id: 1,
        name: "Sanjay",
        phone: "+91 81483 58787",
      },
      {
        id: 2,
        name: "Deepak",
        phone: "+91 63801 56548",
      },
    ],
  },
  {
    title: "Mastering MCP: Building Context-Aware AI Apps",
    to: "mcp-context-aware-ai",
    image: MCPImage,
    qr: QR300,
    bulkQR: BulkQR,
    code: 2,
    price: 300,
    bulkBooking: true,
    content:
      "Understand MCP (Model Context Protocol) and context-aware AI applications through practical sessions with real-time implementation. Learn how modern AI apps manage context and build your own context-aware applications. Laptop is mandatory for hands-on learning.",
    prerequisites:
      "Laptop is mandatory. Basic programming knowledge helpful but not required.",
    venue: [
      {
        name: "Hall of 1960, Chemistry Department",
        time: "09:00 AM to 04:00 PM",
        location: "Hall of 1960, Chemistry Department",
      },
    ],
    moreInfo: {
      certificate: "Physical Certificate + E-Certificate",
      takeaways:
        "MCP understanding, Context-aware AI skills, Real-time implementation experience",
      time: "9:00 AM to 4:00 PM",
      date: "21st February, 2026",
      venue: "Hall of 1960, Chemistry Department",
      entryFee: "₹300",
    },
    contact: [
      {
        id: 1,
        name: "Sanjay",
        phone: "+91 81483 58787",
      },
      {
        id: 2,
        name: "Deepak",
        phone: "+91 63801 56548",
      },
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
