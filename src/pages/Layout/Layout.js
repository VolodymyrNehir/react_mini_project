import React from 'react';
import {Header, MoviesList} from "../../components";
import {Movie} from "../Movie/Movie";
import {Outlet} from "react-router-dom";
import "./Layout.css"

const Layout = () => {
    return (
        <div>
<Header/>
        <div className={"outlet"}><Outlet/></div>

        </div>
    );
};

export {Layout};