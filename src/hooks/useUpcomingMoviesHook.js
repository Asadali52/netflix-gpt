import { useCallback, useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMoviesHook = () => {
    const dispatch = useDispatch();
    const [loader, setIsLoader] = useState(true);
    const upcoming_movies = useSelector(store => store.movies.upcomingMovies);

    const getUpcomingMovies = useCallback(async () => {
        try {
            setIsLoader(true);
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error("Error fetching upcoming movies", error)
        } finally {
            setIsLoader(false);
        }
    }, [dispatch])

    useEffect(() => {
        if (!upcoming_movies) {
            getUpcomingMovies();
        } else {
            setIsLoader(false);
        }
    }, [getUpcomingMovies, upcoming_movies]);

    return { loader };
}

export default useUpcomingMoviesHook