
import {
  logo,
  backend,
  creator,
  onemb,
  proxenixLogo,
  path2Placement,
  musicapp,
  pythonProjects,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  chatApp,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & Data Enthusiast",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst (Python)",
    icon: backend,
  },
  {
    title: "UI/UX Focused Builder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Proxenix",
    icon: proxenixLogo,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Delivered features in 2+ full-stack web projects, improving functionality and performance.",
      "Worked with a cross-functional team of 6, ensuring smooth communication and execution.",
      "Implemented frontend and backend modules using modern web technologies and best practices.",
      "Contributed code that enhanced user experience and reliability across multiple devices.",
      "Recognized for consistent effort, timely delivery, and strong problem-solving abilities.",
      "Tech & Skills: HTML • CSS • JavaScript • Node.js • Express • Socket.io • Git • Team Collaboration • Deployment • Debugging • Professional Communication",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Path2Placement",
    icon: path2Placement,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Contributed to 3+ real-world frontend projects, improving UI usability and responsiveness.",
      "Collaborated with a team of 5 developers to deliver clean and scalable components.",
      "Improved page performance and layout consistency across 4+ devices & browsers.",
      "Followed modern best practices, ensuring 100% responsive design and clean code standards.",
      "Tech & Skills: HTML • CSS • JavaScript • React • Git • Team Collaboration • Debugging • Problem Solving • Communication",
    ],
  },
  {
    title: "Green Skills Intern",
    company_name: "1M1B (1 Million for 1 Billion)",
    icon: onemb,
    iconBg: "#4B5563",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Completed 60 hours of structured sustainability training and real-world project work.",
      "Gained hands-on experience in Tableau with 20 hours of data visualization tasks.",
      "Applied green business practices through 20 hours of live sustainability projects.",
      "Strengthened knowledge of SDGs, climate impact, and sustainable decision-making.",
      "Delivered project insights with data-driven environmental analysis.",
      "Tech & Skills: Sustainability • Tableau • Data Visualization • SDGs • Project Management • Research & Documentation • Environmental Awareness",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kabir showed impressive dedication throughout his internship. His frontend improvements enhanced the user experience and made the product visually stronger.",
    name: "Project Mentor",
    designation: "Frontend Development Team",
    company: "Path2Placement",
    image: firstTestimonial,
  },
  {
    testimonial:
      "We valued Kabir’s reliability and problem-solving mindset. He contributed to web modules that made the platform smoother and more efficient for users.",
    name: "Senior Engineer",
    designation: "Web Development Division",
    company: "Proxenix",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Kabir demonstrated strong analytical thinking during his green skills internship. His enthusiasm for sustainability and data visualization stood out in every task.",
    name: "Program Coordinator",
    designation: "Sustainability & Data Projects",
    company: "1M1B (AICTE & Salesforce)",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "💬 Aura Chat App",
    description:
      "A real-time communication app supporting direct messaging, groups, media sharing, and profile customization. Developed as a full-stack system to demonstrate scalable architecture and smooth user interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/",
  },
  {
    name: "🎧 Aura — Music Streaming Platform",
    description:
      "A full-stack music streaming app where users can explore tracks, create playlists, and enjoy a seamless listening experience. Includes secure login, dynamic audio playback, and a modern interactive UI — inspired by leading streaming platforms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "firebase storage",
        color: "pink-text-gradient",
      },
    ],
    image: musicapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Python Mini Projects",
    description:
      "A collection of small but impactful Python applications showcasing automation, API integration, GUI development, and beginner-friendly data handling. These projects highlight my problem-solving skills and growing focus toward data-driven development.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tkinter", color: "white-text-gradient" },
      { name: "automation", color: "pink-text-gradient" },
      { name: "apis", color: "green-text-gradient" },
      { name: "pandas", color: "blue-text-gradient" },
    ],
    image: pythonProjects,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
