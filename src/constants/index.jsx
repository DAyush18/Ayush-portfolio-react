import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, React-Native, Next.js, Node, Express, MongoDb, Tailwind, MySql, Javascript, Docker, Kubernetes ";

export const PROJECTS = [
  {
    id: 1,
    title: "Threads App Clone",
    description:
      "A full-featured Threads App built with React-Native, Node.js and MongoDB.",
    imgSrc: project1,
    link: "https://www.linkedin.com/posts/d-ayush-2330952ba_reactnative-nodejs-expressjs-activity-7255292361407131649-vanB?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    title: "AI Interview Mocker",
    description:
      "A social media application with real-time chat and notifications.",
    imgSrc: project2,
    link: "https://ai-interview-mocker-three.vercel.app/sign-in?redirect_url=https%3A%2F%2Fai-interview-mocker-three.vercel.app%2Fdashboard",
  },
  {
    id: 3,
    title: "Movies App",
    description:
      "Android App Created in React Native",
    imgSrc: project3,
    link: "https://www.youtube.com/watch?v=gOz0kWVGlu0&feature=youtu.be",
  },
  {
    id: 4,
    title: "Realtime Chat Website",
    description:
      "Developed a real-time chat application using REACT JS, enabling users to add friends, exchange messages, and share images seamlessly.",
    imgSrc: project4,
    link: "http://reactchat-app.s3-website.ap-south-1.amazonaws.com/",
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A blogging platform with user authentication and content management",
    imgSrc: project5,
    link: "https://example.com/blog-platform",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A blogging platform with user authentication and content management",
    imgSrc: project6,
    link: "https://example.com/online-learning-platform",
  },
  {
    id: 7,
    title: "Fitness Tracker",
    description: "A mobile application to track fitness activities and goals.",
    imgSrc: project7,
    link: "https://example.com/fitness-tracker",
  },
  {
    id: 8,
    title: "Recipe App",
    description: "An app for browsing and saving various cooking recipes.",
    imgSrc: project8,
    link: "https://example.com/recipe-app",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    description:
      "A weather dashboard providing current weather data and forecasts.",
    imgSrc: project9,
    link: "https://example.com/weather-dashboard",
  },
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "Suven Consultants and Technology Pvt.Ltd.",
    role: "Web Developer",
    year: "10/2022 - 12/2022 ",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "",
    role: "Frontend Developer",
    year: "09/2023 - 11/2023",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  
  {
    href: "https://www.instagram.com/__ayush18_/?next=%2F",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
 
  {
    href: "https://github.com/DAyush18",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/d-ayush-2330952ba/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "raoayush41@gmail.com",
  phone: "+91 6264845104",
};
