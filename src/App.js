import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Router>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
      </Router>
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
