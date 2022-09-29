import nomades from "../assets/nomades.png";
import weather from "../assets/weatherapp.png";
import foodarity from "../assets/food2.png";
import invoiceapp from "../assets/invoiceapp.png";

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";

export const projects = [
  {
    img: invoiceapp,
    title: "InvoiceApp",
    subtitle:
      "This is a personal App that I made with the aim of taking control of my invoice amounts",
    stack: "Next React TypeScript Tailwindscss",
    description:
      "InvoiceApp allows you to load your invoiced and the algorithm calculated the total amount invoiced from the last twelve months from today. The app is multi-user, and anyone with a GitHub account can log in. Also, you can use it on mobile!",
  },
  {
    img: foodarity,
    title: "Foodarity",
    subtitle:
      "Foodaritty is a MarketPlace that allows companies in the food selector.",
    stack: "React JavaScript CSS Express PostgreSQL",
    description:
      "Foodaryty is a Food Marketplace, which was born as a final project of Henry's Bootcamp, the project was carried out in three weeks using SCRUM metodology with one-week sprints  reporting to a Product Owner staff member",
  },
  {
    img: nomades,
    title: "Nomades-hotels",
    subtitle: "Mock up of a website that offers hosting for digital nomads",
    stack: "React Next TypeScript Chakra UI",
    description:
      "This application was created as part of a challenge. The test was to exactly replicate a UI using a design created in Figma, both for mobile and desktop.",
  },
  {
    img: weather,
    title: "WeatherApp",
    subtitle:
      "The weather app, allowes you to have a weather forecast of any city arround the world",
    stack: "React JavaScript Tailwindscss",
    description:
      "This app was created with react using the Tailwindcss library to give styles. The idea was to create a weather app (consuming weater API) with a simple and minimalist UI.",
  },
];

export const contactLinks = [
  { href: "https://wa.me/+5491132615516", icon: <FaWhatsapp /> },
  { href: "https://github.com/jrostagno", icon: <FaGithub /> },
  { href: "https://twitter.com/RostagnoJavier", icon: <FaTwitter /> },
  {
    href: "https://www.instagram.com/javier.rostagno/",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.linkedin.com/in/javier-rostagno/",
    icon: <FaLinkedinIn />,
  },
];

export const technologyList = [
  { tech: "JavaScript", icon: <IoLogoJavascript /> },
  { tech: "TypeScript", icon: <SiTypescript /> },
  { tech: "React", icon: <FaReact /> },
  { tech: "Next", icon: <SiNextdotjs /> },
  { tech: "Redux", icon: <SiRedux /> },
  { tech: "Node", icon: <FaNode /> },
  { tech: "Express", icon: <SiExpress /> },
  { tech: "MongoDB", icon: <SiMongodb /> },
];
