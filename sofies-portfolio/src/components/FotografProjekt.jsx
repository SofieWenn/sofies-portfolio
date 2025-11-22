import React from "react"
import ImageCarousel from "./ImageCarousel";
import ludvikaBilder from '../assets/images/Nya fotoboken.jpg';
import fotobokLudvika from '../assets/images/Fotoboken framsida.jpg';
import fotobokInsida from '../assets/images/Nya fotoboken insida.jpg';
import fotobokGamlaInsida from '../assets/images/Gamla fotoboken insida.jpg';
import ludvikaFolder from '../assets/images/Foldern.jpg';
import ludvika from '../assets/images/Ludvika.jpg';
import grängesFolder from '../assets/images/Grängesbergsfolder.jpg';
import sunGranFolder from '../assets/images/SunnansjöGrangärde.jpg';
import granUtanpå from '../assets/images/Grangärde folder utanpå.jpg';
import granInuti from '../assets/images/Grangärde folder inuti.jpg';
import sunInuti from '../assets/images/Sunnansjö folder insida.jpg';
import sunUtanpå from '../assets/images/Sunnansjö folder baksida.jpg';
import diktbok from '../assets/images/Diktboken.jpg';
import sagolik from '../assets/images/Bok 2.jpg';
import museum from '../assets/images/Broschyr om museum.jpg';
import landar from '../assets/images/Landar, april.jpg';
import ankor from '../assets/images/Ankor på snövandring, februari.jpg';
import cassels from '../assets/images/Cassels vinterbild, Sofie Andersson.jpg';
import brygga from '../assets/images/Bryggan och ön svartvit.jpg';
import bryggan from '../assets/images/Bryggan.jpg';
import h2obok from '../assets/images/Boken.jpg';
import stuga from '../assets/images/Fritidsstugan vid skidspåren.jpg';
import malmström from '../assets/images/Malmströms ur och optik (uträtad).jpg';
import balansvåg from '../assets/images/Balansvåg.jpg';
import malingarna from '../assets/images/Malingarna.jpg';
import vildmarken from '../assets/images/Vildmark.jpg';

const PROJECT_IMAGES = [sunGranFolder, granUtanpå, granInuti, sunInuti, sunUtanpå];
const PROJECT_LUDVIKA_IMAGES = [ludvikaFolder, ludvika];
const PROJECT_LUDVIKABOK_IMAGES = [ludvikaBilder, fotobokLudvika, fotobokInsida, fotobokGamlaInsida];
const PROJECT_KALENDER_IMAGES = [landar, ankor, cassels, brygga, bryggan];
const PROJECT_FOLDER_IMAGES = [stuga, malmström, balansvåg, malingarna, vildmarken];

export default function FotografProjekt() {

    return (
        <>
        <div className='container-fotograf'>
            <h2 className='projekt-rubrik'>Mina Fotograf-Projekt</h2>
            <p className='projekt-text'>Här hittar du projekt som jag har gjort under tiden jag arbetade som fotograf</p>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={PROJECT_LUDVIKABOK_IMAGES} 
                    altText="Bok om Ludvika" 
                />
                <div className="card-body">
                    <h2 className="card-title">En bok om Ludvika</h2>
                    <p className="card-text">
                        Jag och mina medarbetare skapade en bok som heter "Ludvikabilder.se" där vi dokumenterade olika platser i Ludvika kommun. Några av mina bilder var med i den, men även andra fotografers bilder fanns med. Vi sålde den hos olika bokförlag och pengarna gick till Rädda barnen.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={PROJECT_LUDVIKA_IMAGES} 
                    altText="Folder för Ludvika" 
                />
                <div className="card-body">
                    <h2 className="card-title">Folder för Ludvika</h2>
                    <p className="card-text">
                        Vi skapade en folder för Ludvika stad där vi visade upp olika turistmål som finns i staden. Några av mina bilder var med i den, men även andra fotografers bilder fanns med. Den kunde hämtas på turistbyrån i Ludvika.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <img src={grängesFolder} className="card-img-top" alt="Bild på Grängesbergsfoldern" />
                <div className="card-body">
                    <h2 className="card-title">Folder för Grängesberg</h2>
                    <p className="card-text">
                        Vi skapade en folder för Grängesberg där vi visade upp olika turistmål som finns i byn. Vissa av mina bilder var med i den, men även andra fotografer hade bilder som fanns med. Den kunde hämtas på turistbyrån i Ludvika.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={PROJECT_IMAGES} 
                    altText="Foldrar för Sunnansjö och Grangärde" 
                />
                <div className="card-body">
                    <h2 className="card-title">Foldrar för Sunnansjö och Grangärde</h2>
                    <p className="card-text">
                        Vi skapade även foldrar för Sunnansjö och Grangärde där vi visade upp olika turistmål som finns i byarna. Jag hade med en del av mina bilder, men även andra fotografer hade med sina bilder. Den kunde hämtas på turistbyrån i Ludvika.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <img src={diktbok} className="card-img-top" alt="Bild på Diktboken" />
                <div className="card-body">
                    <h2 className="card-title">Diktbok</h2>
                    <p className="card-text">
                        En medarbetare hade en kontakt som ville publicera en diktsamling som han hade skapat under årens lopp. Så det hjälpte vi honom med genom att göra en diktbok där jag (och några andra fotografer) fick möjlighet att fotografera bilder som passade ihop med dikterna. Det är även bilder med som han själv har valt från sina privata album.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <img src={sagolik} className="card-img-top" alt="Bild på boken Sagolikt och levande" />
                <div className="card-body">
                    <h2 className="card-title">Bok: Sagolikt och levande</h2>
                    <p className="card-text">
                        Ett annat projekt som vi gjorde var en fotobok som vi kallade för <strong>Sagolikt och levande</strong> där vi använde oss av bilder som några av oss fotografer hade tagit, som vi tyckte passade in på temat. Boken kunde köpas hos olika bokförlag och pengarna gick till Rädda barnen.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <img src={museum} className="card-img-top" alt="Bild på broschyren om museum" />
                <div className="card-body">
                    <h2 className="card-title">Broschyr om museum i Ludvikabygden</h2>
                    <p className="card-text">
                        Vi skapade även en broschyr där vi visade upp vilka museum som finns i Ludvikatrakten. Jag fotograferade många av bilderna som fanns med i den, men det var även andra fotografers bilder med. Broschyren kunde hämtas på turistbyrån i Ludvika.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={PROJECT_KALENDER_IMAGES} 
                    altText="Kalenderbilder" 
                />
                <div className="card-body">
                    <h2 className="card-title">Kalender</h2>
                    <p className="card-text">
                        Ett företag kontaktade oss för att fråga om vi ville ha med bilder i en kalender som skulle skickas ut till alla hushåll i kommunen inför nästkommande år. Det ville vi så klart vara med på! Tyvärr har jag inga bilder på själva kalendern, men jag tar med några av bilderna som jag har fotograferat som blev med i den.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={PROJECT_FOLDER_IMAGES} 
                    altText="Bilder till foldrarna för Nyhammar och Fredriksberg" 
                />
                <div className="card-body">
                    <h2 className="card-title">Foldrar för Nyhammar och Fredriksberg</h2>
                    <p className="card-text">
                        Vi skapade foldrar för både Nyhammar och Fredriksberg. Jag har tyvärr inga bilder på dessa men jag kan lägga in några bilder som jag har fotograferat som blev med i den. Foldrarna kunde hämtas på Turistbyrån i Ludvika.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <img src={h2obok} className="card-img-top" alt="H2O boken" />
                <div className="card-body">
                    <h2 className="card-title">Bok med vattenbilder</h2>
                    <p className="card-text">
                        Ett annat projekt vi gjorde var en H2O-bok där vi använde fotografier vi hade tagit av sådant som hade med vatten att göra. Boken kunde köpas via olika bokförlag och pengarna gick till Rädda barnen.
                    </p>
                </div>
            </div>

        </div>
        </>
    )
}