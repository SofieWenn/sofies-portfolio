import React from 'react'
import { Link } from 'react-router-dom'
import spelbild from '../assets/images/alien_spel.png';


export default function Projekt() {
    return (
        <>
        <div className='projekt-container'>
            <div className="card-project">
                <img src={spelbild} className="card-img" alt="Spelbild" />
                <div className="card-body">
                    <h2 className="card-title">Projekt</h2>
                    <p className="card-text">Välkommen till min projektöversikt. Här hittar du ett urval av mina arbeten, från akademiska uppgifter och professionell fotografi, till egna kreativa projekt
                    </p>
                    <p className='card-text'>Använd knapparna nedan för att utforska projekten inom de kategorier som intresserar dig mest.</p>
                    <ul className='card-list'>
                        <li><a href="/skolprojekt" className="btn btn-primary">Mina skolprojekt</a></li>
                        <li><a href="/privata-projekt" className="btn btn-primary">Mina privata projekt</a></li>
                        <li><a href="/fotograf-projekt" className="btn btn-primary">Mina fotograf-projekt</a></li>
                        <li><a href="/foton" className='btn btn-primary'>Mina fotografier</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}