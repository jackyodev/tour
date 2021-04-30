import React, { useEffect, useState } from "react";

import { Loading } from "./subComponents/loading.js";
import "../scss/garden.scss";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";


const tourSection = [{
    section : "History",
    img: "https://queensbotanical.org/wp-content/uploads/2019/01/Roses.jpg",
    url: "history"
   
},{
    section: "Sustainability & Landscape",
    img: "https://queensbotanical.org/wp-content/uploads/2019/02/2018.6.6_CREDIT-Jess-Brey018.png",
    url: "sustainability"

},{
    section: "Parking Garden",
    img: "https://queensbotanical.org/wp-content/uploads/2019/01/Rendering-of-new-Parking-Garden-in-construction.-Sven-Johnson-Illustration.png",
    url: "parking"

},{
    section: "Biotope & Bioswale",
    img: "https://queensbotanical.org/wp-content/uploads/2019/02/with-labels-1024x541.png",
    url: "biotope"
}]


const renderSection = (state) => {
    switch(state) {
        case "history":
        return <h1> History</h1>

        case "parking": 
        return <h1> Parking </h1>

        case "biotope": 
        return <h1> Biotope </h1>
        
        case "sustainability": 
        return <h1> Sustainability </h1>
        
    }
}


export function Tour() {

    const [section, setSection] = useState("");

    const mapNav = () => {
        let map = tourSection.map((el,i)=> {
            return ( 
                <div>
                <div onClick = { () => {
                    setSection(`${el.url}`)
                }}> {el.section} </div>
                </div>
            )
        })
        return map
    
    }



    return (
    <>
       {mapNav()} 
       {renderSection(section)}
    </>

    )
}

const exported = { Tour };
export default exported;
