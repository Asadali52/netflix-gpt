import React from 'react';
import { IMG_CDN_URl } from '../../utils/constants';

const MovieCard = ({ posterSrc, popularity }) => {
  return (
    <div className='shrink-0 relative group overflow-clip'>
      <img className='w-[220px] object-cover' src={IMG_CDN_URl + posterSrc} alt='img' />
      <div className='absolute z-10 bottom-4 left-4 translate-y-28 group-hover:translate-y-0 duration-300'>
        <p className='font-bold text-white'>Popularity</p>
        <p className='text-white'>{popularity}</p>
      </div>
      <div className='bg-black/70 absolute w-full h-0 top-0 group-hover:h-full duration-500' />
    </div>
  );
};

export default MovieCard;