import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BackgroundImg } from '../../utils/constants';

const GptSearch = () => {
  return (
    <div className='relative min-h-screen px-[4%]'>
      <div className='bg-gradient-to-b from-transparent to-black/40 absolute inset-0 z-10 h-full w-full' />
      <div className="absolute inset-0">
        <img src={BackgroundImg} alt="background" className="w-full h-full object-cover" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch; 