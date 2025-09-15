import React from 'react';
import Header from './Header';
import useNowPlayingMoviesHook from '../hooks/useNowPlayingMoviesHook';
import MainContainer from './browseComponents/MainContainer';
import SecondaryContainer from './browseComponents/SecondaryContainer';

const Browse = () => {

  useNowPlayingMoviesHook();

  return (
    <>
      <Header />
      <div className='relative min-h-screen w-full'>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
    </>
  );
};

export default Browse;