import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from '../store/moviesSlice';

const useNowPlayingMoviesHook = () => {
  const dispatch = useDispatch();
  const [loader, setIsLoader] = useState(true);

  const now_playing_Movies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMoving = useCallback(async () => {
    try {
      setIsLoader(true);
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching Playing Movies", error);
    } finally {
      setIsLoader(false);
    }
  }, [dispatch])

  useEffect(() => {
    if (!now_playing_Movies) {
      getNowPlayingMoving()
    } else {
      setIsLoader(false);
    }
  }, [getNowPlayingMoving, now_playing_Movies])

  return { loader };
}

export default useNowPlayingMoviesHook;