import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!Array.isArray(movies) || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { original_title = '', overview = '', id: trailerId } = mainMovie || {};

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={trailerId} />
    </div>
  );
};

export default MainContainer; 