import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";

import { VscVscode, VscCommentUnresolved, VscTerminalPowershell } from "react-icons/vsc";

import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";

import PROJECT_IMG_1 from "../assets/images/eitistore.png";
import PROJECT_IMG_2 from "../assets/images/eitishop.png";
import PROJECT_IMG_3 from "../assets/images/task.png";
import PROJECT_IMG_4 from "../assets/images/note.png";
import PROJECT_IMG_5 from "../assets/images/grocery.png";
import PROJECT_IMG_6 from "../assets/images/web-6.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
  { id: "01", count: "10", label: `Years of \nExperience` },
  { id: "02", count: "12", label: `Certifications \nEarned` },
  { id: "03", count: "43", label: `Projects \nCompleted` },
  { id: "04", count: "37+", label: `Happly \nClients` },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 50,
    type: "frontend",
    description: "",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML",
    progress: 70,
    type: "frontend",
    description: "",
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS",
    progress: 70,
    type: "frontend",
    description: "",
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 60,
    type: "frontend",
    description: "",
  },
  {
    id: "05",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 60,
    type: "backend",
    description: "",
  },
  {
    id: "06",
    icon: SiExpress,
    skill: "Express.js",
    progress: 60,
    type: "backend",
    description: "",
  },
  {
    id: "07",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 70,
    type: "backend",
    description: "",
  },

  {
    id: "10",
    icon: RiNextjsFill,
    skill: "NextJS",
    progress: 50,
    type: "backend",
    description: "",
  },
];

export const ABOUT_ME = {
  content: `Name: Nguyễn Phạm Anh Thư
Date of Birth: October 6, 1992
Location: Go Vap District, Ho Chi Minh City, Vietnam

I’m a self-taught developer with a background in accounting from Ho Chi Minh City University of Technology (HUTECH). Although my academic major was accounting, I developed an interest in design, testing and website development.
I’m eager to work in a collaborative team environment where I can:
  • Learn from experienced developers
  • Contribute to real-world projects
  • Improve my problem-solving and coding skills
  • Grow alongside the company and contribute to its long-term goals`,
  socialLinks: [
    // { id: "01", label: "Facebook", icon: FaFacebook, link: "#" },
    // { id: "02", label: "Instagram", icon: FaInstagram, link: "#" },
    // { id: "03", label: "Twitter", icon: FaXTwitter, link: "#" },
    // { id: "04", label: "LinkedIn", icon: FaLinkedin, link: "#" },
    // { id: "05", label: "Dribble", icon: FaDribbble, link: "#" },
  ],
  email: "enpieiti@gmail.com",
  address: "Go Vap District, Ho Chi Minh City",
  website: "https://enpieiti.com",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Full-Stack E-Commerce: Next.js 13, React.js, Typescript, Tailwind, Prisma, Stripe",
    image: PROJECT_IMG_1,
    tags: ["React", "Next.js", "MongoDB", "Node.js", "Prisma", "Stripe", "Tailwind"],
    source: "https://github.com/enpieiti/Eitistore-Commerce-Next.js-13-React.js-Typescript-Tailwind-Prisma-Stripe",
    demo: "https://eitistore.vercel.app/",
  },
  {
    id: 2,
    title: "Full Stack E-commerc: Redux,  PayPal payment, MERN Stack Project",
    image: PROJECT_IMG_2,
    tags: ["React", "Express.js", "redux", "MongoDB", "Node.js", "PayPal", "Tailwind"],
    source: "https://github.com/enpieiti/E-commerce-Redux-MERN-Stack-Project",
    demo: "https://eitife.vercel.app/",
  },
  {
    id: 3,
    title: "Full-Stack MERN Task Manager MERN Project: React, Node.js, MongoDB, Express",
    image: PROJECT_IMG_3,
    tags: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind"],
    source: "https://github.com/enpieiti/Task-Manager-React-Node.js-MongoDB-Express-MERN-Project",
    demo: "https://taskfe-orcin.vercel.app",
  },
  {
    id: 4,
    title: "Full Stack Polling App using MERN Stack | MongoDB , Express, React JS, Node JS",
    image: PROJECT_IMG_4,
    tags: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind"],
    source: "https://github.com/enpieiti/Notes-App-using-MERN-MongoDB-Express-React-JS-Node-JS",
    demo: "https://note-fe-tau.vercel.app/login",
  },
  {
    id: 5,
    title: "Frontend Ecommerce Website: HTML, SASS , CSS, JavaScript",
    image: PROJECT_IMG_5,
    tags: ["HTML", "SASS", "CSS", "JavaScript"],
    source: "https://github.com/enpieiti/Frontend-Ecommerce-Website-HTML-CSS-and-JavaScript",
    demo: "https://enpieiti.github.io/Frontend-Ecommerce-Website-HTML-CSS-and-JavaScript/",
  },
];
