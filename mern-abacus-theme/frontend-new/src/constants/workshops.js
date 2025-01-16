import MERN from '../assets/Reach/MERN.png';
import ML from '../assets/Reach/ML.png';
import placement from '../assets/Reach/placement.svg'

import MERN_300 from '../assets/Reach/300.jpg';
import ML_150 from '../assets/Reach/150.jpg';

export const workshopsReach = [
    {
        title: "MERN Stack Development",
        to: "mernstackdev",
        image: MERN,
        bulkBooking: {
            link: "https://forms.gle/9nXUzrL8ejy4KUad6",
        },
        qr: MERN_300,
        venue: [
            {
                name: "PSNA College of Engineering and Technology",
                time: "09:30 AM to 04:00 PM", location: "CSE Department, First Floor Lab"
            },
        ],
        code: 1,
        content: "Engage in hands-on learning as we guide you through creating a simple yet impactful full-stack project. Ideal for both beginners and intermediate developers, this workshop not only provides valuable insights into essential MERN concepts but also offers guidance on further learning. Discover effective strategies and resources to stay updated with evolving technologies. As a bonus, practical suggestions on hosting full stack applications will be shared, ensuring you're well-equipped to take your projects live with confidence. Join us for a day of immersive learning, collaboration, and skill-building.",
        prerequistes: "Basics of HTML, CSS & JS.",
    },
    {
        title: "Introduction to Machine Learning with Python",
        to: "mlusingpython",
        image: ML,
        qr: ML_150,
        venue: [
            {
                name: "PSNA College of Engineering and Technology",
                time: "09:00 AM to 12:00 PM", location: "CSE Department, Second Floor Lab"
            },
        ],
        code: 2,
        content: "Embark on a thrilling half-day journey into the realm of machine learning with our workshop, 'Introduction to Machine Learning with Python.' Whether you're a complete beginner or have some coding experience, this workshop is designed to make machine learning accessible and exciting in just a few hours. Dive into hands-on Python coding to create your own simple yet impactful machine learning model. No fuss, no jargon – just the essentials presented in a lively and approachable manner. Join us for a half-day of learning, coding, and exploration.",
        prerequistes: "No prior machine learning experience is required. Just bring your curiosity, and let's make the most of this short but impactful ML adventure!",
    },
]

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
        title: "Placement Session",
        image: placement,
        content: "Participate in focused sessions on interview techniques, enhancing your confidence and readiness for placement scenarios. Stay informed about current hiring trends and industry expectations, positioning yourself effectively during placement processes. Engage in simulated interview experiences, receiving valuable feedback to optimize your performance in real-world placements.",
    }
]