import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {
    // Definierar länkarna
    const currentYear = new Date().getFullYear();
    const mailAddress = "sofie_wenn@outlook.com";
    const githubUrl = "https://github.com/SofieWenn"; 
    const linkedinUrl = "www.linkedin.com/in/sofie-wennström-6a38a524a";

    return (
        <footer className="site-footer">
            <div className="footer-content">
                
                {/* Copyright och Namn */}
                <div className="footer-section copyright">
                    <p>&copy; {currentYear} Sofie Wennström Portfolio</p>
                    <p>Systemvetare och Webbutvecklare</p>
                </div>

                {/* Snabbnavigering */}
                <div className="footer-section footer-nav">
                    <h4>Navigering</h4>
                    <ul>
                        <li><Link to="/">Hem</Link></li>
                        <li><Link to="/about">Om mig</Link></li>
                        <li><Link to="/projekt">Projekt</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                    </ul>
                </div>

                {/* Sociala Medier och Kontakt */}
                <div className="footer-section footer-social">
                    <h4>Håll kontakten</h4>
                    <div className="social-links">
                        
                        <a href={`mailto:${mailAddress}`} aria-label="E-post">
                            <MailOutlineIcon fontSize="medium" />
                        </a>
                        
                        <a 
                            href={linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profil"
                        >
                            <LinkedInIcon fontSize="medium" />
                        </a>
                        
                        <a 
                            href={githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub profil"
                        >
                            <GitHubIcon fontSize="medium" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}