import React from "react";
import VilleItems from "./subcomponent/VilleItems";


export default function Ville() {
    return(
        <>
            <h1>Ville de destination</h1>
            <div className="container-fluid">
                <div id="row">
                    <VilleItems />
                </div>
            </div> 
        </>
    )
}