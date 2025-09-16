import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className='py-8 px-[4%]'>
      <p className='text-2xl pb-3 text-white font-bold'>{title}</p>
      <div className='flex gap-4 overflow-x-auto hide-scrollbar'>
        {movies.map((card) => (
          <MovieCard
            key={card.id}
            posterSrc={card.poster_path}
            popularity={card.popularity}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;