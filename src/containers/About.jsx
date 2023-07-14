import React, { useEffect } from 'react';
import './About.css';
import img from '../assets/bogi.png';
import 'aos/dist/aos.css';
import Aos from 'aos';
import {
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaGithub,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: '#E44D26' },
    { name: 'JavaScript', icon: FaJs, color: '#F0DB4F' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#563D7C' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
    { name: 'GitHub', icon: FaGithub, color: '#181717' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  ];

  return (
    <div className='about' id='about'>
      <div className='about-container'>
        <h2 data-aos='fade-down'>Get To Know</h2>
        <div className='about-cont' data-aos='fade-down' data-aos-delay='600'>
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
              my team. Experienced in HTML, CSS, JavaScript and React. Familiar
              with TypeScript, Tailwind, Bootstrap, NextJs, GitHub and Figma.
            </p>
          </div>
        </div>
        <div className='skill-title' data-aos='fade-up'>
          <h3>Skills</h3>
        </div>
        <div
          className='skill-container'
          data-aos='fade-up'
          data-aos-delay='600'
        >
          {skills.map((skill, index) => (
            <div key={index} className='skill-item'>
              <skill.icon className='skill-icon' color={skill.color} />
              <span className='skill-name'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
