import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from '../store/moviesSlice';

const usePopularMoviesHook = () => {
    const dispatch = useDispatch();
    const [loader, setIsLoader] = useState(true);
    const popular_movies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = useCallback(async () => {
        try {
            setIsLoader(true);
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error("Error fetching Popular Movies", error);
        } finally {
            setIsLoader(false);
        }
    }, [dispatch])

    useEffect(() => {
        if (!popular_movies) {
            getPopularMovies();
        } else {
            setIsLoader(false);
        }
    }, [getPopularMovies, popular_movies])

    return { loader };
}

export default usePopularMoviesHook;