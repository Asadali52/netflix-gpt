import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMoviesHook = () => {
    const dispatch = useDispatch();
    const [loader, setIsLoader] = useState(true);

    const getUpcomingMovies = async () => {
        try {
            setIsLoader(false);
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error("Error fetching upcoming movies", error)
        } finally {
            setIsLoader(false);
        }
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    return { loader };
}

export default useUpcomingMoviesHook