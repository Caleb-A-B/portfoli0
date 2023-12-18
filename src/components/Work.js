import React from 'react';

// import { motion } from 'framer-motion'

// import { fadeIn } from '../variants'


import Img1 from '../assets/Metaness.png';
import Img2 from '../assets/portfolio-img2..png';
import Img3 from '../assets/portfolio-img3..png';


const Work = () => {
  return (
    <section className='section' id='work'>
      <div clasName="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />
              Work
              </h2>
              <p className='max-w-sm mb-16'>
                Check out my most recent work here
              </p>
              <a href="https://github.com/Caleb-A-B">
                <button className='btn btn-sm'>View all projects</button>
              </a>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <a href="https://metaversal.onrender.com/">
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>UI/UX Design</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Metaversal</span>
                </div>
              </a>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <a href="https://brianahlers.github.io/lyriclookup/">
                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>client side api</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>LyricLookup</span>
                </div>
              </a>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <a href="project3-link">
                <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>development</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>teetrove</span>
                </div>
              </a>
            </div>
          </div>
          <div>3</div>
        </div>  
      </div>
    </section>
  )
};

export default Work;
