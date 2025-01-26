import "./InfoContainer.css"
import bg from "../../assets/paper1.png"

import React from "react"
export default function InfoContainer({title, content, navBtns, navType}){
    console.log(navType)

    return(
        <div className="info-container">
            <img src={bg} alt="bg" className="info-container-bg"/>
            <div className="info-container-content">
                <div className="info-container-content-main">
                    <h2>{title}</h2>
                    <>{content}</>
                </div>
                           
                <div className={navType == "multi" ? "info-container-nav nav-multi" : "info-container-nav nav-single"}>
                    {navBtns}
                </div>
            </div>
        </div>
    )
}