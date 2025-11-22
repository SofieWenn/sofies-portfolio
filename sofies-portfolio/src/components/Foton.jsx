import React from "react";
import { Link } from 'react-router-dom'
import ImageCarousel from "./ImageCarousel";
import frog from '../assets/images/Froggystyle a.jpg';
import krokus from '../assets/images/Krokus.jpg';
import flower from '../assets/images/Lila blomma a.jpg';
import krokusen from '../assets/images/Lila.jpg';
import liten from '../assets/images/Liten blomma a.jpg';
import väldigtNära from '../assets/images/Orange blomma.jpg';
import orca from '../assets/images/orcas.jpg';
import orkide from '../assets/images/orkide-rundahrn_120417464_139289327.jpg';
import bi from '../assets/images/Landar, april.jpg';
import löv from '../assets/images/Löv.jpg';
import ros from '../assets/images/Vit ros.jpg';
import biet from '../assets/images/Bee.jpg';
import nyckelpiga from '../assets/images/Nyckelpiga på vit växt.jpg';
import blomma from '../assets/images/Fönsterblomma.jpg';
import vildmark from '../assets/images/Vildmark.jpg';
import sjöutsikt from '../assets/images/Väsman med utsikt mot skuthamn (svartvit).jpg';
import rinner from '../assets/images/Rinnande vatten.jpg';
import sjön from '../assets/images/Bryggan och ön svartvit.jpg';
import bryggan from '../assets/images/Bryggan.jpg';
import båten from '../assets/images/Båten (svartvit).jpg';
import dimmigt from '../assets/images/Dimmig sjöutsikt splittoning a.jpg';
import dimmigbrygga from '../assets/images/Dimmigt vid bryggan c.jpg';
import sörvik from '../assets/images/Dimmigt vid sörvik.jpg';
import isSjö from '../assets/images/Islossning.jpg';
import malingar from '../assets/images/Malingarna.jpg';
import grangärde from '../assets/images/Vy över grangärde.jpg';
import väg from '../assets/images/Vinterväg.jpg';
import gammelgård from '../assets/images/Gammelgården a.jpg';
import piren from '../assets/images/Piren a.jpg';
import stopet from '../assets/images/Stopet sommar Grängesberg, Sofie Andersson.jpg';
import västra from '../assets/images/Västergrillen Grängesberg, Sofie Andersson.jpg';
import ludvikagård from '../assets/images/Ludvika Gård a.jpg';
import källfallet from '../assets/images/Källfallet Grängesberg, Sofie Andersson.jpg';
import knusselbo from '../assets/images/Knusselbo (Bergslagsbyn) Grängesberg, Sofie Andersson.jpg';
import malmström from '../assets/images/Malmströms ur och optik (uträtad).jpg';
import tunnel from '../assets/images/Tunnel vid Disponentparken Grängesberg, Sofie Andersson.jpg';
import dollarstore from '../assets/images/Ny ingång dollarstore.jpg';
import bygge from '../assets/images/Bygge av kajbron.jpg';
import kajbroBygge from '../assets/images/Bygge kajbro.jpg';
import byggeKajbro from '../assets/images/Kajbron bygge.jpg';
import minigolf from '../assets/images/Minigolf Mossplan.jpg';
import marnässkolanGamla from '../assets/images/Marnässkolgård.jpg';
import solvikBygge from '../assets/images/Bygge Solvikskolan.jpg';
import gruvlave from '../assets/images/Gruvlave i Håksberg, Sofie Andersson.jpg';
import tjejerna from '../assets/images/julia_o_isabelle_busar_svartvit_5335c738ddf2b33bb421b6d1.jpg';
import flickorna from '../assets/images/julia-o-isabelle_96202368.jpg';
import pontus from '../assets/images/Sand svartvit.jpg';
import pontusoIsabelle from '../assets/images/Isabelle o Pontus.jpg';
import undersökning from '../assets/images/Undersöker.jpg';
import selfie from '../assets/images/selfie1_55be0b9addf2b3444f8b479d.jpg';
import girls from '../assets/images/Flickorna c sv.jpg';
import gungan from '../assets/images/Julia vid gungan.jpg';
import isabelle from '../assets/images/img_6959_152855887.jpg';
import isabelleStudio from '../assets/images/Isabelle med mössa a beskuren.jpg';
import julia from '../assets/images/julia_i_soffan_svartvit_54340474e087c3208f607c77.jpg';
import cyklar from '../assets/images/har_gar_det_undan_53878d19ddf2b32c3f791bf5.jpg';
import måttband from '../assets/images/Måttband sv.jpg';
import praliner from '../assets/images/Praliner a.jpg';
import kaffekopp from '../assets/images/Kaffekopp med fallande bönor.jpg';
import coffee from '../assets/images/Its coffee time sv.jpg';
import jack from '../assets/images/Jack (sRGB).jpg';
import lykta from '../assets/images/Ljuslykta o kotte.jpg';
import kottar from '../assets/images/Tre små kottar sv.jpg';
import heart from '../assets/images/Heart.jpg';
import högtalare from '../assets/images/Högtalaren (sRGB).jpg';
import headpods from '../assets/images/Headpods (sRGB).jpg';
import chicken from '../assets/images/Chickens.jpg';
import minions from '../assets/images/2 minioner på skogspromenad.jpg';
import fickur from '../assets/images/Fickuret.jpg';
import gaffel from '../assets/images/Gaffeln.jpg';
import kalleAnka from '../assets/images/Kalle Anka närmare.jpg';
import bil from '../assets/images/Leksaksbil.jpg';
import höna from '../assets/images/Hönan (uträtad).jpg';
import ankor from '../assets/images/Ankor på snövandring, februari.jpg';
import bebisRocky from '../assets/images/rocky_bebis_536e9290e087c336726143a7.jpg';
import rocky from '../assets/images/Rocky 2021 (sRGB).jpg';
import sötRocky from '../assets/images/rocky_rundahorn_536e92e02a6b225bfcf1887f.jpg';
import sixten from '../assets/images/Porträtt a.jpg';
import giraff from '../assets/images/img_3482_53d4fb5de087c33baea5cc05.jpg';
import gorilla from '../assets/images/gorillan_53d5e7e89606ee7be62fac5f.jpg';
import akvarium from '../assets/images/fishy_54df6c3c9606ee16e5a2f3f4.jpg';
import domherre from '../assets/images/Domherren a.jpg';


const MACRO_IMAGES = [ 
    krokus, 
    flower, 
    krokusen, 
    liten, 
    väldigtNära, 
    orca,
    orkide,
    bi,
    löv,
    ros,
    biet,
    nyckelpiga,
    blomma
];

const LANDSKAP_IMAGES = [
    vildmark, 
    sjöutsikt, 
    rinner, 
    sjön, 
    bryggan,
    båten,
    dimmigt,
    dimmigbrygga,
    sörvik,
    isSjö,
    malingar,
    grangärde,
    väg
];

const DOKUMENTAR_IMAGES = [
    piren,
    stopet,
    västra,
    ludvikagård,
    tunnel,
    källfallet,
    knusselbo,
    malmström,
    gammelgård,
    dollarstore,
    bygge,
    kajbroBygge,
    byggeKajbro,
    minigolf,
    gruvlave,
    marnässkolanGamla,
    solvikBygge,
];
const PORTRAIT_IMAGES = [
    tjejerna,
    flickorna,
    pontus,
    pontusoIsabelle,
    girls,
    julia,
    cyklar,
    isabelle,
    undersökning,
    selfie,
    gungan,
    isabelleStudio,
];
const PRODUCT_IMAGES = [
    måttband,
    kaffekopp,
    praliner,
    coffee,
    jack,
    lykta,
    kottar,
    heart,
    högtalare,
    headpods,
    kalleAnka,
    chicken,
    minions,
    bil,
    fickur,
    gaffel
];
const ANIMAL_IMAGES = [
    frog,
    höna,
    ankor,
    domherre,
    bebisRocky,
    rocky,
    sötRocky,
    sixten,
    giraff,
    gorilla,
    akvarium,
];

export default function Foton() {
    return (
        <>
        <div className='container-fotograf'>
            <h2 className='projekt-rubrik'>Mina Fotografier</h2>
            <p className='projekt-text'>Här hittar du bilder jag har tagit, både under tiden jag arbetade som fotograf och bilder jag har tagit på min fritid.</p>
            
            <div className="card-fotograf">
                <ImageCarousel 
                    images={MACRO_IMAGES} 
                    altText="Macrobilder" 
                />
                <div className="card-body">
                    <h2 className="card-title">Mina macro-bilder</h2>
                    <p className="card-text">
                        Jag gillar verkligen att fotografera närbilder på både insekter, växter och annat intressant. 
                    </p>
                </div>
            </div>
                

            <div className="card-fotograf">
                <ImageCarousel 
                    images={LANDSKAP_IMAGES} 
                    altText="Landskapsbilder" 
                />
                <div className="card-body">
                    <h2 className="card-title">Mina landskaps-bilder</h2>
                    <p className="card-text">
                        Jag tycker även om att fotografera landskapsbilder. Här är några av dem.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={DOKUMENTAR_IMAGES} 
                    altText="Dokumentärbilder" 
                />
                <div className="card-body">
                    <h2 className="card-title">Mina Dokumentär-bilder</h2>
                    <p className="card-text">
                        Här är mina dokumenterande bilder, de flesta av dessa är tagna under tiden jag arbetade som fotograf, då vi använde dem till foldrar, broschyrer och böcker.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={PORTRAIT_IMAGES} 
                    altText="Porträttbilder" 
                />
                <div className="card-body">
                    <h2 className="card-title">Mina Porträtt-bilder</h2>
                    <p className="card-text">
                        Här kan du se mina portättbilder. De flesta bilderna är tagna utomhus eller inomhus i vanligt dagsljus, men jag har även börjat testa på lite studio-fotografering.
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={PRODUCT_IMAGES} 
                    altText="Produktbilder" 
                />
                <div className="card-body">
                    <h2 className="card-title">Mina Produkt-bilder</h2>
                    <p className="card-text">
                        Här ser du mina produktbilder. 
                    </p>
                </div>
            </div>

            <div className="card-fotograf">
                <ImageCarousel 
                    images={ANIMAL_IMAGES} 
                    altText="Djurbilder" 
                />
                <div className="card-body">
                    <h2 className="card-title">Mina Djur-bilder</h2>
                    <p className="card-text">
                        Här ser du mina djurbilder. 
                    </p>
                </div>
            </div>

        </div>
        </>
    )
}