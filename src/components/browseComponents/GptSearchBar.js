import React, { useRef, useState } from 'react';
import { Search } from 'lucide-react';
import lang from '../../utils/languageConstants';
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import openai from '../../utils/openai';
import { API_OPTIONS } from '../../utils/constants';
import { addGptMovieResult } from '../../store/gptSlice';

const GptSearchBar = () => {

  const currentLanguage = useSelector(store => store.config.lang);
  const [searchText, setIsSearchText] = useState("");
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query : " + searchText + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Don, Sholay, Golmal, Koi Mil Gaya.";

  const handleGptSearchClick = async () => {
    if (!searchText) return toast.error("Search something!");

    // // make an API call to gpt API and get movie results
    // const gptResult = await openai.chat.completions.create({
    //   messages: [
    //     { role: 'user', content: gptQuery },
    //   ],
    //   model: 'gpt-3.5-turbo',
    // });

    // if (!gptResult.choices) {
    //   // todo: error handling
    // }

    // console.log(gptResult.choices?.[0]?.message?.content);
    const gptMovies = ["Raaz", "Chupke Chupke", "Padosan", "Carry On Jatta", "Happy Go Lucky"]
    // const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie.trim()));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieName: gptMovies, movieResults: tmdbResults })
    );

    setIsSearchText("");

  }

  return (
    <div className="w-full flex justify-center pt-32 pb-5 relative z-10">
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full max-w-2xl backdrop-blur-md rounded-lg bg-white border border-black px-2 py-1.5">
        <Search className="text-black mr-3 shrink-0" size={20} />
        <input
          value={searchText}
          onChange={(e) => setIsSearchText(e.target.value)}
          type="text"
          placeholder={lang[currentLanguage].searchPlaceholder}
          className="flex-1 bg-transparent pr-3 text-black placeholder-black/40 focus:outline-none text-[18px] max-[600px]:text-sm"
        />
        <button
          onClick={handleGptSearchClick}
          type="submit"
          className="whitespace-nowrap outline-none px-5 py-2 max-[600px]:text-[11 px] rounded-md bg-gradient-to-r bg-red-600 text-white font-medium hover:shadow-lg transition duration-300"
        >
          {lang[currentLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;