import React from "react";
import plutoBild from '../assets/images/pluto_lorri_ralph_20150713_2017.jpg';
import responsivt from '../assets/images/domenico-loia-EhTcC9sYXsw-unsplash.jpg';
import objektOrienterat from '../assets/images/pexels-soumil-kumar-4325-735911.jpg';
import kurs from '../assets/images/daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg';
import datakom from '../assets/images/pexels-joshsorenson-1054397.jpg';
import databas from '../assets/images/pexels-cookiecutter-17323801.jpg';
import forskning from '../assets/images/scott-graham-5fNmWej4tAA-unsplash.jpg';
import design from '../assets/images/dan-clear-maLPlF58XnE-unsplash.jpg';
import analys from '../assets/images/jakub-zerdzicki-lErjXBqZLlQ-unsplash.jpg';
import robot from '../assets/images/pexels-tara-winstead-8386440.jpg';
import webdesign from '../assets/images/lee-campbell-DtDlVpy-vvQ-unsplash.jpg';
import webapp from '../assets/images/daniel-korpai-pKRNxEguRgM-unsplash.jpg';
import businessdevelopment from '../assets/images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg';
import labyrint from '../assets/images/pexels-steve-28494630.jpg';
import karta from '../assets/images/kartapp.png';
import databaser from '../assets/images/imgix-klWUhr-wPJ8-unsplash.jpg';
import testning from '../assets/images/pexels-divinetechygirl-1181281.jpg';
import data from '../assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg';
import agent from '../assets/images/pexels-pavel-danilyuk-8294593.jpg';
import webutveckling from '../assets/images/azwedo-l-lc-Q7gIMX0Uf3Y-unsplash.jpg';
import skriver from '../assets/images/pexels-kindelmedia-7688987.jpg';

export default function SkolProjekt() {
    return (
        <>
        <div className='container-projekt'>
            <h2 className='projekt-rubrik'>Mina Skolprojekt</h2>
            <p className='projekt-text'>Här hittar du projekt som jag skapade under min utbildning.</p>
        
            <h3 className="year">Första året av utbildningen</h3>

            <div className="card-skolprojekt">
                <img src={plutoBild} className="card-img-top" alt="Bild på Pluto" />
                <p className='bildtext'><strong>Fotograf</strong> Lorri Ralph</p>
                <div className="card-body">
                    <h2 className="card-title">En Pluto-webbsida</h2>
                    <p className="card-text">
                        I första kursen, <strong>Data- och informationshantering</strong>, under första året av utbildningen skulle vi i grupp skapa en webbsida om planeten Pluto. Vi skulle göra att den blev att se ut exakt som en bild som läraren gav oss. Senare under samma kurs fick vi även lägga till en till länkad sida från Plutosidan som var helt valfri, där skapade vi cards och visade upp några av de andra planeterna i vårt solsystem.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={responsivt} className="card-img-top" alt="Bild på olika skärmar" />
                <p className='bildtext'><strong>Fotograf</strong> Lorri Ralph</p>
                <div className="card-body">
                    <h2 className="card-title">En responsiv webbsida</h2>
                    <p className="card-text">
                        Under kursen <strong>Responsiv Webbdesign</strong>, skulle vi skapa en webbsida som var helt responsiv. Det vill säga, den ändrade utseende beroende på vilken skärmstorlek man hade. Vi fick även testa på float, flexbox och grid under denna kurs.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={objektOrienterat} className="card-img-top" alt="Någon skriver på ett tangentbord" />
                <p className='bildtext'><strong>Fotograf</strong> Soumil Kumar</p>
                <div className="card-body">
                    <h2 className="card-title">En rese-applikation</h2>
                    <p className="card-text">
                        I kursen <strong>Objektorienterad programmering</strong>, skulle vi skapa en app där en användare kunde boka en resa och göra olika val, som antal resenärer, restid, transportmedel till destinationen m.m. Detta gjorde vi i Java och vi hade 24-timmar på oss att skapa applikationen.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={kurs} className="card-img-top" alt="En whiteboardtavla med post-it-lappar" />
                <p className='bildtext'><strong>Fotograf</strong> Daria Nepriakhin</p>
                <div className="card-body">
                    <h2 className="card-title">Projekthantering</h2>
                    <p className="card-text">
                        Under vårterminen läste jag kursen <strong>IT-projekthantering</strong>. Här skulle vi arbeta med agila metoder som SAFe och Scrum och tillsammans skapa en förstudie, ett genomförande, en ekonomisk plan och till slut en avslutande rapport om ett projekt.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={datakom} className="card-img-top" alt="En Switch och en Router med kablar" />
                <p className='bildtext'><strong>Fotograf</strong> Josh Soren</p>
                <div className="card-body">
                    <h2 className="card-title">Datakommunikation</h2>
                    <p className="card-text">
                        När jag läste kursen <strong>Datakommunikation</strong> fick jag lära mig att koppla ihop datorer med switchar och routrar för att komma åt olika nätverk (Lokala eller Globala nätverk). Jag fick även lära mig vilka olika sorters kablar det finns för detta.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={databas} className="card-img-top" alt="En databas" />
                <p className='bildtext'><strong>Fotograf</strong> Cookiecutter</p>
                <div className="card-body">
                    <h2 className="card-title">Databas-system</h2>
                    <p className="card-text">
                        I kursen <strong>Databassystem</strong> lärde jag mig hur man skapar ER-diagram och hur man skriver SQL för att utföra olika kommandon, som att skapa nya tabeller och kolumner, eller hämta data från en specifik kolumn till exempel.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={forskning} className="card-img-top" alt="Två personer sitter och tittar på papper" />
                <p className='bildtext'><strong>Fotograf</strong> Scott Grahamr</p>
                <div className="card-body">
                    <h2 className="card-title">Forskning</h2>
                    <p className="card-text">
                        Sista kursen under första året av utbildningen hette <strong>Forskningsmetodik</strong> och där fick jag lära mig hur man hittar tillförlitliga peer-reviewed-källor och hur man strukturerar upp och skriver en rapport.
                    </p>
                </div>
            </div>

            <h3 className="year">Andra året av utbildningen</h3>

            <div className="card-skolprojekt">
                <img src={design} className="card-img-top" alt="En bok om designmönster" />
                <p className='bildtext'><strong>Fotograf</strong> Dan Clear</p>
                <div className="card-body">
                    <h2 className="card-title">Designmönster</h2>
                    <p className="card-text">
                        Första kursen under andra året av utbildningen hette <strong>Objektorienterad design och problemlösning</strong>. I denna kurs fick jag lära mig olika designmönster och principer och i vilka situationer man bör använda vilka av dessa. Jag fick även i grupp skapa en app där användare kunde köpa biljetter till olika evenemang och göra olika val, sedan skulle de vara tvungna att betala biljetterna inom en viss tid. 
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={analys} className="card-img-top" alt="En dator med olika diagram och en miniräknare som ligger på bordet framför personen" />
                <p className='bildtext'><strong>Fotograf</strong> Dan Clear</p>
                <div className="card-body">
                    <h2 className="card-title">Statistik</h2>
                    <p className="card-text">
                        Jag läste även kursen <strong>Statistisk Analys</strong>. Här fick jag lära mig att göra statistiska beräkningar och att räkna ut konfidensintervall, sannolikhetsfördelning, standardavvikelse, normalfördelning och mycket annat.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={labyrint} className="card-img-top" alt="En robothand" />
                <p className='bildtext'><strong>Fotograf</strong> Steve</p>
                <div className="card-body">
                    <h2 className="card-title">Artificiell Intelligens</h2>
                    <p className="card-text">
                        I kursen <strong>Artificiell Intelligens</strong> lärde jag mig att använda programmeringsspråket Python. Sedan fick jag lära en AI-agent att gå genom en labyrint genom att ge olika belöningar. Sedan fick jag lära en annan AI-agent att spela luffarschack. 
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={webdesign} className="card-img-top" alt="En person som designar en webbsida" />
                <p className='bildtext'><strong>Fotograf</strong> Lee Campbell</p>
                <div className="card-body">
                    <h2 className="card-title">Webbapplikationer</h2>
                    <p className="card-text">
                        Jag läste också kursen <strong>Dynamiska webbapplikationer</strong>, och där fick jag lära mig att skapa webbapplikatoner med hjälp av JavaScript och bootstrap. Vi skulle även skapa meddelanden i form av en modal ruta som skulle visas som feedback till användaren. Jag skapade även en receptbok-webbapp i denna kurs.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={webapp} className="card-img-top" alt="En person som designar en webbapp" />
                <p className='bildtext'><strong>Fotograf</strong> Daniel Korpai</p>
                <div className="card-body">
                    <h2 className="card-title">Design av webbapp</h2>
                    <p className="card-text">
                        Under vårterminen läste jag kursen <strong>Design av webbapplikationer</strong>. Här fick jag lära mig att skapa webbapplikationer med backend och frontend. I backend använde jag JavaScript och för backend använde jag React. Här skapade jag en webbapplikation för en butik som sålde affischer. 
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={businessdevelopment} className="card-img-top" alt="Två personer som sitter och diskuterar framför datorer" />
                <p className='bildtext'><strong>Fotograf</strong> Charles Deluvio</p>
                <div className="card-body">
                    <h2 className="card-title">Verksamhets-utveckling</h2>
                    <p className="card-text">
                        Under kursen <strong>System- och Verksamhetsutveckling</strong> fick jag lära mig affärsprocesser och förändringsanalyser, och sedan ta reda på hur olika förändringar skulle påverka den befintliga verksamheten på en bank- och en restaurang-verksamhet.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={robot} className="card-img-top" alt="Två personer som sitter och diskuterar framför datorer" />
                <p className='bildtext'><strong>Fotograf</strong> Dan Clear</p>
                <div className="card-body">
                    <h2 className="card-title">Data Science</h2>
                    <p className="card-text">
                        Jag läste kursen <strong>Maskininlärning och Data Science</strong> där jag fick lära mig att göra statistiska beräkningar med hjälp av Python. Jag fick även lära mig att utföra webmining och textmining.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={karta} className="card-img-top" alt="En jordglob" />
                <div className="card-body">
                    <h2 className="card-title">GIS</h2>
                    <p className="card-text">
                        I kursen <strong>Webbaserade geografiska informationssystem (GIS)</strong> fick jag skapa en webbsida med hjälp av Python, Jinja och Leaflet. Webbsidan skulle visa olika turistmål på en karta över en stad i Sverige, man skulle även kunna hitta närmaste vägen mellan dessa turistmål och information om varje plats. Sedan skulle man visa real-time väderinformation med hjälp av Leaflet.Weather.
                    </p>
                </div>
            </div>

            <h3 className="year">Tredje året av utbildningen</h3>

            <div className="card-skolprojekt">
                <img src={databaser} className="card-img-top" alt="Databaser" />
                <div className="card-body">
                    <h2 className="card-title">Data storage</h2>
                    <p className="card-text">
                        När jag läste kursen <strong>Data Storage & Management Technologies</strong> fick jag lära mig om olika typer av datalagringssystem (relational, NoSQL, in-memory). Sedan fick man skapa ett påhittat företag där man skulle använda mig av data storage. Vi i vår grupp valde att göra ett spelföretag likt Steam eller Epic Games och göra data storage för alla spel vi sålde.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={testning} className="card-img-top" alt="Händer som skriver på en laptop" />
                <p className='bildtext'><strong>Fotograf</strong> Divinetechygirl</p>
                <div className="card-body">
                    <h2 className="card-title">Test</h2>
                    <p className="card-text">
                        Jag läste kursen <strong>Systemförvaltning och test av IT-system</strong>, och där fick jag lära mig om olika ramverk, läsa in mig på några specifika och ta reda på när man kan använda dem och hur de är i jämförelse mot andra ramverk. Jag fick även skriva en rapport, här valde jag att skriva om Outsourcing av IT-tjänster från ett litet vårdföretag i Säter.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={data} className="card-img-top" alt="Händer som skriver på en laptop" />
                <p className='bildtext'><strong>Fotograf</strong> Nasa</p>
                <div className="card-body">
                    <h2 className="card-title">Big Data</h2>
                    <p className="card-text">
                        Under kursen <strong>Tillämpad Big Data och Cloud Computing</strong> fick jag lära mig att använda virtuella maskiner och att med hjälp av Hadoop hämta och ändra dessa. Jag fick även lära mig att Big Data's ansvarsområde är att hämta, ordna och processera olika typer av data, så som strukturerad, semi-strukturerad och ostrukturerad data.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={agent} className="card-img-top" alt="En liten robot som står på ett bord" />
                <p className='bildtext'><strong>Fotograf</strong> Dany Lyuk</p>
                <div className="card-body">
                    <h2 className="card-title">Agenter</h2>
                    <p className="card-text">
                        När jag läste <strong>Distributed computing</strong> fick jag lära mig att använda agenter i spel med hjälp av Spade. Jag fick även lära mig att använda virtuella maskiner för att utföra vissa konfigurationer. Dessutom fick jag använda data scrape för att hämta väderinformation och sedan skapa en väderapp med hjälp av Python och biblioteket Kivy.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={webutveckling} className="card-img-top" alt="En skärm där det är kod och en skärm där man ser en webbsida" />
                <p className='bildtext'><strong>Fotograf</strong> azwedo</p>
                <div className="card-body">
                    <h2 className="card-title">Scoreboard-app</h2>
                    <p className="card-text">
                        Jag läste kursen <strong>Projektbaserad systemutveckling</strong> och där delades man in i olika grupper och fick arbeta mot ett riktigt företag, i vårt fall arbetade vi mot Trafikverket. De ville ha en scoreboard-app som uppdaterades i realtid då de ibland hade tävlingar internt på arbetsplatsen men inte hade någonstans att visa upp poängen för deltagarna. Den byggde vi med C# för backend och Angular för frontend. Vi använde Azure DevOps för att skapa sprintar och user stories m.m.
                    </p>
                </div>
            </div>

            <div className="card-skolprojekt">
                <img src={skriver} className="card-img-top" alt="En person som skriver på en laptop" />
                <p className='bildtext'><strong>Fotograf</strong> kindelmedia</p>
                <div className="card-body">
                    <h2 className="card-title">Examensarbete</h2>
                    <p className="card-text">
                        Den sista kursen i utbildningen var <strong>Examensarbetet</strong> och där skrev jag och en annan tjej om Digitala verktyg i förskolan och grundskolan i Ludvika kommun. Vi gjorde en fallstudie där vi undersökte hur digitala verktyg kan främja kreativitet och motivation. Arbetet gav mig en djupgående erfarenhet av att genomföra systematiska undersökningar med en mixed-methods-ansats (enkäter och intervjuer) för att analysera komplexa data och dra slutsatser. 
                    </p>
                </div>
            </div>

        </div>
        </>
        
    )
}