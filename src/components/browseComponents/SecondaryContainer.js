import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  if (!movies.nowPlayingMovies) return;
  if (!movies.popularMovies) return;
  if (!movies.topRatedMovies) return;
  if (!movies.upcomingMovies) return;

  return (
    <div className='bg-black'>
      <div className='-mt-[200px] relative z-[100]'>
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies?.popularMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
        <MovieList title="Horror" movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;