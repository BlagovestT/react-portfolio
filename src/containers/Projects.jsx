import React, { useEffect } from 'react';
import ProjectItem from '../components/project-card/ProjectItem';
import './Projects.css';
import alenMak from '../assets/alen-mak.png';
import littleLemon from '../assets/little-lemon.png';
import todo from '../assets/todo.png';
import calc from '../assets/calc.png';
import fsm from '../assets/fsm.png';
import parallax from '../assets/parallax.png';
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
          url='https://alenmak-medical.com'
          image={alenMak}
        />

        <ProjectItem
          name='Dev Blog'
          url='https://nextjs-blog-snowy-ten-29.vercel.app'
          image={devBlog}
        />

        <ProjectItem
          name='Todo List'
          url='https://todo-list-30l7soudh-blagovestt.vercel.app'
          image={todo}
        />

        <ProjectItem
          name='Calculator'
          url='https://my-react-calculator-five.vercel.app'
          image={calc}
        />
      </div>
    </div>
  );
};

export default Projects;
