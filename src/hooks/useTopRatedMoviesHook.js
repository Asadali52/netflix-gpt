import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useCallback, useEffect, useState } from "react";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMoviesHook = () => {
  const dispatch = useDispatch();
  const [loader, setIsLoader] = useState(true);
  const top_rated_movies = useSelector(store => store.movies.topRatedMovies);

  const getTopRatedMovies = useCallback(async () => {
    try {
      setIsLoader(true);
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error Fetching top Rated movies", error);
    } finally {
      setIsLoader(false)
    }
  }, [dispatch])

  useEffect(() => {
    if (!top_rated_movies) {
      getTopRatedMovies();
    } else {
      setIsLoader(false);
    }
  }, [getTopRatedMovies, top_rated_movies])

  return { loader };
}

export default useTopRatedMoviesHook;