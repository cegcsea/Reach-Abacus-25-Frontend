import img1 from "../assets/images/techevent.jpg";
import img2 from "../assets/images/nontech.jpg"; // Example images
import img3 from "../assets/images/preevnt.jpg";
import img4 from "../assets/images/pentacode.png";
import img5 from "../assets/images/ML Mania.png";
import img6 from "../assets/images/ospc.png";
import img7 from "../assets/images/family feud.png";
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
    title: "Technical Events",
    image: img1, // Event image
    event: [
      {
        id: 1,
        title: "Pentacode",
        description:
          "A quiz challenge spanning five core Computer Science domains: Debugging, DSA, OOPs, CN, and DBMS. Solve a series of tasks to unlock hints and crack the final DSA problem.",
        image: img4, // Replace with your image path
        path: "/events/pentacode",

        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "pentacode",
        rounds: [
          {
            title: "Round 1 – Quiz Challenge",
            content:
              "Test your mettle in a quiz spanning five core Computer Science domains: Debugging, DSA, OOPs, CN, and DBMS. Showcase your expertise to advance!",

            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 – Decode the Pentacode",
            content:
              "Solve a challenging DSA problem with the help of hints unlocked from tasks in four other domains. Complete all tasks strategically to crack the final DSA problem and secure victory!",
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
        title: "ML - Conquer",
        description:
          "Test your skills in machine learning through a quiz and a hands-on model-building challenge. Answer questions and build an ML model to solve real-world problems.",
        image: img5,
        path: "/events/ml-conquer",

        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "ml-conquer",
        rounds: [
          {
            title: "Round 1 – ML Conquer: Quiz Blitz",
            content:
              "Test your theoretical knowledge of machine learning algorithms, concepts, and applications in a fast-paced quiz. Answer quickly and accurately to secure your spot in the next round.",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 – ML Conquer: Model Challenge",
            content:
              "Build a powerful ML model to solve a real-world problem. Showcase your coding skills, data analysis, and model optimization techniques to emerge as the ultimate ML conqueror.",
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
        title: "OSPC",
        description:
          "It's a fast-paced programming contest, where innovative minds come together to resolve challenges in the most complicated coding questions, involving data structures and algorithms.",
        image: img6, // Replace with your image path
        path: "/events/ospc",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "ospc",
        rounds: [
          {
            title: "Round 1",
            content: "MCQ on Data Structures, Algorithms, and OOPs concepts",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2",
            content:
              "Solve challenging programming questions based on DSA and algorithms",
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
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
  {
    title: "Non Technical Events",
    image: img2, // Event image,
    Date: "20 February 2025",

    event: [
      {
        id: 4,
        title: "Family Feud",
        time: "01:30 PM to 04:00 PM",
        Date: "20 February 2025",
        team: "Three members",
        description:
          "Put your skills to test on topics like Food, Technology, Movies, Lifestyle, and more! Can your team guess the most popular answers to survey questions and win the title of Family Feud Champions?",
        image: img7, // Replace with your image path
        path: "/events/family-feud",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "family-feud",
        prize: "Rs 1k+",
      },
    ],
    // Add more events h
    path: "/events/non-technical-events", // Path to the event page
  },
  {
    title: "Pre Events",
    image: img3, // Event image
    event: [
      {
        id: 6,
        title: "#Novice.Init()",
        description:
          "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
        image: img1, // Replace with your image path
        path: "/events/geekquiz6",
        to: "geekquiz6",
      },
      {
        id: 7,
        title: "#Another Event",
        description:
          "A DBMS challenge that combines theoretical knowledge with practical application. The first round involves DBMS-based multiple-choice questions (MCQs), testing participants' understanding of database concepts. Successful participants advance to Round 2, a hands-on SQL coding challenge, where they apply their skills to solve real-world database problems.",
        image: img1, // Replace with your image path
        path: "/events/geekquiz7",
        to: "geekquiz7",
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
];
