import React, { useRef, useEffect } from 'react';
import './Contact.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        'service_8zvltec',
        'template_adv9wdr',
        form.current,
        'xgD0SlRoyYuvmEVd8'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id='contact'>
      <div className='contact-heading' data-aos='fade-up'>
        <h5>Get In Touch</h5>
        <h1>Contact</h1>
      </div>
      <div className='container' data-aos='fade-up' data-aos-delay='800'>
        <div className='contac_container'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              name='name'
              placeholder='Your Full Name'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
            />
            <textarea
              name='message'
              rows='6'
              placeholder='Your Message'
              required
            ></textarea>
            <button type='submit' className='contact-btn'>
              Send Message
            </button>
          </form>
        </div>

        <div
          className='contact-social'
          data-aos='fade-up'
          data-aos-delay='1400'
        >
          <div className='contact-btn-linkedin'>
            <a href='https://github.com/BlagovestT' target='_blank'>
              <FaLinkedin />
            </a>
          </div>

          <div className='contact-btn-insta'>
            <a href='#contact'>
              <FaInstagram />
            </a>
          </div>

          <div className='contact-btn-git'>
            <a href='https://github.com/BlagovestT' target='_blank'>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
