import React from 'react';
import {Headr, MoviesList} from "../../components";
import {Movie} from "../Movie/Movie";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
<Headr/>
            <Outlet/>

        </div>
    );
};

export {Layout};