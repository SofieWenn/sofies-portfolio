import React from 'react'
import { Link } from 'react-router-dom'
import spelbild from '../assets/images/alien_spel.png';
import kalenderbild from '../assets/images/behnam-norouzi-QlGQFKUm4lE-unsplash.jpg';
import appbild from '../assets/images/rob-hampson-cqFKhqv6Ong-unsplash.jpg';
import mytologibild from '../assets/images/asaguden_tor-gu97oolvdAcOpyzIsdaxvg.jpg';
import hängagubbe from '../assets/images/hangman.png';
import smile from '../assets/smile.png';

export default function PrivatProjekt() {

    return (
        <>
        <div className='container-projekt'>
            <h2 className='projekt-rubrik'>Mina Privata Projekt</h2>
            <p className='projekt-text'>Här hittar du projekt som jag har gjort på fritiden för att praktiskt tillämpa och utöka mina kunskaper, och för att jag tycker det är kul att koda så klart.
                <img src={smile} alt="smiley ikon" className="smile-icon" />
            </p>


            <div className="card-privat">
                <img src={spelbild} className="card-img-top" alt="Bild på ett dataspel" />
                <p className='bildtext'><strong>Foto hämtat från:</strong> Mitt spel</p>
                <div className="card-body">
                    <h2 className="card-title">Ett Plattforms-Spel</h2>
                    <p className="card-text">
                        Jag har påbörjat ett spelprojekt med hjälp av Python och biblioteket Pygame. Det ska bli ett plattformsspel med olika världar där karaktären stöter på fiender längs vägen.
                    </p>
                </div>
            </div>

            <div className="card-privat">
                <img src={kalenderbild} className="card-img-top" alt="Bild på en kalenderapp" />
                <p className='bildtext'><strong>Fotograf</strong> Behnam Norouzi</p>
                <div className="card-body">
                    <h2 className="card-title">En Kalender</h2>
                    <p className="card-text">
                        Ett kalender-projekt är påbörjat. Jag håller på att skapa en sådan app med hjälp av Python och biblioteket Kivy. Jag har tänkt att man bland annat ska kunna lägga till olika event på särskilda datum som kan sparas i kalendern.
                    </p>
                </div>
            </div>

            <div className="card-privat">
                <img src={appbild} className="card-img-top" alt="Bild på en kalenderapp" />
                <p className='bildtext'><strong>Fotograf</strong> Rob Hampson</p>                
                <div className="card-body">
                    <h2 className="card-title">Ett Anteckningsblock</h2>
                    <p className="card-text">
                        Jag håller på att skapa en anteckningsblock-app med hjälp av Python och biblioteket Kivy. Jag har tänkt att man ska kunna skriva ner saker man vill komma ihåg medan man är ute och kanske inte har papper och penna med sig. I appen vill jag att man ska kunna ändra teckensnitt och storlek. Och ändra formatet på texten så den kan bli fet/kursiv/understruken.
                    </p>
                </div>
            </div>

            <div className="card-privat">
                <img src={mytologibild} className="card-img-top" alt="Bild på en kalenderapp" />
                <p className='bildtext'><strong>Foto hämtat från:</strong> © Nationalmuseum, Stockholm.</p>
                <div className="card-body">
                    <h2 className="card-title">En webbsida</h2>
                    <p className="card-text">
                        Jag håller på att skapa en webbsida där man kan läsa om olika mytologiska väsen och om nordisk folktro. Detta projekt tar jag fram med hjälp av React.
                    </p>
                </div>
            </div>

            <div className="card-privat">
                <img src={hängagubbe} className="card-img-top" alt="Bild på en kalenderapp" />
                <p className='bildtext'><strong>Foto hämtat från:</strong> © Google Play</p>
                <div className="card-body">
                    <h2 className="card-title">Ett hänga-gubbe-spel</h2>
                    <p className="card-text">
                        Jag har skapat ett "hänga-gubbe"-spel med hjälp av Python och pygame. Det går ut på att man ska gissa bokstäver och till slut få fram ett djurnamn (t.ex. kamel). Om man gissar fel byggs häng-ställningen upp tills man har gjort så månaga felgissningar att gubben blir hängd.
                    </p>
                </div>
            </div>

        </div>
        </>
    )
}