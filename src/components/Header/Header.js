import React, {useEffect} from 'react';

import "./Header.css"


const Header = () => {
    const body = document.body;
    const header = document.getElementsByClassName("header");
    let switchStatus = "true";




    const switchOnOff = () => {
        console.log(switchStatus)
        if (switchStatus === "folse") {
            switchStatus = "true"
            body.style.background = "#ffffff"
            for (let i of header) {
                i.style.background = "#E5E5E5"
            }

        } else {
            switchStatus = "folse"
            body.style.background = "black"
            for (let i of header) {
                i.style.background = "#1f2123"
            }

        }


    };


    return (


        <div className={"header"}>
            <label className="switch">
                <input onClick={() => {
                    switchOnOff()

                }} type="checkbox"/>
                <span className="slider round"></span>
            </label>

        </div>
    );

};

export {Header};