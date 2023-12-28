import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  react,
  redux,
  sass,
  tailwindcss,
  supabase,
} from '../asset/icons';

import { iphone } from '../asset/images';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: supabase,
    name: 'Supabse',
    type: 'BackEnd',
  },

  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/Bhaskarsahu23',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/bhaskar-sahu-975948212/',
  },
];

export const projects = [
  {
    img: iphone,
    name: 'The Wilde Oasis',
    description:
      'This project is built using React.js, Supabase, and Tailwind CSS. It serves as an advanced admin dashboard designed for efficient hotel management, seamlessly integrating the powerful features of React.js for dynamic user interfaces, Supabase for robust backend functionality, and Tailwind CSS for a modern and responsive design. The combination of these cutting-edge technologies ensures a streamlined and feature-rich solution, empowering hotel administrators with the tools they need for effective management and oversight.',
    liveLink: 'https://the-wilde-oasis-hm.netlify.app/',
    githubLink:
      'https://github.com/Bhaskarsahu23/React-Mini-Projects/tree/master/the-wilde-oasis',
  },
  {
    img: iphone,
    name: 'iPhone animation website',
    description:
      'iPhone Animation Website: This website is built using HTML, CSS, JavaScript, and GSAP (GreenSock Animation Platform). Throughout this project, I have gained valuable experience in employing GSAP, a powerful animation library, to enhance the visual dynamics of the site. The incorporation of HTML, CSS, and JavaScript, along with GSAP, results in a seamlessly animated and engaging user experience, showcasing the potential of these technologies in web development',

    liveLink: 'https://iphone-website-animation.netlify.app/',
    githubLink:
      'https://github.com/Bhaskarsahu23/GSAP-Animation-Projects/tree/master/iphone%20animation',
  },
];
