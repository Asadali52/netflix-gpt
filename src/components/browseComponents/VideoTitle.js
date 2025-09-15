import React from 'react';

import { InfoIcon, Play } from 'lucide-react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute z-10 inset-0 px-[4%] bg-gradient-to-r from-black flex items-center'>

      <div>
        <p className='text-5xl font-bold text-white'>{title}</p>
        <p className='text-lg max-w-[500px] py-4 text-white'>{overview}</p>
        <div className='flex gap-6 pt-4'>
          <div className='bg-white hover:bg-white/80 flex py-2 shadow-sm px-6 cursor-pointer justify-center items-center rounded-md gap-2'>
            <Play size={20} />Play
          </div>
          <div className='bg-white/40 flex py-2 text-white shadow-sm px-6 cursor-pointer justify-center items-center rounded-md gap-2'>
            <InfoIcon size={20} />More Info
          </div>
        </div>
      </div>

    </div>
  );
};

export default VideoTitle;