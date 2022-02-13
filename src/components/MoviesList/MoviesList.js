import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import moviesReducer, {getAllMovies} from "../../store/movie.slice";
import {MovieCard} from "../MovieCard/MovieCard";
import "./MoviesList.css";

const MoviesList = () => {
    const {movies, status, page} = useSelector(state => state["moviesReducer"]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies(page))
    }, []);


    const moreMovie = () => {
        dispatch(getAllMovies({page: page}))
    };

    return (
        <div className={"list"}>
            {status === 'pending' && <h1>Loading....</h1>}
            <div className={"id"} id={"1"}></div>

            <div className={"lists"}>{

                movies.map(value => <div className={"cardList"}><MovieCard key={value.id} movie={value}
                                                                           status={status}/></div>)
            }</div>

            <a href="#1">
                <button onClick={() => {
                }} id="myBtn">Top
                </button>
            </a>
            <div className={"windowMore"}>
                <button className={"buttonMore"} onClick={() => moreMovie()}>more movies</button>
            </div>

        </div>
    );
};

export {MoviesList};