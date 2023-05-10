import React, { useEffect } from 'react';
import './About.css';
import img from '../assets/bogi.png';
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='about' id='about'>
      <div className='about-container'>
        <h2 data-aos='fade-down'>Get To Know</h2>
        <div className='about-cont' data-aos='fade-down' data-aos-delay='800'>
          <div className='img'>
            <div className='img-container'>
              <img src={img} alt='image' />
            </div>
          </div>

          <div className='text-container'>
            <h4>About Me</h4>
            <p>
              Student, 3rd year at VSU. "Chernorizets Hrabar" . I am a Front-End
              Developer with a passion for learning and a strong focus on
              delivering precise and high-quality results, a team player with
              communication skills. I am a responsible and dedicated person,
              committed to achieving my goals and contributing to the success of
              my team. Experience in HTML, CSS, JavaScript and React. I am
              familiar with Github and Figma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
