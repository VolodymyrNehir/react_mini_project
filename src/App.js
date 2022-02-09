import logo from './logo.svg';
import {useEffect} from "react";

import './App.css';

import {Route, Routes} from "react-router-dom";
import {Layout} from "./pages";
import {Movie} from "./pages/Movie/Movie";
import {MoviesList} from"./components/index"

function App() {


    return (

        <div className="App">
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<MoviesList/>}/>
                    <Route path={"/id=:id"} element={<Movie/>}/>

                </Route>


            </Routes>
        </div>
    );
}

export default App;
