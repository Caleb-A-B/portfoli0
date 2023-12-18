import React from 'react';
import { Link } from 'react-router-dom';

import BLogo from '../assets/BLogo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#">
            <img src={BLogo} alt="Logo" className="h-[90px]" />
          </a>
            {/* <Link to="contact" className='btn btn-sm'>Brainstorm and build</Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
