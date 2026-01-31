import img1 from "../assets/images/Technical Events.png";
import img2 from "../assets/images/NonTech Events.png"; // Example images
import img3 from "../assets/images/preevnt.jpg";
import img4 from "../assets/images/UI Odyssey.jpg";
import img5 from "../assets/images/ML Mania.png";
import img6 from "../assets/images/ospc.png";
import img7 from "../assets/images/Musical Mania.jpg";
import img8 from "../assets/images/amazon.png";
// Contacts for the EventPage

export const EventContacts = [
  {
    id: 1,
    name: "Nikhil Prasanna",
    phone: "+91 6379066510",
  },
  { id: 2, name: "Padmasharan", phone: "+91 9585612262" },
];

// List of events
export const events = [
  {
    title: "Tech Events",
    image: img1, // Event image
    event: [
      {
        id: 1,
        title: "UI Odyssey",
        description:
          "A creative design event where participants imagine and build futuristic digital interfaces.",
        image: img4, // Replace with your image path
        path: "/events/uiodyssey",

        team: "Two or three members",
        Date: "6th February 2026",
        prize: "Rs 1.5k+",
        to: "uiodyssey",
        rounds: [
          {
            title: "Round 1: Quick Sketch Challenge",
            content:
              "Create a fast wireframe based on a futuristic theme.",
              
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2: Interactive Prototype",
            content:
              "Turn your idea into an interactive prototype using Figma or any design tool.",
            time: "01:30 PM to 03:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Gautham",
            phone: "+1 234 567 890",
          },
          {
            id: 2,
            name: "Ganesh",
            phone: "+1 234 567 890",
          },
        ],
        intern: [],
      },
      {
        id: 2,
        title: "CodeQuest",
        description:
          "It is a competitive coding event focused on problem-solving and algorithmic thinking.",
        image: img5,
        path: "/events/codequest",

        team: "Two or three members",
        Date: "6th February 2025",
        prize: "Rs 1.5k+",
        to: "codequest",
        rounds: [
          {
            title: "Round 1 – Algorithmic Sprint",
            content:
              "Participants solve 4–5 DSA-based problems covering arrays, strings, recursion, trees, graphs, and other core concepts. Points earned here determine ranking and unlock advantages for the next round.",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 – The Final Conquer",
            content:
              "Top performers advance to Round 2, where they face 2–3 hard-level algorithmic problems. Each team receives access to 3 optional hints usable at any stage. Each hint costs a specific amount of points deducted from the team's total.",
            time: "01:30 PM to 03:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Gautham",
            phone: "+1 234 567 890",
          },
          {
            id: 2,
            name: "Ganesh",
            phone: "+1 234 567 890",
          },
          {
            id: 3,
            name: "Ganesh",
            phone: "+1 234 567 890",
          },
        ],
        intern: [],
      },
      {
        id: 3,
        title: "Query Kernel Arena",
        description:
          "It is designed to test precision, logic, and applied knowledge in Database Management Systems (DBMS) and Operating Systems (OS). Participants progress through two structured rounds that blend analytical thinking with hands-on problem solving.",
        image: img6, // Replace with your image path
        path: "/events/querykernel",
        team: "Two or three members",
        Date: "6th February 2025",
        prize: "Rs 1.5k+",
        to: "querykernel",
        rounds: [
          {
            title: "Round 1",
            content: "MCQs on DBMS & OS fundamentals, A Technical Crossword Puzzle, Spot-the-Error tasks in SQL/OS pseudo codes, ER Diagram Construction from table instances. 6-10 qualifying teams proceed to round 2.",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2",
            content:
              "10 SQL Query Problems (JOINs, subqueries, aggregation, logic analysis) and 2 OS Tasks based on scheduling algorithms and synchronization code.",
            time: "01:30 PM to 03:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Gautham",
            phone: "+1 234 567 890",
          },
          {
            id: 2,
            name: "Ganesh",
            phone: "+1 234 567 890",
          },
          {
            id: 3,
            name: "Ganesh",
            phone: "+1 234 567 890",
          },
        ],
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
  {
    title: "Non-Tech Events",
    image: img2, // Event image,
    Date: "5th February 2026",
    
    event: [
      {
        id: 4,
        title: "Musical Mania",
        time: "01:30 PM to 04:00 PM",
        Date: "5th February 2026",
        team: "Two or three members",
        description:
          "A music quiz event focused on the Tamil music industry, testing knowledge of music directors, singers, lyricists, songs, and movie trivia through written and interactive rounds.",
        image: img7, // Replace with your image path
        path: "/events/musical-mania",
        to: "musical-mania",
        prize: "Rs 1k+",
        rounds: [
          {
            title: "Round 1 – Pen and Paper Screening",
            content:
              "20-minute written quiz about the Tamil music industry. Questions on music directors, singers, lyricists, songs, and movie trivia. Top 6 teams qualify for Round 2.",
            duration: "20 minutes",
            time: "01:30 PM to 02:00 PM",
          },
          {
            title: "Round 2 – Stage Music Quiz (6 Teams)",
            content:
              "This round has three sections testing different aspects of Tamil music knowledge through interactive identification challenges.",
            time: "02:15 PM to 04:00 PM",
            sections: [
              {
                title: "BGM Identification",
                description: "Play a short background score. Teams identify the movie.",
                points: "+10 for correct, –5 for wrong",
              },
              {
                title: "Singer Identification",
                description: "Play a short voice clip. Teams identify the singer.",
                points: "+10 for correct, –5 for wrong",
              },
              {
                title: "Song-to-Movie Identification",
                description: "Play a short portion of a song. Teams identify the movie.",
                points: "+10 for correct, –5 for wrong",
              },
            ],
          },
        ],
        contact: [
          {
            id: 1,
            name: "Contact Person 1",
            phone: "+91 0000000000",
          },
          {
            id: 2,
            name: "Contact Person 2",
            phone: "+91 0000000000",
          },
        ],
        intern: [],
      },
    ],
    // Add more events h
    path: "/events/non-technical-events", // Path to the event page
  },
  // {
  //   title: "Pre Events",
  //   image: img3, // Event image
  //   event: [
  //     {
  //       id: 6,
  //       title: "#Novice.Init()",
  //       description:
  //         "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
  //       image: img1, // Replace with your image path
  //       path: "/events/geekquiz6",
  //       to: "geekquiz6",
  //     },
  //     {
  //       id: 7,
  //       title: "#Another Event",
  //       description:
  //         "A DBMS challenge that combines theoretical knowledge with practical application. The first round involves DBMS-based multiple-choice questions (MCQs), testing participants' understanding of database concepts. Successful participants advance to Round 2, a hands-on SQL coding challenge, where they apply their skills to solve real-world database problems.",
  //       image: img1, // Replace with your image path
  //       path: "/events/geekquiz7",
  //       to: "geekquiz7",
  //     },
  //   ],
  //   path: "/events/technical-events", // Path to the event page
  // },
  // Add more events as needed
];
