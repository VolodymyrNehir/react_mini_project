import React from 'react';
import {url} from "../../constants/url";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMovie} from "../../store/movie.slice";

const MovieCard = ({movie, status}) => {
    console.log(movie.id);
    return (
        <div>
            {status === 'pending' && <h1>Loading....</h1>}
            <NavLink
                to={"id="+movie.id.toString()}>
                <div>{<img src={`${url.img_url}` + "w300" + `${movie.poster_path}`} alt=""/>}
                    <h3>{movie.title}</h3>
                    <h2>{movie.vote_average}</h2>
                </div>
            </NavLink>


        </div>
    );
};

export {MovieCard};