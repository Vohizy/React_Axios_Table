import React from "react";
import Table from "./Table";
import { voyage } from "../data/voyage";
import "../style/main.css";

export default function Voyage() {
    const item = ["Jour de départ", "Heure de départ", "Ville de départ", "Ville de destination", "Place disponible", "Matricule véhicule"]
    return(
        <>
        <h1>Voyages du jour</h1>
        <Table title={item}>
            {
                voyage.map((elt, k)=>(
                    <tr key={k}>
                        <td>{elt.jour}</td>
                        <td>{elt.heure}</td>
                        <td>{elt.ville_depart}</td>
                        <td>{elt.ville_arrivee}</td>
                        <td>{elt.place}</td>
                        <td>{elt.vehicules}</td>
                    </tr>
                ))
            }
        </Table>
        </>
    )
}