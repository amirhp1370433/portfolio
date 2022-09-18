import React from 'react';
//emailjs 
import emailjs from '@emailjs/browser';
// import contact data
import { contact } from '../data';
import { useRef } from 'react';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sgofnii",
        "template_5enr0xo",
        form.current,
        "kRA1xRNaRnIiKYfo9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
            send email to me for more details . 
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description , links } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                    {links ? <a className='text-accent font-normal' href='https://wa.me/989120742713'>
                      click here to send message on whatsapp platform 
                    </a> : ''}
                  </div>
                </div>
              );
            })}
          </div>
          <form
          ref={form} onSubmit={sendEmail}
            className='space-y-8 w-full max-w-[780px]'
          >    
            <div id='work'></div>
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Your name' name='to_name'/>
              <input className='input' type='email' placeholder='Your email' name='email'/>
            </div>
              <input className='input' type='text' placeholder='Subject' name='from_name'/>
              <div className='flex gap-8'>
                <input value='send' type={'submit'}className='btn btn-lg bg-accent hover:bg-secondary-hover'/>
                  <textarea
                  name='message'
                  className='textarea'
                  placeholder='Your message'
                  ></textarea>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
