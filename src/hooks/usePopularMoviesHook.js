import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from '../store/moviesSlice';

const usePopularMoviesHook = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMoviesHook;