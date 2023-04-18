import React from 'react';
import CV from '../../assets/CV.pdf';
import './CTA.css';
import 'animate.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const CTA = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos='fade-up' data-aos-delay='3000' className='button-container'>
      <button className='button'>
        <a href={CV} download={CV}>
          Download CV
        </a>
      </button>
      <button className='button'>
        <a href='#contact'>Contact Me</a>
      </button>
    </div>
  );
};

export default CTA;
