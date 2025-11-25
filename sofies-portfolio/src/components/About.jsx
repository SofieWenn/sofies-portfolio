import React from "react"
import { Link } from "react-router-dom"
import profilbild from "../assets/images/Jag b svartvit.jpg"

export default function About() {
    return (
        <div className="card">
            <img src={profilbild} className="card-img" alt="Profilbild" />
            <div className="card-body">
                <h2 className="card-title">Här kommer lite information om mig</h2>
                <p className="card-text">Jag är en nyutexaminerad systemvetare som bor i Grängesberg i Ludvika kommun tillsammans med min man och våra tre tonårsbarn. 
                    Jag har tidigare arbetat inom serviceyrken - i butik, på café och som fotograf.
                </p>
                <h3 className="card-subtitle"><strong>Tekniska Färdigheter:</strong></h3>
                <p className="card-text">Jag har erfarenhet av Python, Java och C#, och webbutveckling med JavaScript, React och Angular. Jag har även arbetat med databaser och SQL.</p>
                <h3 className="card-subtitle"><strong>Personliga Egenskaper:</strong></h3>
                <p className="card-text">Jag är nyfiken, strukturerad, lösningsorienterad och samarbetsinriktad.</p>
                <h3 className="card-subtitle"><strong>Språk:</strong></h3>
                <p className="card-text">Svenska (modersmål) och Engelska (flytande i tal och skrift)</p>
                <h3 className="card-subtitle"><strong>Övrigt:</strong></h3>
                <p className="card-text">B-körkort</p>
                <p className="card-text">Klicka på knappen nedan kan för att komma till mina projekt</p>
                <Link to="/projekt" className="btn btn-primary">
                    Mina Projekt
                </Link>
            </div>
        </div>
    )
}