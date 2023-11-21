import React from 'react';

import BLogo from '../assets/BLogo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#">
            <img src={BLogo} alt="Logo" className="h-[90px]" />
          </a>
          <button className='btn btn-sm'>Brainstorm and build </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
