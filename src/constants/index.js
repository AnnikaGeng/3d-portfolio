import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    react_native,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    medlinker,
    modao,
    memoTask,
    petSaas,
    javaSpring,
    jquery,
    mysql,
    python,
    sass,
    bootstrap,
    fit,
    typescript
  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Java Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java Spring",
      icon: javaSpring,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "React Native",
      icon: react_native,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "typescript",
      icon: typescript,
    },
    
  ];
  
  const experiences = [
    {
      title: "Product Assistant",
      company_name: "Modao",
      icon: modao,
      iconBg: "white",
      date: "Jul 2019 - Jul 2020",
      points: [
        "Design a prototype share community, which gets 5000+ users every day",
        "Led 5+ components' design of the workspace, increased the efficiency of users.",
        "Collected 400+ users' feedback and put into iterations through data analyses",
      ],
    },
    {
      title: "Product manager",
      company_name: "Medlinker",
      icon: medlinker,
      iconBg: "#F7f7f7",
      date: "Jul 2020 - Dec 2021",
      points: [
        "Leading a development team of 10+ people to make products help patients recover.",
        "Designed application for 100+ seed users such as diabetes and nephrosis patients, with exercise advice, nutrition information, and hardware connection.",
        "Led the design of user points and redemptions system from 0 to 1, increasing the active user number by 10%.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MemoTask",
      description:
        "Developed a Full-Stack task manager application that allows users to manage their daily tasks",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "responsive",
          color: "green-text-gradient",
        }
      ],
      image: memoTask,
      source_code_link: "https://github.com/AnnikaGeng/memoTasks",
    },
    {
      name: "Dog care SaaS App",
      description: "provided a scheduling Application for small businesses that take care of animals.",
      tags: [
        {
          name: "Java Springboot",
          color: "blue-text-gradient",
        },
        {
          name: "REST API",
          color: "green-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
        {
          name: "Hibernate",
          color: "blue-text-gradient",
        },
        {
          name:"Unit Tests",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "jQuery",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "blue-text-gradient",
        }
      ],
      image: petSaas,
      source_code_link: "https://github.com/AnnikaGeng/petCare-frontend"
    },
    {
      name: "GlowFit Gym Website",
      description: "Developed a responsive landing page for a gym using TypeScript, React, and Tailwind CSS, and deployed on Cloudflare.",
      tags: [
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "responsive",
          color: "blue-text-gradient",
        },
        {
          name: "Cloudflare",
          color: "green-text-gradient",
        }
      ],
      image: fit,
      source_code_link: "https://github.com/AnnikaGeng/fitness-frontend"
    }
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };