import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Certificate.css';
import { IoSchool } from 'react-icons/io5';
import { SiMeta } from 'react-icons/si';

const Certificate = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='certificate' id='certificate'>
      <h2 data-aos='fade-down'>Certificates</h2>

      <VerticalTimeline lineColor='#2c2f33'>
        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#ffa500' }}
          icon={<IoSchool />}
        >
          <h3 className='vertical-timeline-element-title'>SoftUni</h3>
          <p>Programing Basics with JavaScript</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#ffa500' }}
          icon={<IoSchool />}
        >
          <h3 className='vertical-timeline-element-title'>SoftUni</h3>
          <p>Programming Fundamentals with JavaScript</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#0668E1' }}
          icon={<SiMeta />}
        >
          <h3 className='vertical-timeline-element-title'>Meta</h3>
          <p>Introduction to Front-End Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#0668E1' }}
          icon={<SiMeta />}
        >
          <h3 className='vertical-timeline-element-title'>Meta</h3>
          <p>Programming with JavaScript</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#0668E1' }}
          icon={<SiMeta />}
        >
          <h3 className='vertical-timeline-element-title'>Meta</h3>
          <p>Version Control</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#0668E1' }}
          icon={<SiMeta />}
        >
          <h3 className='vertical-timeline-element-title'>Meta</h3>
          <p>HTML and CSS in depth</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#0668E1' }}
          icon={<SiMeta />}
        >
          <h3 className='vertical-timeline-element-title'>Meta</h3>
          <p>React Basics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#0668E1' }}
          icon={<SiMeta />}
        >
          <h3 className='vertical-timeline-element-title'>Meta</h3>
          <p>React Advance</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#0668E1' }}
          icon={<SiMeta />}
        >
          <h3 className='vertical-timeline-element-title'>Meta</h3>
          <p>Principles of UX/UI Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verical-timeline-element--education'
          contentStyle={{ background: 'rgb(44, 47, 51)', color: '#fff' }}
          iconStyle={{ background: '#2c2f33', color: '#0668E1' }}
          icon={<SiMeta />}
        >
          <h3 className='vertical-timeline-element-title'>Meta</h3>
          <p>Meta Front-End Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Certificate;
