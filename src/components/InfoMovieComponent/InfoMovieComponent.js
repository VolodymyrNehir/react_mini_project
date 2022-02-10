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
        dispatch(getMovie({id:ids}))
    }, []);
const {movie } =useSelector(state => state["moviesReducer"]);
    return (
        <div>
            <div><img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt=""/></div>
            <div className="movieInfa"><div><div>Рік випуску</div>
                <div>Країна</div>
                <div>Час</div>
                <div>Для дорослих</div>
                <div>Середні бал</div>
                <div>Огляд</div></div>
                <div><div>{movie.release_date}</div>
                    {/*<div>{movie.production_countries[0].name}</div>*/}
                    <div> {movie.runtime} хв</div>
                    <div>{movie.adult ? 'Так' : 'Ні'}</div>
                    <div>{movie.vote_average}</div>
                    <div>{movie.overview}</div></div></div>



        </div>
    );
};

export {InfoMovieComponent};