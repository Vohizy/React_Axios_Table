import React from "react";
import { requests } from "../data/requests";
import "../style/main.css";


export default function FixedSideItems() {
    return(
        <>
            <div class="sidenav">
                {
                    requests.map((item, k)=>(
                        <a key={k} href="">{item}</a>
                    ))
                }
            </div>
        </>
    )
}