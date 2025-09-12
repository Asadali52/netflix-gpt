import React from 'react';
import Header from './Header';

const Browse = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-black flex items-center justify-center relative">

        <div className='bg-gradient-to-b from-black/50 to-black/40 absolute inset-0 z-10 h-full w-full' />

        <div className="absolute inset-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/PK-en-20250908-TRIFECTA-perspective_51c2f7b0-0af1-4189-bc89-3e9b30c172d8_small.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </>
  );
};

export default Browse;