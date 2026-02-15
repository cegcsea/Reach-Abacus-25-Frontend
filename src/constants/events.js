import img1 from "../assets/images/techevent.png";
import img2 from "../assets/images/nontech.png"; // Example images
import img3 from "../assets/images/preevnt.png";
import zt from "../assets/Events/zt.png";
import black from "../assets/Events/black.png";
import mcu from "../assets/Events/mcu.png";
import neo from "../assets/Events/neo.png";
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
import recruit from "../assets/Events/recruit.png";
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
        Date: "20 February 2026 and 21 February 2026",
        prize: "Rs 7k",
        to: "ospc",
        rounds: [
          {
            title: "Round 1 – Quiz Challenge",
            content:
              "Test your mettle in a quiz spanning core Computer Science domains:DSA, OOPs and General Problem Solving. Showcase your expertise to advance!",

            duration: "45 minutes",
            time: "20 February 2026, 09:30 AM to 12:30 PM",
            venue: "RUSA Gallery",
          },
          {
            title: "Round 2 – Coding Challenge",
            content:
              "Solve 4 to 5 coding problems on an online coding platform. Problems range from easy to hard, testing logic, efficiency,and speed. Points awarded based on correctness and time taken.",
            time: "21 February 2026, 09:30 AM to 12:30 PM",
            venue: "GFL (Ground Floor Lab, DCSE)",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Dhanush",
            phone: "81248 68540",
          },
          {
            id: 2,
            name: "Harisangar",
            phone: "9952878399",
          },
        ],
        intern: [],
      },
      {
        id: 2,
        title: "GET SET GO",
        description:
          "A first-year focused event with an MCQ screening test that evaluates core technical knowledge, logical reasoning, and problem-solving speed. Shortlisted teams advance to the coding challenge.",
        image: rand3,
        path: "/events/get-set-go",
        team: "2-3 members",
        Date: "19 February 2026",
        prize: "Rs 7k",
        to: "get-set-go",
        rounds: [
          {
            title: "Round 1 – MCQ Preliminary Round",
            content:
              "This round is a screening-based MCQ test designed to evaluate first-year students’ core technical knowledge, logical reasoning, and problem-solving speed. This round shortlists teams for the next stage of the event.",
            duration: "30 minutes",
            time: "19 February 2026, 10:00 AM to 01:00 PM",
            venue: "RUSA Gallery",
          },
          {
            title: "Round 2 – GET SET CODE",
            content:
              "This round is a time-bound coding challenge designed to test participants’ programming skills, logical thinking, and teamwork. Teams must solve programming problems from different difficulty levels within the given time using a test-case-based evaluation method.",
            time: "19 February 2026, 02:00 PM to 05:00 PM",
            venue: "TFL (Third Floor Lab, DCSE)",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Sarveshwar",
            phone: "8939733220",
          },
          {
            id: 2,
            name: "Renjitha",
            phone: "7907854731",
          },
        ],
        intern: [],
      },
      {
        id: 3,
        title: "Predictrix: ML Edition",
        description:
          "Predictrix – ML Edition is a two-round competitive event designed to evaluate participants' analytical thinking, problem-solving skills, and hands-on machine learning knowledge. The event progresses from concept-based challenges to real-world data-driven problem solving.",
        image: rand2, // Replace with your image path
        path: "/events/predictrix-ml",
        team: "2-3 members",
        Date: "19 February 2026",
        prize: "Rs 5k",
        to: "predictrix-ml",
        rounds: [
          {
            title: "Round 1 - Concept Challenge",
            content:
              "Participants must answer 25 questions within 45 minutes. All questions carry equal marks. The round includes a special section titled Add-on Questions: these do not carry marks and are not considered for evaluation. However, solving these questions is highly recommended, as they provide important clues and context for Round 2. Teams that attempt and solve add-on questions will gain an advantage in the next round. Top-performing teams qualify for Round 2.",
            duration: "45 minutes",
            time: "19 February 2026, 10:00 AM to 01:00 PM",
            venue: "KP-210,211",
          },
          {
            title: "Round 2 - Analysis & Coding Challenge",
            content:
              "This round consists of two parts. Part 1: Analysis & Reasoning (30 minutes, 10 marks) - Contains 2 questions, each carrying 5 marks. Participants will be provided with problem statements and code snippets. Teams must analyze, interpret, and explain the given scenarios. Teams that completed add-on questions in Round 1 are eligible for up to 3 clues for Question 1. Part 2: Coding Challenge (1 hour, 15 marks) - Participants will be provided with a dataset. Teams must apply machine learning concepts to analyze the dataset, build appropriate models, and derive meaningful results.",
            duration: "1 hour 30 minutes",
            time: "19 February 2026, 02:00 PM to 05:00 PM",
            venue: "SFL (Second Floor Lab, DCSE)",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Pradeep",
            phone: "7904137572",
          },
          {
            id: 2,
            name: "Sahana",
            phone: "74182 47031",
          },
        ],
      },

      {
        id: 4,
        title: "Algobazzar",
        description:
          "ALGOBAZAAR is an innovative and engaging algorithm-based competition that combines strategic bidding, logical reasoning, and problem-solving skills. Instead of traditional coding, participants focus on analyzing problems and selecting the most appropriate algorithms to solve them, making the event both intellectually stimulating and highly strategic.",
        image: algob, // Replace with your image path
        path: "/events/algobazzar",
        team: "2 members",
        Date: "19 February 2026",
        prize: "Rs 5k",
        to: "algobazzar",
        rounds: [
          {
            title: "Round 1 – Algorithm Aptitude Round",
            content:
              "Participants will answer Multiple Choice Questions (MCQs) on algorithms and short logical questions based on algorithm concepts. This round tests participants' fundamental understanding of algorithms and logical reasoning.",
            duration: "2-3 hours",
            time: "19 February 2026, 02:00 PM to 05:00 PM",
            venue: "R1",
          },
          {
            title: "Round 2 – Algorithm Auction",
            content:
              "Teams will be given a virtual budget to participate in a live auction. They will bid for algorithm modules related to different themes such as Arrays, Stacks & Queues, Searching, and Sorting. For each theme, teams can only use the algorithms they have purchased and must select the most suitable algorithm for the given problem statements. No coding is involved - only logical analysis and correct algorithm selection. Evaluation based on correctness of algorithm selection, strategic bidding decisions, efficient use of limited resources, and speed and accuracy of responses.",
            duration: "1.5 hours",
            time: "20 February 2026, 02:00 PM to 05:00 PM",
            venue: "Turing Hall",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Kiruthiga",
            phone: "88704 13188",
          },
          {
            id: 2,
            name: "Sahana",
            phone: "74182 47031",
          },
        ],
      },
      {
        id: 5,
        title: "Code Catalyst",
        badge: "Girls Only",
        description:
          "CodeCatalyst (Girls Only) is a 2-round tech challenge designed to test participants' knowledge, logical thinking, and problem-solving skills. Open to all departments, this event encourages creativity and innovation without relying on external resources.",
        image: bit, // Replace with your image path
        path: "/events/code-catalyst",
        team: "2 members",
        Date: "20 February 2026",
        prize: "Rs 7k",
        to: "code-catalyst",
        rounds: [
          {
            title: "Round 1 - Logic Sprint (Qualifier)",
            content:
              "Multiple Choice Questions (MCQs) displayed on a projector. Teams write answers on sheets or raise placards. Topics covered include programming fundamentals, data structures & algorithms, computer networks & databases, logical reasoning, and Internet & AI basics. Top teams with the highest scores advance to Round 2.",
            duration: "25-30 minutes",
            time: "20 February 2026, 09:30 AM to 12:30 PM",
            venue: "KP-210,211",
          },
          {
            title: "Round 2 - Innovation Arena (Ideathon)",
            content:
              "Each team selects a domain from the given list and a problem statement. Teams prepare a solution and present it via a PowerPoint. Internet usage is not allowed; ideas must come from participants' own knowledge. Teams present and defend their solutions verbally. Evaluation based on creativity and innovation, feasibility and practicality of the solution, and clarity of presentation.",
            duration: "30-40 minutes",
            time: "20 February 2026, 02:00 PM to 05:00 PM",
            venue: "SFL (Second Floor Lab, DCSE)",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Varsha",
            phone: "8056246330",
          },
          {
            id: 2,
            name: "Renjitha",
            phone: "7907854731",
          },
        ],
      },
      {
        id: 6,
        title: "Bug Busters",
        description:
          "This event challenges participants to analyze and debug programs containing syntax, logical, and runtime errors within a limited time. It simulates real-world debugging scenarios, testing participants’ problem-solving ability, logical thinking, and coding proficiency. The event aims to enhance practical debugging skills commonly required in the software industry.",
        image: dbg, // Replace with your image path
        path: "/events/bug-busters",
        team: "2 members",
        Date: "21 February 2026",
        prize: "Rs 5k",
        to: "bug-busters",
        rounds: [
          {
            title: "Round 1 - Error Spotting ",
            content:
              "This round consists of multiple-choice questions based on output prediction and identifying errors in code snippets, with questions drawn from C, C++, and Java.",
            duration: "30 minutes",
            time: "21 February 2026, 09:30 AM to 12:30 PM",
            venue: "R1",
          },
          {
            title: "Round 2 - Glitch Snitch",
            content:
              "Participants are given one or two faulty programs containing possible syntax, logical, or runtime errors. Their task is to identify and debug these issues to produce the correct output within the given time limit.",
            duration: "30-40 minutes",
            time: "21 February 2026, 02:00 PM to 05:00 PM",
            venue: "GFL (Ground Floor Lab, DCSE)",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Balaji",
            phone: "8220706643",
          },
          {
            id: 2,
            name: "Kiruthiga",
            phone: "88704 13188",
          },
        ],
      },
      {
        id: 7,
        title: "Zero Trace",
        description:
          "Zero Trace is a DBMS-oriented forensic challenge where participants investigate a high-profile casino database heist by untangling corrupted logs, tracking transactions, and uncovering hidden inconsistencies using pure database logic.",
        image: zt,
        path: "/events/zero-trace",
        team: "2–3 members",
        Date: "20 February 2026",
        prize: "Rs 6k",
        to: "zero-trace",
        rounds: [
          {
            title: "Round 1 – The Heist",
            content:
              "Participants are trapped inside a corrupted casino database. By analyzing transaction logs, rollbacks, deadlocks, and pending states, teams must extract three digital keys using accurate DBMS logic. Precision is critical; one wrong assumption breaks the vault code.",
            time: "20 February 2026, 09:30 AM to 12:30 PM",
            venue: "GFL (Ground Floor Lab, DCSE)",
          },
          {
            title: "Round 2 – Silent Sabotage",
            content:
              "Participants investigate a subtly sabotaged database. Without being told what to search for, teams must rely on system understanding and complex SQL queries to identify what is missing or altered and prove insider tampering.",
            time: "20 February 2026, 02:00 PM to 05:00 PM",
            venue: "GFL (Ground Floor Lab, DCSE)",
          },
        ],
        contact: [
          { id: 1, name: "Neelakandan", phone: "79042 42787" },
          { id: 1, name: "Anagha", phone: "88257 89933" },
        ],
      },
      {
        id: 8,
        title: "Blackout",
        description:
          "Blackout is a two-round technical challenge that evaluates participants’ debugging, system analysis, teamwork, and web development skills. Teams first uncover bugs in a broken system and then collaboratively rebuild a failing application under pressure.",
        image: black,
        path: "/events/blackout",
        team: "2 members",
        Date: "19 February 2026",
        prize: "Rs 6k",
        to: "blackout",
        rounds: [
          {
            title: "Round 1 – Bug Hunt",
            content:
              "Teams explore a pre-built web application seeded with UI, logic, navigation, and authentication bugs. Without source code access, participants must identify, reproduce, and document defects accurately.",
            duration: "45 minutes",
            time: "19 February 2026, 10:00 AM to 01:00 PM",
            venue: "SFL (Second Floor Lab, DCSE)",
          },
          {
            title: "Round 2 – Collaborative Build Challenge",
            content:
              "Teams split into Builder and Thinker roles. While one prepares the UI and frontend, the other unlocks system features by solving web-based technical challenges. Each solved challenge activates new functionality, gradually restoring the application.",
            duration: "90–120 minutes",
            time: "19 February 2026, 02:00 PM to 05:00 PM",
            venue: "SFL (Second Floor Lab, DCSE)",
          },
        ],
        contact: [
          { id: 1, name: "Abharna Shree", phone: "73053 03307" },
          { id: 2, name: "Deivaraja", phone: "99940 93874" },
        ],
      },
      {
        id: 19,
        title: "Neonova – Ideathon",
        description:
          "Neonova is a two-round ideathon where participants brainstorm and present impactful solutions to real-world problems across multiple domains, emphasizing creativity, feasibility, and clarity of communication.",
        image: neo,
        path: "/events/neonova",
        team: "2–4 members",
        Date: "20 February 2026",
        prize: "Rs 6k",
        to: "neonova",
        rounds: [
          {
            title: "Round 1 – Domain Ideation",
            content:
              "Teams select a problem statement from predefined domains such as Healthcare, Cyber Security, Responsible AI, and Sustainability, and prepare a structured presentation evaluated on originality, impact, and feasibility.",
            time: "20 February 2026, 09:30 AM - 12:30 PM",
            venue: "Temenos Lab",
          },
          {
            title: "Round 2 – On-Spot Ideation",
            content:
              "Teams randomly draw problem statements and are given two hours to design and present a solution under supervision. Originality and independent thinking are strongly emphasized.",
            time: "20 February 2026, 02:00 PM - 05:00 PM",
            venue: "Temenos Lab",
          },
        ],
        contact: [
          { id: 1, name: "Abhishek", phone: "63835 29839 " },
          { id: 2, name: "Abhinav", phone: "99402 19278" },
        ],
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
  {
    title: "Non Technical Events",
    image: img2, // Event image,
    Date: "20 February 2026",

    event: [
      {
        id: 9,
        title: "Campus Quest",
        Date: "19 February 2026",
        team: "3 members",
        description:
          "Teams of 3 participants will take part in an exciting campus exploration challenge. Each team will be given a map to reach the treasure. The task is to identify the place, reach it, and take a group selfie with the location clearly visible in the background. After taking a selfie on each location, upload it on the google form. This process continues until the team successfully completes 6 to 7 locations. The team that explores all locations in the shortest time will be declared the winner.",
        image: th, // Replace with your image path
        path: "/events/campus-quest",
        rules: `• Register at CSE Department registration desk to receive starting materials
              • Each team receives a photograph of a campus location
              • Teams must identify the location, reach it, and take a group selfie
              • Selfies must clearly show the location and all team members
              • Upload selfie via provided Google Form to receive next location
              • Complete 6-7 locations total
              • Winner determined by shortest completion time
              • All team members must stay together throughout the quest`,
        to: "campus-quest",
        prize: "Rs 3k",
        time: "19 February 2026, 10:00 AM onwards",
        venue: "Campus-wide (Registration: CSE Department)",
        contact: [
          {
            id: 1,
            name: "Dhanush",
            phone: "81248 68540",
          },
          {
            id: 2,
            name: "Renjitha",
            phone: "7907854731",
          },
        ],
      },
      {
        id: 10,
        title: "IPL AUCTION",
        Date: "21 February 2026",
        team: "3-4 members per team",
        description:
          "IPL Auction is a thrilling team-based event that simulates the real IPL auction experience. Participants act as franchise owners and bid for players using a fixed virtual budget to build their dream team. Teams must plan smart bidding strategies, balance star players with budget constraints, and form a well-balanced squad. The team with the most effective combination of players and strategy wins.",
        image: ipl, // Replace with your image path
        path: "/events/ipl-auction",
        rules: `Teams act as franchise owners and use a fixed virtual budget to bid for players. No external help is allowed during bidding. Final results are based on team strength, budget usage, and overall auction strategy.`,
        to: "ipl-auction",
        prize: "Rs 2.5k",
        rounds: [
          {
            title: "Round 1 - Qualifier Quiz Round",
            content:
              "Teams will participate in a short cricket-based quiz consisting of MCQs related to IPL history, players, teams, records, and rules. Based on the scores, top teams will qualify for the final auction round.",
            time: "21 February 2026, 09:30 AM to 12:30 PM",
            venue: "Turing Hall",
          },
          {
            title: "Round 2 - Live IPL Auction Round",
            content:
              "Qualified teams will receive a fixed virtual budget to participate in a live player auction. Teams will bid for players to build their squad. Strategic planning, budget management, and team balance will play a key role. The final winner will be decided based on team strength, budget usage, and overall auction strategy.",
            time: "21 February 2026, 02:00 PM to 05:00 PM",
            venue: "R1",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Hariharan",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Harisangar",
            phone: "9952878399",
          },
        ],
      },
      {
        id: 11,
        title: "Memory Heist",
        Date: "20 February 2026",
        team: "2 members",
        description:
          "Memory Heist is an interactive, multi-round game designed to test participants' observation, attention, and recall abilities. Open to all departments, the event challenges your cognitive skills through a series of fun and engaging rounds inspired by movies, patterns, and logic. Teams will compete to prove their sharp memory and quick thinking.",
        image: money, // Replace with your image path
        path: "/events/memory-heist",
        rules: `Participants must follow on-screen timings strictly during The Blink Test and are not allowed to take notes or photos while slides are shown. In Rewrite Recall, answers must be based only on memory; discussion with other teams or use of external material is not allowed.`,
        to: "memory-heist",
        prize: "Rs 2.5k",
        rounds: [
          {
            title: "Round 1: Rapid Recall (Qualifier)",
            content:
              "Observation-based challenge where participants view a sequence of images, objects, or short clips on a projector. Teams present answers quickly and accurately to earn points. Top teams advance to Round 2.",
            time: "20 February 2026, 09:30 AM to 12:30 PM",
            venue: "R1",
          },
          {
            title: "Round 2: Cine-Mind Challenge (Final)",
            content:
              "Memory & pattern recognition challenge where teams solve a series of tasks involving movies, dialogues, characters, or visual patterns. Tasks include matching, sequencing, and identifying hidden details. Teams present answers quickly and accurately to earn points.",
            time: "20 February 2026, 02:00 PM to 05:00 PM",
            venue: "R1",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Varsha",
            phone: "8056246330",
          },
          {
            id: 2,
            name: "Kiruthiga",
            phone: "88704 13188",
          },
        ],
      },
      {
        id: 12,
        title: "THE LANGTON PARADOX",
        Date: "21 February 2026",
        team: "3 to 4 members per team",
        description:
          "The Secret of Langton Manor is an escape room game. Like all escape room games, you will need to solve a series of puzzles for a certain time. The story is set in a mysterious old mansion, and players must work together to explore the rooms, find hidden objects, and decode cryptic messages. All participating teams enter the room at the same time and are given a sequence of story-linked puzzles. Each puzzle unlocks the next stage of the mission. Teams must analyze clues, solve puzzles, and record their answers on paper within the given time limit. The team that successfully solves all puzzles accurately in the shortest time will be declared the winner. The game tests logical thinking, teamwork, time management, and problem-solving skills under pressure.",
        image: rand4, // Replace with your image path
        path: "/events/the-langton-paradox",
        rules: `Mobiles and personal devices are not allowed inside the escape room. Teams must use only the props and clues provided, and must record answers on paper. Time and points are tracked by volunteers; hints may carry penalties. Winners are decided based on total points and time taken.`,
        to: "the-langton-paradox",
        prize: "Rs 2.5k",
        rounds: [
          {
            title: "Escape Room Challenge",
            content:
              "All participating teams enter the room at the same time and are given a sequence of story-linked puzzles. Each puzzle unlocks the next stage of the mission. Teams must analyze clues, solve puzzles, and record their answers on paper within the given time limit.",
            time: "21 February 2026, 02:00 PM to 05:00 PM",
            venue: "R2",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Sarveshwar",
            phone: "8939733220",
          },
          {
            id: 2,
            name: "Sahana",
            phone: "74182 47031",
          },
        ],
      },
      {
        id: 13,
        title: "MCU vs DC Quiz",
        Date: "19 February 2026",
        team: "1–4 members",
        description:
          "An ultimate fandom showdown between Marvel and DC. This quiz spans decades of comic lore, cinematic universes, iconic heroes, villains, timelines, and legendary story arcs.",
        image: mcu,
        path: "/events/mcu-vs-dc",
        to: "mcu-vs-dc",
        prize: "Rs 3k",
        rounds: [
          {
            title: "Round 1 – Written Quiz",
            content:
              "A fast-paced written round testing knowledge across comics, movies, characters, powers, teams, gadgets, and historic moments. Top 6 teams qualify.",
            time: "19 February 2026, 10:00 AM to 01:00 PM",
            venue: "Turing Hall",
          },
          {
            title: "Round 2 – Pounce & Bounce",
            content:
              "An interactive round featuring visual identification, audio clues, interconnected hints, and rapid-fire questions demanding speed and precision.",
            time: "19 February 2026, 02:00 PM to 05:00 PM",
            venue: "Turing Hall",
          },
        ],
        contact: [
          { id: 1, name: "Jaison", phone: "90256 01119" },
          { id: 2, name: "Visvam", phone: "63850 50355" },
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
        title: "OLPC",
        description:
          "A one-round online coding challenge conducted on HackerRank, where participants solve algorithmic and logical problems within a fixed time limit. The contest focuses on problem-solving skills, code efficiency, and accuracy. Rankings are based on test case completion and execution performance.",
        image: rand5, // Replace with your image path
        Date: "15 February 2026, 5:00 PM",
        team: "Individual",
        prize: "Rs 4k",
        mode: "Online",
        formLink: "https://forms.gle/yW2LTQwoABK9Yhq69",
        path: "/events/olpc",
        to: "olpc",
        contact: [
          {
            id: 1,
            name: "Renjitha",
            phone: "7907854731",
          },
          {
            id: 2,
            name: "Pradeep",
            phone: "7904137572",
          },
        ],
      },

      {
        id: 15,
        title: "CLICKIFY",
        description:
          "Theme: Campus through my lens. This photography contest provides participants an opportunity to showcase their creativity and photography skills based on a given theme. Participants submit a theme-based photograph, which will be posted on the official symposium Instagram handle. The winner will be selected based on the highest number of genuine Instagram likes, encouraging fair and ethical social media engagement.",
        image: click, // Replace with your image path
        Date: "9 February 2026 - 15 February 2026",
        team: "Individual",
        prize: "Rs 1.5k",
        mode: "Online",
        formLink: "https://forms.gle/KjP8uFaraAs1ej219",
        path: "/events/clickify",
        to: "clickify",
        contact: [
          {
            id: 1,
            name: "Kiruthiga",
            phone: "88704 13188",
          },
          {
            id: 2,
            name: "Balaji",
            phone: "8220706643",
          },
        ],
      },
      {
        id: 16,
        title: "RALLY ROYALE",
        description:
          "A fast-paced badminton tournament testing agility, precision, and endurance. Matches will be conducted in knockout format with singles and/or doubles categories.",
        image: bm, // Replace with your image path
        Date: "10 February 2026, 4:00 PM onwards",
        team: "1 (Singles)",
        prize: "Rs 3k",
        venue: "Badminton Court, Main Gallery",
        formLink: "https://forms.gle/iWSSwwpN4AyESWwB8",
        path: "/events/rally-royale",
        to: "rally-royale",
        contact: [
          {
            id: 1,
            name: "Renjitha",
            phone: "7907854731",
          },
          {
            id: 2,
            name: "Sahana",
            phone: "74182 47031",
          },
        ],
      },
      {
        id: 17,
        title: "BOUNDARY BASH",
        description:
          "A short-format cricket tournament designed for high-energy gameplay and quick decision-making. Matches will follow limited overs with knockout rounds",
        image: cric, // Replace with your image path
        Date: "9 February 2026 onwards",
        team: "11 players per team",
        prize: "Rs 2k",
        venue: "Ground",
        formLink: "https://forms.gle/8HWbae1NivD33Pd18",
        path: "/events/boundary-bash",
        to: "boundary-bash",
        contact: [
          {
            id: 1,
            name: "Harisangar",
            phone: "9952878399",
          },
          {
            id: 2,
            name: "Dhanush",
            phone: "81248 68540",
          },
        ],
      },
      {
        id: 18,
        title: "KICKOFF FIESTA",
        description:
          "An intense football tournament emphasizing teamwork, strategy, and stamina. Matches will be conducted in knockout or league format based on participation.",
        image: fb, // Replace with your image path
        Date: "12 February 2026 onwards",
        team: "5–7 players per team",
        prize: "Rs 2k",
        venue: "Main Ground",
        formLink: "https://forms.gle/pvuT5e6sRvecakrQ8",
        path: "/events/kickoff-fiesta",
        to: "kickoff-fiesta",
        contact: [
          {
            id: 1,
            name: "Harisangar",
            phone: "9952878399",
          },
          {
            id: 2,
            name: "Balaji",
            phone: "8220706643",
          },
          {
            id: 3,
            name: "Pradeep",
            phone: "7904137572",
          },
        ],
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
  {
    title: "Recruitment Event",
    image: recruit,
    badge: "Get Placed",
    event: [
      {
        id: 20,
        title: "Sprint Zero",
        subtitle: "Inside the Industry Coding & Product Mindset",
        description:
          "An exclusive opportunity to kickstart your career with Congruent Solutions - a leading technology recruitment partner. This two-round hiring process is designed to identify top talent through a rigorous online assessment followed by an intensive offline technical evaluation. Selected candidates may receive direct placement opportunities with competitive packages and real-world project exposure.",
        image: recruit,
        path: "/events/recruitment-drive",
        team: "Individual",
        Date: "Round 1: 16 February 2026, 7:30 PM (Online) | Round 2: 19 February 2026, 11:00 AM - 5:00 PM (Offline at CEG, Anna University, Chennai)",
        prize: "Placement Opportunity",
        mode: "Hybrid (Online + Offline)",
        to: "recruitment-drive",
        formLink: "https://forms.gle/FDfScNYcmDUxTjfL6",
        registrationDeadline: "16 February 2026, 6:00 PM",
        recruitmentPartner: "Congruent Solutions",
        rounds: [
          {
            title: "Round 1 – Online Prelims (HackerRank Assessment)",
            content:
              "Prove your coding prowess in this HackerRank-based online preliminary round. This comprehensive assessment evaluates your problem-solving abilities, algorithmic thinking, and coding efficiency across multiple difficulty levels. Questions will cover data structures, algorithms, logical reasoning, and core programming concepts. Only top performers will advance to the final round. Make sure your HackerRank profile is updated and you have a stable internet connection.",
            duration: "90-120 minutes",
            time: "16 February 2026, 7:30 PM",
            venue: "Online (HackerRank Platform)",
            eligibility:
              "Open to all engineering students (Pre-final and Final year preferred)",
            note: "Registration closes on 15 February 2026 at 6:00 PM. Contest link will be shared via email.",
          },
          {
            title: "Round 2 – Technical Session",
            content:
              "Shortlisted candidates from Round 1 will face an offline technical session introducing you to the tech industry, and you may also have to solve coding challenges.",
            duration: "6 hours (11:00 AM - 5:00 PM)",
            time: "19 February 2026, 11:00 AM - 5:00 PM",
            venue: "GFL (Ground Floor Lab, DCSE)",
            note: "Shortlisted candidates will be notified via email after Round 1. Bring your college ID and laptop.",
            whatToExpect:
              "Live coding challenges, tech talk and industry exposure sessions.",
          },
        ],
        highlights: [
          "🎯 Direct Placement Opportunity with Congruent Solutions",
          "🚀 Work on cutting-edge technology projects",
          "📈 Career growth and professional development",
          "🏆 Industry-recognized certification for all participants",
          "👨‍💼 Mentorship from seasoned industry professionals",
          "⚡ Fast-track interview process - no multiple rounds of campus placements",
        ],
        whyShouldYouParticipate: [
          "Skip the usual lengthy campus placement process",
          "Showcase your skills through practical challenges, not just resumes",
          "Network with industry professionals and fellow talented peers",
          "Perfect opportunity for pre-final and final year students",
          "No registration fee - completely free to participate",
        ],
        aboutCongruent:
          "Congruent Solutions is a premier technology services company specializing in innovative software solutions, enterprise consulting, and digital transformation. With a proven track record of nurturing fresh talent and providing hands-on learning experiences, Congruent has placed hundreds of students in fulfilling tech careers across multiple domains including Full Stack Development, Data Engineering, Cloud Computing, AI/ML, and DevOps.",
        contact: [
          {
            id: 1,
            name: "Kamalesh N",
            phone: "86103 86055",
          },
          {
            id: 2,
            name: "Madhubaalika M",
            phone: "73058 97553",
          },
        ],
      },
    ],
    path: "/events/recruitment-drive",
  },
];
