import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/moviesSlice";

const useMovieTrailerHook = (movieId) => {
  const dispatch = useDispatch();

  const trailer = useSelector(store => store.movies.trailerVideo);

  const getMovieVideos = useCallback(async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    if (!json.results || json.results.length === 0) {
      console.warn("No videos found for this movie:", movieId, json);
      return;
    }
    const filterData = json.results.filter(video => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0]
    dispatch(addTrailerVideo(trailer))
  }, [dispatch, movieId]);

  useEffect(() => {
    if (!trailer) {
      getMovieVideos();
    }
  }, [getMovieVideos, trailer])

};

export default useMovieTrailerHook;