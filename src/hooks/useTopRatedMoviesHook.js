import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMoviesHook = () => {
  const dispatch = useDispatch();
  const [loader, setIsLoader] = useState(true);

  const getTopRatedMovies = async () => {
    try {
      setIsLoader(false);
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error Fetching top Rated movies", error);
    } finally {
      setIsLoader(false)
    }
  }

  useEffect(() => {
    getTopRatedMovies();
  }, [])

  return { loader };
}

export default useTopRatedMoviesHook;