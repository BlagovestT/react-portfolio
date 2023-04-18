import React, { useEffect } from 'react';
import ProjectItem from '../components/project-card/ProjectItem';
import './Projects.css';
import alenMak from '../assets/alen-mak.jpg';
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
          name='Alen Mak'
          url='https://alenmak-medical.com'
          image={alenMak}
        />

        <ProjectItem
          name='Alen Mak'
          url='https://alenmak-medical.com'
          image={alenMak}
        />

        <ProjectItem
          name='Alen Mak'
          url='https://alenmak-medical.com'
          image={alenMak}
        />

        <ProjectItem
          name='Alen Mak'
          url='https://alenmak-medical.com'
          image={alenMak}
        />

        <ProjectItem
          name='Alen Mak'
          url='https://alenmak-medical.com'
          image={alenMak}
        />
      </div>
    </div>
  );
};

export default Projects;
