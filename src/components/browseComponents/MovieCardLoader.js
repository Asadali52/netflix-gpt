import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const MovieCardLoader = () => {
  return (
    <div className='py-8 px-[4%] space-y-3'>
      <Skeleton width={130} height={40} highlightColor='black' baseColor='lightgray' borderRadius={0} />
      <div className='flex gap-4 overflow-scroll hide-scrollbar'>
        {[...Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            height={320}
            width={220}
            highlightColor='red'
            baseColor='lightgray'
            borderRadius={0}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCardLoader;