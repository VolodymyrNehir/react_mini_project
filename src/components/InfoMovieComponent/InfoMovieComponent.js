import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import moviesReducer, {getMovie} from "../../store/movie.slice";
import "./MovieComponent.css";
import {movieService} from "../../services/movie.service";

const InfoMovieComponent = () => {
    const location = window.location.href;
    const getId = (location) => {
        const arr = [];

        for (let i = location.length - 1; i >= 0; i--) {
            if (location[i] === '=') {
                break
            }
            arr.push(location[i]);
        }
        return arr.reverse().join('')
    };

    const idMovie = getId(location);
    const dispatch = useDispatch();
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        dispatch(getMovie({id: idMovie}))
    }, []);
    useEffect(() => {
        const getVideos = async () => {
            const response = await movieService.getVideo(idMovie);
            setVideos(response)


        }
        getVideos()
    }, []);


    useEffect(() => {
        movieService.getVideo(idMovie)
    }, [])
    const {movie} = useSelector(state => state["moviesReducer"]);
    return (
        <div className={"movieInfaAll"}>
            <div className="movieInfa">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="poster_path"/></div>
                <div className={"info"}>
                    <div>
                        <h3>Рік випуску</h3>
                        <p>{movie.release_date}</p>
                    </div>

                    {/*<div>*/}
                    {/*    <h3>Країна</h3>*/}
                    {/*    <p>{movie?.production_countries[0]?.name}</p>*/}
                    {/*</div>*/}

                    <div>
                        <h3>Час</h3>
                        <p>{movie.runtime} хв</p>
                    </div>

                    <div>
                        <h3>Для дорослих</h3>
                        <p>{movie.adult ? 'Так' : 'Ні'}</p>
                    </div>

                    <div>
                        <h3>Середні бал</h3>
                        <p>{movie.vote_average}</p>
                    </div>

                    <div>
                        <h3>Огляд</h3>
                        <p>{movie.overview}</p>
                    </div>

                </div>
            </div>
            <div className={"windowYotube"}>
                <div>
                    <iframe title={"video"} className={"yotUbe"}
                            src={`https://www.youtube.com/embed/${videos?.results[0]?.key}`}/>

                </div>
            </div>


        </div>
    );
};

export {InfoMovieComponent};