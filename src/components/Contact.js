import React from 'react';

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className="container mx-auto">
      <motion.div
      variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
      className='flex flex-col lg:flex-row'>
        <div className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together</h2>
          </div>
        </div>
        <motion.form onsubmit="sendEmail(); reset()"
        variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' >
          <h3 className='h3 mb-6' >Contact me here:</h3>
          <p className='mb-6'> e-mail: calebabaca@gmail.com <br/> github: <a href='https://github.com/Caleb-A-B'>Click Here</a> </p>
          {/* <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type="text"
          placeholder='Your name'
          />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
          type="text"
          placeholder='Your email'
          />
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message' ></textarea>
          <button type="submit" className='btn btn-lg'>Send message</button> */}

        </motion.form>

      </motion.div>
    </div>
  </section>;
};

export default Contact;
