import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from '../store/moviesSlice';

const useNowPlayingMoviesHook = () => {
    const dispatch = useDispatch();
    const [loader, setIsLoader] = useState(true);

    const getNowPlayingMoving = async () => {
        try {
            setIsLoader(false);
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("Error fetching Playing Movies", error);
        } finally {
            setIsLoader(false);
        }
    }

    useEffect(() => {
        getNowPlayingMoving();
    }, [])

    return { loader };
}

export default useNowPlayingMoviesHook;