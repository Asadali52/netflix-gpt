import React from 'react';
import { Search } from 'lucide-react';
import lang from '../../utils/languageConstants';
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const currentLanguage = useSelector(store => store.config.lang);

  return (
    <div className="w-full flex justify-center pt-32 pb-5 relative z-10">
      <form className="flex items-center w-full max-w-2xl backdrop-blur-md rounded-lg bg-white border border-black px-2 py-1.5">
        <Search className="text-black mr-3 shrink-0" size={20} />
        <input
          type="text"
          placeholder={lang[currentLanguage].searchPlaceholder}
          className="flex-1 bg-transparent text-black placeholder-black/40 focus:outline-none text-[18px] max-[600px]:text-sm"
        />
        <button
          type="submit"
          className="whitespace-nowrap px-5 py-2 max-[600px]:text-[11 px] rounded-md bg-gradient-to-r bg-red-600 text-white font-medium hover:shadow-lg transition duration-300"
        >
          {lang[currentLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;