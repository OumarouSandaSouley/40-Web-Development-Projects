import facebook from '../assets/socials/facebook.svg'
import whatsapp from '../assets/socials/whatsapp.svg'
import twitter from '../assets/socials/twitter.svg'
import linkedin from '../assets/socials/linkedin.svg'
import github from '../assets/socials/github.svg'
import tatami from "../assets/Projects/tatami.png"
import landingpage from "../assets/Projects/landingpage.png"
import woilatech from "../assets/Projects/woilatech.png"
import osstube from "../assets/Projects/osstube.png"
const socialMedias = [
  {
    title: "Facebook",
    icon: facebook,
    url: "https://www.facebook.com/aajt.aajt.562/",
  },
  {
    title: "GitHub",
    icon: github,
    url: "https://www.github.com/OumarouSandaSouley",
  },
  {
    title: "Whatsapp",
    icon: whatsapp,
    url: "https://wa.me/m/+237690726925",
  },
  {
    title: "Linkedin",
    icon: linkedin,
    url: "https://www.linkedin.com/in/souley-oumarou-sanda-8506b0302/",
  },
  {
    title: "Twitter",
    icon: twitter,
    url: "https://www/twitter.com/@OumarouSaSouley",
  },
];
const workflow = [
  {
    step: "Requirement Analysis",
    description:
      "Understanding client needs and project goals through meetings and detailed discussions.",
    responsible: "Project Manager, Client",
  },
  {
    step: "Planning",
    description:
      "Creating a project plan that outlines tasks, timelines, and resources required.",
    responsible: "Project Manager, Team Leads",
  },
  {
    step: "Design",
    description:
      "Drafting wireframes, mockups, and prototypes based on the requirements and feedback.",
    responsible: "UX/UI Designer",
  },
  {
    step: "Development",
    description:
      "Writing the code for the front-end and back-end components of the website or application.",
    responsible: "Front-end Developer, Back-end Developer",
  },
  {
    step: "Testing",
    description:
      "Conducting various tests like unit, integration, and user acceptance testing to ensure quality.",
    responsible: "QA Engineer, Developer",
  },
  {
    step: "Deployment",
    description:
      "Releasing the website or application to the production environment.",
    responsible: "DevOps Engineer",
  },
  {
    step: "Maintenance",
    description:
      "Providing ongoing support, fixing bugs, and adding new features as required.",
    responsible: "Support Team, Developer",
  },
  {
    step: "Review and Feedback",
    description:
      "Gathering user feedback and assessing the project’s success for continuous improvement.",
    responsible: "Project Manager, Client",
  },
];

const projects1 = [
  {
    title: "Tatami",
    desc: "Tatami is a web application designed to fetch and display memorable quotes from various anime series. The app provides an engaging way for anime enthusiasts to relive their favorite moments and sha…",
    image: tatami,
    view: "https://www.tatami-liart.vercel.app",
    github: "https://github.com/OumarouSandaSouley/tatami",
  },
  {
    title: "Landing Page du Dr. Claudel Noubissie",
    desc: "Il s'agit d'une simple d'une landing page basé sur une publication du Dr. Docteur Noubissie parlant la Claudel Noubissie Business Group. Cette page présente la Claudel Noubissie Business Group avec la publication du docteur 'APPRENEZ À VENDRE, LAISSEZ LE JAMBO !'",
    image: landingpage,
    view: "https://www.claudelnoubissiebusinessgroup.vercel.app",
    github: "https://github.com/OumarouSandaSouley/Project-9-Landing-Page",
  },
];
const projects2 = [
  {
    title: "WoilaTech",
    desc: "WoilaTech is an innovation-focused technology company with a mission to provide cutting-edge digital solutions to meet the growing needs of users in Africa and beyond. We aim to create a positive impact by empowering individuals and businesses through intuitive, efficient, and accessible technological tools and platforms.",
    image: woilatech,
    view: "https://woilatech.com/",
    github: "",
  },
  {
    title: "OSS Tube Youtube 2.0",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eius.",
    image: osstube,
    view: "https://www.osstube.vercel.app",
    github: "https://github.com/OumarouSandaSouley/oss-tube_youtube2.0",
  },
];


export { socialMedias, workflow, projects1, projects2 };