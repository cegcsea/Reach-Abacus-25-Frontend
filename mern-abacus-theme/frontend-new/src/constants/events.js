import img1 from "../assets/images/landscape-1.jpg";
import img2 from "../assets/images/landscape-2.jpg"; // Example images
import img3 from "../assets/images/landscape-3.jpg";
import img4 from "../assets/images/internship.png";

// Contacts for the EventPage
export const EventContacts = [
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
    name: "Gautham",
    phone: "+1 234 567 890",
  },
  {
    id: 4,
    name: "Ganesh",
    phone: "+1 234 567 890",
  },
];

// List of events
export const events = [
  {
    title: "Technical Events",
    image: img1, // Event image
     event :[
        {
          id:"hello",
          title: "hello",
          description:
            "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
          image: img1, // Replace with your image path
          path: "/EventIndividual/NoviceInit",
        
            team: "Two or three members",
            gctDate: "19 February 2024",
            psnaDate: "22 February 2024",
            prize: "Rs 1k+",
            to: "geekquiz",
        rounds: [
            {
                title: "Round 1",
                content: "MCQ pen and paper event",
                duration: "30 minutes",
                time: "01:30 PM to 04:00 PM",
                venue: "Main Building Room No 238"
            },
            {
              title: "Round 2",
              content: "MCQ pen and paper event",
              duration: "30 minutes",
              time: "01:30 PM to 04:00 PM",
              venue: "Main Building Room No 238"
          },
        ],
        contact:[{
          id: 1,
          name: "Gautham",
          phone: "+1 234 567 890",
        },
        {
          id: 2,
          name: "Ganesh",
          phone: "+1 234 567 890",
        },],
        intern:[{
          
          no_of_team:"Top 3 will get opportunitues",

          name:"Amazon",
          image:img4,
        }]
          
        },
        {
          id:"second",
          title: "second",
          description:
            "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
          image: img1, // Replace with your image path
          path: "/EventIndividual/NoviceInit",
        
            team: "Two or three members",
            gctDate: "19 February 2024",
            psnaDate: "22 February 2024",
            prize: "Rs 1k+",
            to: "geekquiz",
        rounds: [
            {
                title: "Round 1",
                content: "MCQ pen and paper event",
                duration: "30 minutes",
                time: "01:30 PM to 04:00 PM",
                venue: "Main Building Room No 238"
            },
            
          
        ],
        contact:[{
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
        },],
        intern:[]
        },
        {
          id:"third",
          title: "third",
          description:
            "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
          image: img1, // Replace with your image path
          path: "/EventIndividual/NoviceInit",
        
            team: "Two or three members",
            gctDate: "19 February 2024",
            psnaDate: "22 February 2024",
            prize: "Rs 1k+",
            to: "geekquiz",
        rounds: [
            {
                title: "Round 1",
                content: "MCQ pen and paper event",
                duration: "30 minutes",
                time: "01:30 PM to 04:00 PM",
                venue: "Main Building Room No 238"
            },
           
        ],
        contact:[{
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
        },]
        },
        {
          title: "hello",
          description:
            "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
          image: img1, // Replace with your image path
          path: "/EventIndividual/NoviceInit",
        
            team: "Two or three members",
            gctDate: "19 February 2024",
            psnaDate: "22 February 2024",
            prize: "Rs 1k+",
            to: "geekquiz",
        rounds: [
            {
                title: "Round 1",
                content: "MCQ pen and paper event",
                duration: "30 minutes",
                time: "01:30 PM to 04:00 PM",
                venue: "Main Building Room No 238"
            },
           
        ],
        contact:[{
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
        },]
        },
        // Add more events here
      ],
    path: "/technical-events", // Path to the event page
  },
  {
    title: "Non Technical Events",
    image: img2, // Event image
    event :[
        {
          title: "hi",
          description:
            "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
          image: img1, // Replace with your image path
          path: "/EventIndividual/NoviceInit",
        },
        {
          title: "#Another Event",
          description:
            "A DBMS challenge that combines theoretical knowledge with practical application. The first round involves DBMS-based multiple-choice questions (MCQs), testing participants' understanding of database concepts. Successful participants advance to Round 2, a hands-on SQL coding challenge, where they apply their skills to solve real-world database problems.",
          image: img1, // Replace with your image path
          path: "/EventIndividual/NoviceInit",
        },
        {
          title: "#Novice.Init()",
          description:
            "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
          image: img1, // Replace with your image path,
          path: "/EventIndividual/NoviceInit",
        },
        {
          title: "#Another Event",
          description:
            "A DBMS challenge that combines theoretical knowledge with practical application. The first round involves DBMS-based multiple-choice questions (MCQs), testing participants' understanding of database concepts. Successful participants advance to Round 2, a hands-on SQL coding challenge, where they apply their skills to solve real-world database problems.",
          image: img1, // Replace with your image path,
          path: "/EventIndividual/NoviceInit",
        },
    ],
        // Add more events h
    path: "/technical-events", // Path to the event page
  },
  {
    title: "Pre Events",
    image: img3, // Event image
    event :[
        {
          title: "#Novice.Init()",
          description:
            "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
          image: img1, // Replace with your image path
          path: "/EventIndividual/NoviceInit",
        },
        {
          title: "#Another Event",
          description:
            "A DBMS challenge that combines theoretical knowledge with practical application. The first round involves DBMS-based multiple-choice questions (MCQs), testing participants' understanding of database concepts. Successful participants advance to Round 2, a hands-on SQL coding challenge, where they apply their skills to solve real-world database problems.",
          image: img1, // Replace with your image path
          path: "/EventIndividual/NoviceInit",
        },
        {
          title: "#Novice.Init()",
          description:
            "Designed exclusively for first-year students, this programming event introduces them to Computer Science by testing logical reasoning and basic programming skills.",
          image: img1, // Replace with your image path,
          path: "/EventIndividual/NoviceInit",
        },
        {
          title: "#Another Event",
          description:
            "A DBMS challenge that combines theoretical knowledge with practical application. The first round involves DBMS-based multiple-choice questions (MCQs), testing participants' understanding of database concepts. Successful participants advance to Round 2, a hands-on SQL coding challenge, where they apply their skills to solve real-world database problems.",
          image: img1, // Replace with your image path,
          path: "/EventIndividual/NoviceInit",
        },
        // Add more events h
    ],
    path: "/technical-events", // Path to the event page
  },
  // Add more events as needed
];
