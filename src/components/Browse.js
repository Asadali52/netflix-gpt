import React from 'react';
import Header from './Header';
import MainContainer from './browseComponents/MainContainer';
import SecondaryContainer from './browseComponents/SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearch from './browseComponents/GptSearchPage';

const Browse = () => {

  const showGpt = useSelector(store => store.gpt.showGptSearch);

  return (
    <>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <div className='relative min-h-screen w-full'>
            <MainContainer />
          </div>
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;