import React from 'react';
import Header from './Header';
import useNowPlayingMoviesHook from '../hooks/useNowPlayingMoviesHook';
import MainContainer from './browseComponents/MainContainer';
import SecondaryContainer from './browseComponents/SecondaryContainer';
import usePopularMoviesHook from '../hooks/usePopularMoviesHook';
import useTopRatedMoviesHook from '../hooks/useTopRatedMoviesHook';
import useUpcomingMoviesHook from '../hooks/useUpcomingMoviesHook';

const Browse = () => {

  useNowPlayingMoviesHook();
  usePopularMoviesHook();
  useTopRatedMoviesHook();
  useUpcomingMoviesHook();

  return (
    <>
      <Header />
      <div className='relative min-h-screen w-full'>
        <MainContainer />
      </div>
      <SecondaryContainer />
    </>
  );
};

export default Browse;