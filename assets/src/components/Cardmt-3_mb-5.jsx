import React from "react";
export function Card(props){
    const{label1,label2}=props;
    return(
        <div className="card mt-3 mb-5">
            <h3 className="ui header ml-2 mt-2">{label1}</h3>
            <p className="mr-2 ml-2 mb-2">{label2}</p>
        </div>
    )
}