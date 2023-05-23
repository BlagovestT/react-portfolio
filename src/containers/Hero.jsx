import React, { useEffect } from 'react';
import './Hero.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import CTA from '../components/cta/CTA';
import heroImg from '../assets/AnimeCoding2.png';
import 'animate.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const HeroCont = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='hero_container'>
      <div className='text_btn'>
        <h5 class='animate__animated animate__lightSpeedInLeft'>
          Hello, my name is
        </h5>

        <h1 class='animate__animated animate__lightSpeedInLeft animate__delay-1s'>
          Blagovest Todorov
        </h1>

        <h5 class='animate__animated animate__lightSpeedInLeft animate__delay-2s'>
          I'm a Front-End Developer
        </h5>

        <CTA />

        <div data-aos='fade-up' data-aos-delay='2200' className='social'>
          <div className='social-btn-linkedin'>
            <a href='https://github.com/BlagovestT' target='_blank'>
              <FaLinkedin />
            </a>
          </div>

          <div className='social-btn-mail'>
            <a href='#contact' className='social-mail'>
              <FaEnvelope />
            </a>
          </div>

          <div className='social-btn-git'>
            <a href='https://github.com/BlagovestT' target='_blank'>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className='hero_img'>
        <img src={heroImg} alt='' />
      </div>
    </div>
  );
};

export default HeroCont;
