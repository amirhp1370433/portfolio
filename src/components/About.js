import React from 'react';

// import img
import Image from '../assets/img/IMG_6280.JPG';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                SAEID SADEH
              </h2>
              <p className='mb-4 text-accent'>
                zabbix administrator 
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I am a network and Linux engineer.
                After graduating in network technology, I started working in this field. I love this job and I enjoy it. My mind is trained to solve difficult problems. I have been working in the field of Linux and devops for several years. The world is progressing, so we should not be left behind. <br />
                <br />
              </p>
            </div>
                     <a className="btn btn-nd bg-green-600 hover:bg-green-900 transition-all " href="tel:00989120742713">call me now  </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
