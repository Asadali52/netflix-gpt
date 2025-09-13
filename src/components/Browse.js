import React from 'react';
import Header from './Header';
import { BackgroundImg } from '../utils/constants';

const Browse = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-black flex items-center justify-center relative">

        <div className='bg-gradient-to-b from-black/50 to-black/40 absolute inset-0 z-10 h-full w-full' />

        <div className="absolute inset-0">
          <img src={BackgroundImg} alt="background" className="w-full h-full object-cover" />
        </div>

      </div>
    </>
  );
};

export default Browse;