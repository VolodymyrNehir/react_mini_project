import React, {useEffect} from 'react';

import "./Header.css"
import ".../index.css";


const Header = () => {
    const body = document.body;
    const byTagName = window.document.body.getElementsByTagName("p");
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


//         if (switchStatus === "true") {
//
// if (switchStatus ==="true"){
// switchStatus = "folse"
// }else {
//     switchStatus="true"
// }
//         }
        // } else {
        //     switchStatus = "true"
        //     for (let i of byTagName){
        //         i.style.color="#ffffff"
        //     }
        // }


        // else {
        //     switchStatus = "folse"
        //
        // }
        // ;
        // if (switchStatus !== "true") {
        //
        //
        // }
        //
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