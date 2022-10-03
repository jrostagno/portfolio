import nomades from "../assets/nomades.png";
import weather from "../assets/weatherapp.png";
import foodarity from "../assets/food2.png";
import invoiceapp from "../assets/invoiceapp.png";
import pokemon from "../assets/poke.png";
import cibertics from "../assets/cibertics.png";
import poker from "../assets/deck.png";
import porfolio from "../assets/rostagno.png";

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
    url: "https://invoiceapp-phi.vercel.app/",
    github: "https://github.com/jrostagno/invoiceapp",
    title: "InvoiceApp",
    subtitle:
      "This is a personal App that I made with the aim of taking control of my invoice amounts",
    stack: ["Next", "React", "TypeScript", "Tailwindscss"],
    description:
      "InvoiceApp allows you to load your invoiced and the algorithm calculated the total amount invoiced from the last twelve months from today. The app is multi-user, and anyone with a GitHub account can log in. Also, you can use it on mobile!",
  },

  {
    img: foodarity,
    url: "https://foodarity.herokuapp.com/",
    github: "https://github.com/jrostagno/foodarity-app",
    title: "Foodarity",
    subtitle:
      "Foodaritty is a MarketPlace that allows companies in the food selector.",
    stack: ["React", "JavaScript", "CSS", "Express", "PostgreSQL"],
    description:
      "Foodaryty is a Food Marketplace, which was born as a final project of Henry's Bootcamp, the project was carried out in three weeks using SCRUM metodology with one-week sprints  reporting to a Product Owner staff member",
  },
  {
    img: nomades,
    url: "https://nomad-hotels.vercel.app/",
    github: "https://github.com/jrostagno/nomad-hotels",
    title: "Nomades-hotels",
    subtitle: "Mock up of a website that offers hosting for digital nomads",
    stack: ["Next", "React", "TypeScript", "Chakra UI"],
    description:
      "This application was created as part of a challenge. The test was to exactly replicate a UI using a design created in Figma, both for mobile and desktop.",
  },
  {
    img: porfolio,
    url: "https://foodarity.herokuapp.com/",
    github: "https://github.com/jrostagno/portfolio",
    title: "My website",
    subtitle: "Personal portfolio.The place where you are currently",
    stack: ["React", "TypeScript", "Chakra UI"],
    description:
      "This app was created as part of a challenge, The task is to write a program that draws cards from a deck. This program needs to keep drawing cards from the deck until it has drawn a QUEEN of every suit",
  },
  {
    img: weather,
    url: "https://github.com/jrostagno/weatherApp",
    github: "https://jr-weatherapp.netlify.app/",
    title: "WeatherApp",
    subtitle:
      "The weather app, allowes you to have a weather forecast of any city arround the world",
    stack: ["React", "JavaScript", "Tailwindscss"],
    description:
      "This app was created with react using the Tailwindcss library to give styles. The idea was to create a weather app (consuming weater API) with a simple and minimalist UI.",
  },
  {
    img: cibertics,
    url: "https://cyberticks-challenge.netlify.app/",
    github: "https://github.com/jrostagno/cybertiks-challenge",
    title: "Dashboars",
    subtitle: "UI replication Cibertics table, created with Tailwindscss",
    stack: ["React", "JavaScript", "Tailwindscss"],
    description:
      "This challenge consist in the replications of a UI that contains a table with cumulative filters. and paginations.",
  },
  {
    img: poker,
    url: "https://deckofcards-challenge.netlify.app/",
    github: "https://github.com/jrostagno/deck-of-card",
    title: "Deck of cards",
    subtitle: "Game, Deck of cards, find all queens challenge",
    stack: ["React", "JavaScript", "Tailwindscss"],
    description:
      "This app was created as part of a challenge, The task is to write a program that draws cards from a deck. This program needs to keep drawing cards from the deck until it has drawn a QUEEN of every suit",
  },
  {
    img: pokemon,
    url: "https://pokedex-henry.netlify.app/",
    github: "https://github.com/jrostagno/PI---Pokemon",
    title: "PokeDex",
    subtitle: "This is the First App I made,, end-to-end,SPA using Poke API",
    stack: ["React", "JavaScript", "CSS", "Express", "PostgreSQL"],
    description:
      "PI Henry Pokemon , end-to-end , SPA, front created with React, Css-Module, Back created with Express, Sequelize and PostgreSQL for Data Base.",
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
