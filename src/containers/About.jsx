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
        <h2 data-aos='fade-up'>Get To Know</h2>
        <div className='about-cont' data-aos='fade-up' data-aos-delay='800'>
          <div className='img'>
            <div className='img-container'>
              <img src={img} alt='image' />
            </div>
          </div>

          <div className='text-container'>
            <h4>About Me</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab
              itaque quidem. Illum perferendis consequatur quidem quibusdam
              omnis cupiditate alias tempora fugiat, minima maiores repudiandae
              ut fugit nihil! Delectus voluptatibus at aut suscipit, earum id
              rerum aspernatur, animi esse odit asperiores! Tenetur veritatis
              nobis, id magni tempore aut accusantium voluptate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
