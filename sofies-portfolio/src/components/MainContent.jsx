import React from "react"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MainContent() {

    const phoneNumber = "073-093 38 75"; 
    const mailAddress = "sofie_wenn@outlook.com";
    const githubUrl = "https://github.com/SofieWenn";
    const linkedinUrl = "www.linkedin.com/in/sofie-wennström-6a38a524a";

    return (
        <>
        <main className="main-container">
            <h2 className="main-rubrik">Hallå där!</h2>
            <h5 className="main-subtitle">Jag heter Sofie Wennström</h5>
            <p className="main-text">Jag är en nyutexaminerad
                systemvetare från Högskolan Dalarna. Jag bor i Grängesberg (Ludvika kommun) och har kunskaper inom full stack webbutveckling, apputveckling, databaser och data visualisering.
            </p>
            <p className="main-text">Jag gillar även fotografering, datorspel, filmer, kreativ kodning och att umgås med min familj.</p>              
                <p className="main-text">Just nu söker jag mitt första jobb inom IT.</p>
            
            <div className="social-icons">
                {/* E-post länk */}
                <a 
                    href={`mailto:${mailAddress}`} 
                    aria-label="Skicka e-post" 
                    className="icon-link"
                >
                    <MailOutlineIcon fontSize="large" />
                </a>

                {/* Telefonlänk */}
                <a 
                    href={`tel:${phoneNumber.replace(/-/g, '').replace(/\s/g, '')}`}
                    aria-label="Ring mig"
                    className="icon-link"
                >
                    <LocalPhoneIcon fontSize="large" />
                </a>
                
                {/* GitHub länk */}
                <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Gå till GitHub-profil"
                    className="icon-link"
                >
                    <GitHubIcon fontSize="large" />
                </a>

                {/* LinkedIn länk */}
                <a 
                    href={linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Gå till LinkedIn-profil"
                    className="icon-link"
                >
                    <LinkedInIcon fontSize="large" />
                </a>
            </div>
                
        </main>
        </>
    )
}