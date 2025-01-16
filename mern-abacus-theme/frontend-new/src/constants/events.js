import OSPC from '../assets/Reach/OSPC.png';
import ReverseCoding from '../assets/Reach/ReverseCoding.png';
import UIUX from '../assets/Reach/UI UX.png';
import GeekQuiz from '../assets/Reach/Geek_Quiz.png';

export const events = [
    {
        title: "Geek_Quiz",
        team: "Two or three members",
        code: 2401,
        body: 'Engage in a captivating quiz, battling wits in math, science, and logic. Thought-provoking questions challenge analytical abilities, showcasing expertise in numbers, science, and reasoning.',
        tag: "Technical Events are twinkle twinkle little star",
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
        gctDate: "19 February 2024",
        psnaDate: "22 February 2024",
        image: GeekQuiz,
        prize: "Rs 1k+"
    },
    {
        title: "OSPC",
        team: "One or two members",
        code: 2402,
        body: 'A programming contest where the convergence of ingenious minds tackling intricate coding conundrums! Engage in a contest where participants navigate challenges featuring complex data structures and algorithms.',
        tag: "Technical Events are twinkle twinkle little star",
        to: "ospc",
        rounds: [
            {
                title: "Round 1",
                content: "MCQ pen and paper event",
                duration: "30 minutes",
                time: "9:00 AM to 12:00 PM",
                venue: "Cse Department, 2nd Floor, Room 211"
            },
            {
                title: "Round 2",
                content: "Hackerrank Test",
                duration: "90 minutes",
                time: "01:30 PM to 03:00 PM",
                venue: "Cse Department, 2nd Floor, Room 211"
            },
        ],
        gctDate: "20 February 2024",
        psnaDate: "23 February 2024",
        image: OSPC,
        prize: "Rs 1k+"
    },
    {
        title: "DesignSprint",
        team: "One member",
        code: 2403,
        body: 'Dive into the ultimate design competition, where creativity meets functionality. Elevate user experiences, push UI boundaries, and showcase your prowess in crafting seamless, innovative designs.',
        tag: "Technical Events are twinkle twinkle little star",
        to: "uiux",
        rounds: [
            {
                title: "Round 1",
                content: "Design the required problem statement in canva or any software, rolling event",
                duration: "60 minutes",
                time: "9:00 AM to 12:00 PM",
                venue: "Cse Department, 2nd Floor, Room 209"
            },
        ],
        gctDate: "20 February 2024",
        psnaDate: "23 February 2024",
        image: UIUX,
        prize: "Rs 1k+"
    },
    {
        title: "Reverse_Coding",
        team: "One or two members",
        code: 2404,
        body: 'Participants receive an executable file that takes input and produces output. Their challenge is to reverse engineer the solution by analyzing the given input-output pairs.',
        tag: "Technical Events are twinkle twinkle little star",
        to: "reversecoding",
        rounds: [
            {
                title: "Round 1",
                content: "Write logic/code for the given input-output sequence, offline, pen-paper round, rolling event",
                duration: "30 minutes",
                time: "9:00 AM to 12:00 PM",
                venue: "Cse Department, 2nd Floor, Room 210"
            },
            {
                title: "Round 2",
                content: "Run executable files and deduce the code",
                duration: "90 minutes",
                time: "01:30 PM to 03:00 PM",
                venue: "Cse Department, 2nd Floor, Room 210"
            },
        ],
        gctDate: "20 February 2024",
        psnaDate: "23 February 2024",
        image: ReverseCoding,
        prize: "Rs 1k+"
    },
];

export const EventContacts = [
  { id: 1, name: "Navaneeth", phone: "+91 9042142160" },
  { id: 2, name: "Gautham", phone: "+91 9876543210" },
  { id: 3, name: "Arjun", phone: "+91 8765432109" },
  { id: 4, name: "Priya", phone: "+91 7654321098" },
];
