import React from 'react';
import {url} from "../../constants/url";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMovie} from "../../store/movie.slice";
import "./MovieCard.css"

const MovieCard = ({movie, status}) => {
    return (
        <div className={"card"} >
            {status === 'pending' && <h1>Loading....</h1>}
            <NavLink
                to={"id="+movie.id.toString()}>
                <div>{<img src={`${url.img_url}` + "w300" + `${movie.poster_path}`} alt=""/>}
                    <h3>{movie.title}</h3>
                    <h4>{movie.vote_average}</h4>

                </div>
            </NavLink>


        </div>
    );
};

export {MovieCard};