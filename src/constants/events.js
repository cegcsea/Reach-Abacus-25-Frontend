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
        title: "OSPC",
        description:
          "It's a fast-paced programming contest, where innovative minds come together to resolve challenges in the most complicated coding questions, involving data structures and algorithms.",
        image: img4, // Replace with your image path
        path: "/events/ospc",

        team: "Two or three members",
        Date: "21st March 2025",
        prize: "Rs 1.5k+",
        to: "ospc",
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
        title: "BYTE BEGIN",
        description:
          "Designed exclusively for first-year students, this event introduces the basics of logical reasoning, arithmetic, and programming concepts in an engaging and beginner-friendly manner. Participants will tackle simple yet exciting challenges, making it the perfect launchpad for their coding journey!",
        image: img5,
        path: "/events/byte-begin",

        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "byte-begin",
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
<<<<<<< HEAD
        title: "OSPC",  
        Qr:true,
=======
        title: "BRAINWAVE.ML",
>>>>>>> hari
        description:
          "Dive into the world of machine learning in this thrilling event! Test your knowledge, solve challenges, and showcase your skills by developing innovative solutions to given problems. Compete with the best and prove your expertise in ML!",
        image: img6, // Replace with your image path
        path: "/events/brainwave.ml",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "brainwave.ml",
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
      
      {
        id: 4,
        title: "CTRL+ESCAPE",
        description:
          "Ctrl+Escapeis an engaging event that combines the thrill of a tech quiz with the problem-solving excitement of coding. Participants will tackle quiz questions to test their knowledge and unlock coding challenges that put their programming skills to the test. ",
        image: img6, // Replace with your image path
        path: "/events/ctrl+escape",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "ctrl+escape",
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
      {
        id: 5,
        title: "PAPER PRESENTATION",
        description:
          "Paper Presentation is an intellectual platform where participants showcase their innovative ideas and research on cutting-edge topics. This event challenges individuals to present their findings with clarity, creativity, and confidence, demonstrating both technical depth and communication excellence.",
        image: img6, // Replace with your image path
        path: "/events/paper-presentation",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "paper-presentation",
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
      {
        id: 6,
        title: "READY.SET.HIRE!",
        description:
          "Ready.Set.Hire!offers a realistic simulation of the recruitment process, featuring acoding round followed by a mock interview. Participants will be tested on their technical skills and problem-solving abilities, mirroring the challenges faced in actual job interviews. This event is the perfect opportunity to gain hands-on experience and refine your interview skills!",
        image: img6, // Replace with your image path
        path: "/events/ready-set-hire",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "ready-set-hire",
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
      {
        id: 7,
        title: "GLITCH SNITCH",
        description:
          "Glitch Snitchis a thrilling challenge where participants work to identify and fix bugs in pre-written code. Test your debugging skills by solving real-world coding issues under time pressure. It's the perfect opportunity to sharpen your problem-solving abilities and improve your coding expertise!",
        image: img6, // Replace with your image path
        path: "/events/glitch-snitch",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 1.5k+",
        to: "glitch-snitch",
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
        id: 8,
        title: "TREASURE HUNT",
        time: "01:30 PM to 04:00 PM",
        Date: "20 February 2025",
        team: "Three members",
        description:
          "Join the Treasure Hunt for an adventurous campus quest! Teams will receive clues leading them to hidden locations around the campus, each revealing the next clue to uncover further secrets. The fastest team to navigate all the clues and complete the hunt will win the ultimate prize—get ready for an exciting race of wits and speed!",
        image: img7, // Replace with your image path
        path: "/events/treasure-hunt",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "treasure-hunt",
        prize: "Rs 1k+",
      },
      {
        id: 9,
        title: "IPL AUCTION",
        time: "01:30 PM to 04:00 PM",
        Date: "20 February 2025",
        team: "Three members",
        description:
          "IPL Auction lets you create your dream team by selecting players who can lead your squad to victory. Strategize, choose wisely, and keep your team in the race for the long haul of the tournament!",
        image: img7, // Replace with your image path
        path: "/events/ipl-auction",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "ipl-auction",
        prize: "Rs 1k+",
      },
      {
        id: 10,
        title: "CHATGPT PULSE",
        time: "01:30 PM to 04:00 PM",
        Date: "20 February 2025",
        team: "Three members",
        description:
          "Put your prompt engineering skills to the ultimate test! In this thrilling event, participants get just 5 chances to craft the perfect prompts that guide ChatGPT to generate a specific target word. Unleash your creativity, sharpen your logic, and master the art of AI communication in this fun, interactive, and brain-teasing challenge.",
        image: img7, // Replace with your image path
        path: "/events/chatgpt-pulse",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "chatgpt-pulse",
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
        id: 11,
        title: "OLPC",
        description:
          "In the realm of online programming contests, OLPC stands as a high-stakes battleground where swift minds race against the digital clock, tackling intricate challenges woven with complexities in data structures and algorithms.",
        image: img1, // Replace with your image path
        path: "/events/olpc",
        to: "olpc",
      },
      
      {
        id: 12,
        title: "LIGHTS, CAMERA, REEL!",
        description:
          "Unleash your creativity and showcase your talent in this ultimate reels competition! Whether it’s dance, drama, comedy, or art—hit record, shine bright, and make your moment go viral! ",
        image: img1, // Replace with your image path
        path: "/events/lights-camera-reel",
        to: "lights-camera-reel",
      },
      {
        id: 13,
        title: "WAR OF THE RACKETS ",
        description:
          "War of the Rackets is a thrilling badminton showdown where skill meets strategy in separate tournaments for only girls! Compete in fast-paced matches to showcase your agility and precision, and aim for the top spot on the podium. Join us for an exhilarating event where every smash counts and champions are made!",
        image: img1, // Replace with your image path
        path: "/events/war-of-the-rackets",
        to: "war-of-the-rackets",
      },
      {
        id: 14,
        title: "Grand Cricket League (GCL)",
        description:
          "Unleash your creativity and showcase your talent in this ultimate reels competition! Whether it’s dance, drama, comedy, or art—hit record, shine bright, and make your moment go viral! ",
        image: img1, // Replace with your image path
        path: "/events/gcl",
        to: "gcl",
      },
    
    ],
    path: "/events/technical-events", // Path to the event page
  },
];
