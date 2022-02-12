import React, {useEffect} from 'react';

import "./Header.css"


const Header = () => {
    const body = document.body;
    const byTagName = document.getElementsByTagName("*");
    const header = document.getElementsByClassName("header");
    let switchStatus = "true";
if (switchStatus ==="folse"){
    for (let i of byTagName){
        if (i.style.color === "black"){
            i.style.color = "#ffffff"
        } else {
            i.style.color = "black"
        }
    }}

    const switchOnOff = () => {
        console.log(switchStatus)
        if (switchStatus === "folse") {
            switchStatus = "true"
            body.style.background = "#ffffff"
            for (let i of header) {
                i.style.background = "#E5E5E5"
            }
            for (let i of byTagName){
                i.style.color="black"
            }
        } else {
            switchStatus ="folse"
            body.style.background = "black"
            for (let i of header) {
                i.style.background = "#1f2123"
            }
            for (let i of byTagName){
                i.style.color="#ffffff"
                console.log(i)
            }
        }


    };


    return (


        <div className={"header"}>
            hello!
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