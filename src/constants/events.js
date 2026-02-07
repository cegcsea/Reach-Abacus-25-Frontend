import img1 from "../assets/images/techevent.png";
import img2 from "../assets/images/nontech.png"; // Example images
import img3 from "../assets/images/preevnt.png";
import algob from "../assets/Events/algob.png";
import bit from "../assets/Events/bit.png";
import bm from "../assets/Events/bm.png";
import click from "../assets/Events/click.png";
import cric from "../assets/Events/cric.png";
import dbg from "../assets/Events/dbg.png";
import fb from "../assets/Events/fb.png";
import ipl from "../assets/Events/ipl.png";
import th from "../assets/Events/th.png";
import rand1 from "../assets/Events/rand1.png";
import rand2 from "../assets/Events/rand2.png";
import rand3 from "../assets/Events/rand3.png";
import rand4 from "../assets/Events/rand4.png";
import rand5 from "../assets/Events/rand5.png";
import money from "../assets/Events/money.png";
// Contacts for the EventPage

export const EventContacts = [
  {
    id: 1,
    name: "Hariharan",
    phone: "+91 7708 462 392",
  },
  { id: 2, name: "Ishwarya", phone: "+91 93452 14813" },
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
          "It's a fast-paced programming contest, where innovative minds come together to resolve challenges in the most complicated coding questions, involving data structures and algorithms, dbms, oops.",
        image: rand1, // Replace with your image path
        path: "/events/ospc",
        Qr: true,
        team: "1-2 members",
        Date: "20 February 2026",
        prize: "Rs 5k",
        to: "ospc",
        rounds: [
          {
            title: "Round 1 – Quiz Challenge",
            content:
              "Test your mettle in a quiz spanning core Computer Science domains:DSA, OOPs and General Problem Solving. Showcase your expertise to advance!",

            duration: "45 minutes",
            time: "09:00 AM to 12:30 PM",
          },
          {
            title: "Round 2 – Coding Challenge",
            content: `Solve 4 to 5 coding problems on an online coding platform. Problems range from easy to hard, testing logic, efficiency,and speed. Points awarded based on correctness and time taken.`,
            time: "01:30 PM to 03:00 PM",
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
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
        intern: [],
      },
      {
        id: 2,
        title: "GET SET GO",
        description:
          "Designed especially for first-year students, this event is the ultimate kickstart to their coding journey! Dive into the fundamentals of logical reasoning, arithmetic, and programming through interactive challenges that are both fun and beginner-friendly. Get ready to think, solve, and code your way to success!",
        image: rand3,
        path: "/events/byte-begin",
        team: "2-3 members",
        Date: "19 February 2026",
        prize: "Rs 5k",
        to: "byte-begin",
        rounds: [
          {
            title: "Round 1 – MCQ Preliminary Round",
            content:
              "This round is a screening-based MCQ test designed to evaluate first-year students’ core technical knowledge, logical reasoning, and problem-solving speed. This round shortlists teams for the next stage of the event.",
            duration: "30 minutes",
            time: "10:00 AM to 1:00 PM",
             venue: "RUSA Gallery",
          },
          {
            title: "Round 2 – GET SET CODE",
            content:
              "This round is a time-bound coding challenge designed to test participants’ programming skills, logical thinking, and teamwork. Teams must solve programming problems from different difficulty levels within the given time using a test-case-based evaluation method.",
            time: "02:00 PM to 05:00 PM",
             venue: "Third Floor Lab",
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
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
        intern: [],
      },
      {
        id: 3,
        title: "ML ESCAPE ROOM",
        description:
          "ML Escape Room is a gamified Machine Learning event where participants must solve ML-based puzzles to “escape” from a virtual room. Each puzzle represents a core ML concept. Solving one unlocks the next.",
        image: rand2, // Replace with your image path
        path: "/events/brainwave.ml",
        team: "3 members",
        Date: "21 February 2026",
        prize: "Rs 5k",
        to: "brainwave.ml",
        rounds: [
          {
            title: "Round 1 - Algorithm Lock",
            content:
              "Identify the correct ML algorithm for given real-world problems to unlock clues. Each team is given a problem card, several algorithm options, and a lock code sheet. Teams read the problem, decide which algorithm correctly solves it, and write down the corresponding algorithm code word. When the choice is correct, they earn a digit or letter that contributes to the final escape code.",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - Metric Maze",
            content:
              "Escape by solving evaluation and performance traps. Teams use confusion matrices, model performance reports, and ROC curve sketches to evaluate their models and make decisions. The challenge is won either by the first team to successfully escape or by the team that accumulates the highest number of correct answers within the allotted time.",
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
        title: "Algobazzar",
        description:
          "ALGOBAZAAR is a fun coding event that mixes problem-solving with strategy. Participants will first prove their coding knowledge and then use their earned coins to buy algorithms in an auction. They must use those algorithms to solve given challenges. It’s a test of coding skill, logic, and smart planning ",
        image: algob, // Replace with your image path
        path: "/events/ctrl+escape",
        team: "2-3 members",
        Date: "21st February 2025",
        prize: "Rs 7k",
        to: "ctrl+escape",
        rounds: [
          {
            title: "Single Round",
            content:
              "A theme such as Arrays or Linked Lists is announced along with a small hint about the upcoming problem. Teams use their AlgoCoins to bid on and purchase algorithms displayed on the screen before the actual coding question is revealed. Once the question is shown, teams must solve it using only the algorithms they bought, in addition to a few basic algorithms available to everyone. Optionally, teams may trade one algorithm with another team after each round. Scoring is based on correctness (50%), time efficiency (25%), and how smartly the chosen algorithms are used (25%).",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          // {
          //   title: "Round 2",
          //   content:
          //     "Solve challenging programming questions based on DSA and algorithms",
          //   time: "01:30 PM to 03:00 PM",
          //   // venue: "Main Building Room No 238",
          // },
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
        title: "BYTE & BITE -- Think Fast. Snack Smart.",
        description:
          "Byte & Bite is a 2-round interactive tech quiz where participants earn snacks for correct answers.",
        image: bit, // Replace with your image path
        path: "/events/ready-set-hire",
        team: "Individual",
        Date: "21st February 2025",
        prize: "Rs 7k",
        to: "ready-set-hire",
        rounds: [
          {
            title: "Round 1 - Byte Round",
            content:
              "Questions shown on projector. Teams write answers on sheets / raise placards.",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - Bite Round",
            content:
              "This round focuses on situation-based questions and visual reasoning, using real-life technology scenarios. Teams work together to analyze the situations, interpret visual cues, and discuss their ideas before answering verbally.",
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
        id: 6,
        title: "Debug or Die",
        description:
          "This event challenges participants to analyze and debug      programs containing syntax, logical, and runtime errors within a limited time. It simulates real-world debugging scenarios, testing participants’ problem-solving ability, logical thinking, and coding proficiency. The event aims to enhance practical debugging skills commonly required in the software industry.",
        image: dbg, // Replace with your image path
        path: "/events/debug-or-die",
        team: "2 members",
        Date: "21st February 2026",
        prize: "Rs 5k",
        to: "debug-or-die",
        rounds: [
          {
            title: "Round 1 - Error Spotting ",
            content:
              "This round consists of multiple-choice questions based on output prediction and identifying errors in code snippets, with questions drawn from C, C++, and Java.",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - Glitch Snitch",
            content:
              "Participants are given one or two faulty programs containing possible syntax, logical, or runtime errors. Their task is to identify and debug these issues to produce the correct output within the given time limit.",
            time: "01:30 PM to 03:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Dinesh S",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Infancy P",
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
        id: 9,
        title: "Snap & Seek",
        time: "01:30 PM to 04:00 PM",
        Date: "20 February 2026",
        team: "2-3 members",
        description:
          "Teams of participants take part in an exciting campus exploration challenge where each team is given a photograph of a location within the campus. The task is to identify the place, reach it, and take a group selfie with the location clearly visible in the background. Once the selfie is submitted and verified through WhatsApp, the team receives the next location photograph. This process continues until the team completes 7–8 locations, and the team that finishes exploring all locations in the shortest time is declared the winner.",
        image: th, // Replace with your image path
        path: "/events/treasure-hunt",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "treasure-hunt",
        prize: "Rs 2.5k",
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
        id: 10,
        title: "IPL AUCTION",
        time: "01:30 PM to 04:00 PM",
        Date: "20 February 2025",
        team: "1-3 members",
        description:
          "IPL Auction gives you the ultimate chance to build your dream team! Strategize, bid smartly, and assemble a winning squad that can dominate the tournament. Choose wisely—every pick counts in this high-stakes game of skill and strategy!",
        image: ipl, // Replace with your image path
        path: "/events/ipl-auction",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "ipl-auction",
        prize: "Rs 2.5k",
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
      },
      {
        id: 11,
        title: "Money Heist",
        time: "01:30 PM to 04:00 PM",
        Date: "20 February 2025",
        team: "1-2 members",
        description:
          "On Round 1, the Blink Test, runs for 20–25 minutes and challenges participants’ observation and attention to detail by showing 10 slides or charts for five seconds each, containing a mix of shapes, words, numbers, colors, famous personalities, and random images. After all slides are shown, answer sheets are given with questions that test recall, such as counting specific objects or identifying details. On Round 2, Rewrite Recall, lasts 25–30 minutes and focuses on memory accuracy, where individual participants read a printed paragraph for one minute before it is collected, and then answer questions that subtly alter facts, numbers, names, or colors to see how well they remember the original content.",
        image: money, // Replace with your image path
        path: "/events/money-heist",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "money-heist",
        prize: "Rs 2k",
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
      },
      {
        id: 12,
        title: "CODE RED: The Final Countdown",
        time: "01:30 PM to 04:00 PM",
        Date: "20 February 2025",
        team: "Individual",
        description:
          "CODE RED: The Final Countdown is a fast-paced escape room challenge conducted inside a laboratory setting. All participating teams enter the room at the same time and are given a sequence of story-linked puzzles. Each puzzle unlocks the next stage of the mission. Teams must analyze clues, solve puzzles, and record their answers on paper within the given time limit.",
        image: rand4, // Replace with your image path
        path: "/events/code-red",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "code-red",
        prize: "Rs 3.5k",
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
    // Add more events
    path: "/events/non-technical-events", // Path to the event page
  },
  {
    title: "Pre Events",
    image: img3, // Event image
    event: [
      {
        id: 14,
        title: "ByteBattle",
        description:
          "A one-round online coding challenge conducted on HackerRank, where participants solve algorithmic and logical problems within a fixed time limit. The contest focuses on problem-solving skills, code efficiency, and accuracy. Rankings are based on test case completion and execution performance.",
        image: rand5, // Replace with your image path
        Date: "20 February 2026",
        team: "Individual",
        prize: "Rs 5k",
        path: "/events/olpc",
        to: "olpc",
        contact: [
          {
            id: 1,
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
      },

      {
        id: 15,
        title: "Clickify",
        description:
          "This photography contest provides participants an opportunity to showcase their creativity and photography skills based on a given theme. Participants submit a theme-based photograph, which will be posted on the official symposium Instagram handle. The winner will be selected based on the highest number of genuine Instagram likes, encouraging fair and ethical social media engagement.",
        image: click, // Replace with your image path
        Date: "20 February 2026",
        team: "Individual",
        prize: "Rs 5k",
        path: "/events/lights-camera-reel",
        to: "lights-camera-reel",
        contact: [
          {
            id: 1,
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
      },
      {
        id: 16,
        title: "Smash Sprint",
        description:
          "A fast-paced badminton tournament testing agility, precision, and endurance. Matches will be conducted in knockout format with singles and/or doubles categories.",
        image: bm, // Replace with your image path
        Date: "20 February 2026",
        team: "Individual",
        prize: "Rs 5k",
        path: "/events/war-of-the-rackets",
        to: "war-of-the-rackets",
        contact: [
          {
            id: 1,
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
      },
      {
        id: 17,
        title: "Abacus Premier League",
        description:
          "A short-format cricket tournament designed for high-energy gameplay and quick decision-making. Matches will follow limited overs with knockout rounds",
        image: cric, // Replace with your image path
        Date: "20 February 2026",
        team: "6–8 players per team",
        prize: "Rs 5k",
        path: "/events/gcl",
        to: "gcl",
        contact: [
          {
            id: 1,
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
      },
      {
        id: 18,
        title: "AU Campus Football League",
        description:
          "Lace up your boots and get ready for an electrifying intra-departmental football showdown! Form your dream team, showcase your dribbling, passing, and scoring skills, and battle your way to glory in this fast-paced tournament of teamwork, strategy, and passion for the game!",
        image: fb, // Replace with your image path
        Date: "20 February 2026",
        team: "5–7 players per team",
        prize: "Rs 5k",
        path: "/events/au-campus-football-league",
        to: "au-campus-football-league",
        contact: [
          {
            id: 1,
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
];
