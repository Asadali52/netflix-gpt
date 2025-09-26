import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const GptMovieSuggestions = () => {

  const gpt = useSelector(store => store.gpt);
  // console.log("🚀 ~ GptMovieSuggestions ~ gpt:", gpt);

  const { movieResults, movieName } = gpt;
  if (!movieName) return null;
  if (!movieResults) return null;

  return (
    <div className='relative z-10 text-white'>
      {movieName.map((movie, index) => (
        <MovieList key={index} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;