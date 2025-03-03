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
          "Get ready for a high-intensity programming contest where sharp minds compete to crack the toughest coding challenges! Tackle complex problems involving data structures and algorithms, and showcase your speed, skill, and innovation in this high-stakes battle of logic and code!",
        image: img4, // Replace with your image path
        path: "/events/ospc",
        Qr: true,

        team: "Two or three members",
        Date: "21st March 2025",
        prize: "Rs 7k",
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
            name: "Sreenithika S",
            phone: "99650 65777",
          },
          {
            id: 2,
            name: "Infancy P",
            phone: "90473 66527",
          },
        ],
        intern: [],
      },
      {
        id: 2,
        title: "BYTE BEGIN",
        description:
          "Designed especially for first-year students, this event is the ultimate kickstart to their coding journey! Dive into the fundamentals of logical reasoning, arithmetic, and programming through interactive challenges that are both fun and beginner-friendly. Get ready to think, solve, and code your way to success!",
        image: img5,
        path: "/events/byte-begin",

        team: "One or two members",
        Date: "21st February 2025",
        prize: "Rs 7k",
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
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Ajai Krishna T.S",
            phone: "70107 07652",
          },
        ],
        intern: [],
      },
      {
        id: 3,
        title: "BRAINWAVE.ML",
        description:
          "Dive into the world of machine learning in this thrilling event! Test your knowledge, solve challenges, and showcase your skills by developing innovative solutions to given problems. Compete with the best and prove your expertise in ML!",
        image: img6, // Replace with your image path
        path: "/events/brainwave.ml",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 5k",
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
            name: "Sahana S",
            phone: "74182 47031",
          },
          {
            id: 2,
            name: "Harini S",
            phone: "93633 49994",
          },
        ],
      },

      {
        id: 4,
        title: "CTRL+ESCAPE",
        description:
          "Ctrl+Escape is a dynamic fusion of a tech quiz and coding challenges, designed to test both your knowledge and programming skills! Solve intriguing quiz questions to unlock coding tasks, where logic and speed are key. Get ready for an electrifying battle of wit and code!",
        image: img6, // Replace with your image path
        path: "/events/ctrl+escape",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 7k",
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
            name: "Hariharan A",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Renjitha K",
            phone: "79078 54731",
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
          "Ready. Set. Hire! is your ultimate gateway to the real-world hiring experience! Dive into a competitive coding round, followed by a mock interview that mirrors actual recruitment challenges. Test your technical skills, sharpen your problem-solving abilities, and gain invaluable hands-on experience to ace future job interviews!",
        image: img6, // Replace with your image path
        path: "/events/ready-set-hire",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 7k",
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
            name: "Harini S",
            phone: "93633 49994",
          },
          {
            id: 2,
            name: "Infancy P",
            phone: "90473 66527",
          },
        ],
      },
      {
        id: 7,
        title: "GLITCH SNITCH",
        description:
          "Glitch Snitch is an exciting challenge that puts your debugging skills to the test! Hunt down and fix bugs in pre-written code, tackling real-world coding issues under time pressure. Sharpen your problem-solving abilities and level up your coding expertise in this fast-paced, brain-teasing event!",
        image: img6, // Replace with your image path
        path: "/events/glitch-snitch",
        team: "Two or three members",
        Date: "21st February 2025",
        prize: "Rs 5k",
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
            name: "Hariharan A",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Dinesh S",
            phone: "93603 80769",
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
          "OLPC is the ultimate arena for online programming contests, where sharp minds battle against the clock to solve intricate challenges packed with complex data structures and algorithms. Speed, precision, and problem-solving skills will determine who emerges victorious in this high-stakes digital showdown!",
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
          "War of the Rackets is an electrifying badminton showdown exclusively for girls! Battle it out in intense, fast-paced matches where agility, precision, and strategy take center stage. Smash your way to victory and claim your spot at the top in this ultimate test of skill and endurance!",
        image: img1, // Replace with your image path
        path: "/events/war-of-the-rackets",
        to: "war-of-the-rackets",
      },
      {
        id: 14,
        title: "Grand Cricket League (GCL)",
        description:
          "Grand Cricket League is the ultimate battle of skill, strategy, and endurance! Compete in high-energy matches where every run matters, every wicket counts, and teamwork paves the path to victory. Step onto the pitch, showcase your batting, bowling, and fielding prowess, and chase the glory of becoming the champions!",
        image: img1, // Replace with your image path
        path: "/events/gcl",
        to: "gcl",
      },
      {
        id: 15,
        title: "CSEA SUPER LEAGUE (CSL) - Kick, Pass, Goal!",
        description:
          "Lace up your boots and get ready for an electrifying intra-departmental football showdown! Form your dream team, showcase your dribbling, passing, and scoring skills, and battle your way to glory in this fast-paced tournament of teamwork, strategy, and passion for the game!",
        image: img1, // Replace with your image path
        path: "/events/gcl",
        to: "gcl",
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
];
