import React from "react";
import { city } from "../../data/ville";
import "../../style/main.css"


export default function VilleItems() {
    return(
        <>
            {
                city.map((item)=>(
                    <div className="swiper-slide">
                        <div className="img-container">
                            <img src={item.image} alt="tahina"></img>
                        </div>
                        <h6>{item.nom}</h6>
                    </div>
                ))
            }
        </>
    )
}