import React, { useEffect } from 'react';
import ProjectItem from '../components/project-card/ProjectItem';
import './Projects.css';
import alenMak from '../assets/alen-mak.png';
import todo from '../assets/todo.png';
import calc from '../assets/calc.png';
import devBlog from '../assets/devblog.png';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='projects' id='projects'>
      <h2 className='project-title' data-aos='fade-up'>
        My Projects
      </h2>
      <div className='project-list' data-aos='fade-up' data-aos-delay='800'>
        <ProjectItem
          name='Alen Mak'
          description='A hospice site written in React and JavaScript provides a user-friendly and interactive platform to convey essential information and services related to hospice care. By leveraging the power of React, a popular JavaScript library for building user interfaces, the site can deliver a seamless and responsive user experience.'
          url='https://alenmak-medical.com'
          image={alenMak}
        />

        <ProjectItem
          name='Dev Blog'
          description='A blog written in Next.js with TypeScript, styled using Tailwind CSS, and powered by Sanity for the backend offers a modern and efficient solution for creating and managing a content-rich blog platform.'
          url='https://nextjs-blog-snowy-ten-29.vercel.app'
          image={devBlog}
        />

        <ProjectItem
          name='Todo List'
          description='
          A Todo list written in React and utilizing JavaScript functionality provides a dynamic and interactive interface for managing tasks and organizing your daily activities efficiently.'
          url='https://todo-list-30l7soudh-blagovestt.vercel.app'
          image={todo}
        />

        <ProjectItem
          name='Calculator'
          description='A React calculator that allows users to perform various mathematical operations within a web application. It provides an intuitive and interactive interface for performing calculations quickly and efficiently.

          '
          url='https://my-react-calculator-five.vercel.app'
          image={calc}
        />
      </div>
    </div>
  );
};

export default Projects;
