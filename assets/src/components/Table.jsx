import React from "react";

export default function Table(props){
    const {title, children} = props;
    return(
        <>
            <table>
                <thead>
                    {
                        title.map((elt, k)=>(
                            <th key={k}>{elt}</th>
                        ))
                    }
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </>
    )
}