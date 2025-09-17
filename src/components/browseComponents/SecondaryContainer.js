import React from 'react';
import MovieList from './MovieList';
import MovieCardLoader from './MovieCardLoader';
import { useSelector } from 'react-redux';
import usePopularMoviesHook from '../../hooks/usePopularMoviesHook';
import useTopRatedMoviesHook from '../../hooks/useTopRatedMoviesHook';
import useUpcomingMoviesHook from '../../hooks/useUpcomingMoviesHook';
import useNowPlayingMoviesHook from '../../hooks/useNowPlayingMoviesHook';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  const { loader: popularMoviesLoader } = usePopularMoviesHook();
  const { loader: topRatedMoviesLoader } = useTopRatedMoviesHook();
  const { loader: upcomingMoviesLoader } = useUpcomingMoviesHook();
  const { loader: nowPlayingMoviesLoader } = useNowPlayingMoviesHook();

  // if (!movies.nowPlayingMovies) return;
  // if (!movies.popularMovies) return;
  // if (!movies.topRatedMovies) return;
  // if (!movies.upcomingMovies) return;

  return (
    <div className='bg-black'>
      <div className='-mt-[150px] relative z-[100]'>

        {nowPlayingMoviesLoader ? (
          <MovieCardLoader />
        ) : (
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        )}

        {popularMoviesLoader ? (
          <MovieCardLoader />
        ) : (
          <MovieList title="Popular Movies" movies={movies?.popularMovies} />
        )};

        {topRatedMoviesLoader ? (
          <MovieCardLoader />
        ) : (
          <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        )}

        {upcomingMoviesLoader ? (
          <MovieCardLoader />
        ) : (
          <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
        )}

        {nowPlayingMoviesLoader ? (
          <MovieCardLoader />
        ) : (
          <MovieList title="Horror" movies={movies?.nowPlayingMovies} />
        )}

      </div>
    </div>
  )
}

export default SecondaryContainer;