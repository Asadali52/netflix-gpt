import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailerHook from '../../hooks/useMovieTrailerHook';

const VideoBackground = ({ movieId }) => {

  useMovieTrailerHook(movieId);
  const trailerId = useSelector(store => store.movies?.trailerVideo);

  return (

    <div className='absolute inset-0 top-0'>
      <iframe
        className='h-screen w-full'
        src={`https://www.youtube.com/embed/${trailerId?.key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerId?.key}&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
    </div>

  );
};

export default VideoBackground;