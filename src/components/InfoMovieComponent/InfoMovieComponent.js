import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import moviesReducer, {getMovie} from "../../store/movie.slice";

const InfoMovieComponent = () => {
    const location = window.location.href;
    const getId = (location) => {
        const arr = []
        for (let i = location.length - 1; i >= 0; i--) {
            if (location[i] === '=') {
                break
            }
            arr.push(location[i]);
        }
        return arr.reverse().join('')
    };
    const ids = getId(location);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovie(ids))
    }, []);
const {movie } =useSelector(state => state["moviesReducer"]);
    console.log(movie)
    return (
        <div>

        </div>
    );
};

export {InfoMovieComponent};