import React, { useEffect } from 'react';
import ProjectItem from '../components/project-card/ProjectItem';
import './Projects.css';
import alenMak from '../assets/alen-mak.png';
import littleLemon from '../assets/little-lemon.png';
import todo from '../assets/todo.png';
import calc from '../assets/calc.png';
import fsm from '../assets/fsm.png';
import parallax from '../assets/parallax.png';
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
          name='Little Lemon'
          url='https://meta-final-project-brown.vercel.app/#'
          image={littleLemon}
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

        <ProjectItem
          name='HTML Site'
          url='https://github.com/BlagovestT/FsM-Site'
          image={fsm}
        />

        <ProjectItem
          name='Parallax Page'
          url='https://parallax-scrolling-web-site.vercel.app'
          image={parallax}
        />
      </div>
    </div>
  );
};

export default Projects;
