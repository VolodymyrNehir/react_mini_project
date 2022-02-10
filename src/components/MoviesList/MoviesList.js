import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import moviesReducer, {getAllMovies} from "../../store/movie.slice";
import {MovieCard} from "../MovieCard/MovieCard";
import "./MoviesList.css";

 const MoviesList = () => {
  const {movies, status,page} = useSelector(state => state["moviesReducer"]);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getAllMovies(page))
  },[]);



   const moreMovie = ()=>{
      dispatch(getAllMovies({page:page}))
    };

    return (
        <div className={"list"}>
            {status === 'pending' && <h1>Loading....</h1>}
<div className={"lists"}>{
    movies.map(value => <MovieCard key={value.id} movie={value} status={status} />)
}</div>

            <button onClick={()=> moreMovie()}>more</button>
        </div>
    );
};

export {MoviesList};