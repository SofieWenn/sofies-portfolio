import React from 'react'
import { Link } from 'react-router-dom'
import profilbild from '../assets/images/Tittar i telefonen.jpg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {

    const phoneNumber = "073-093 38 75"; 
    const mailAddress = "sofie_wenn@outlook.com";
    const githubUrl = "https://github.com/SofieWenn";
    const linkedinUrl = "www.linkedin.com/in/sofie-wennström-6a38a524a";


    return (
        
        <div className="card">
            <img src={profilbild} className="card-img" alt="Profilbild" />
            <div className="card-body">
                <h2 className="card-title">Kontakt</h2>
                <p className="card-text">Vill du prata mer eller ställa någon fråga? Så här kan du komma i kontakt med mig.</p>
                
                <p className='card-text'>
                    <MailOutlineIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    <a href={`mailto:${mailAddress}`} className='contact-link'>
                        {mailAddress}
                    </a>
                </p>
                <p className='card-text'>
                    <LocalPhoneIcon style={{ marginRight: '8px', verticalAlign: 'middle', color: 'white'}} />
                    <a href={`tel:${phoneNumber.replace(/-/g, '').replace(/\s/g, '')}`} className="contact-link"></a>
                    {phoneNumber}
                </p>
                <h3 style={{ fontSize: '1.2em' }}>Mina profiler:</h3>
                
                {/* GitHub-länk */}
                <p className='card-text contact-item'>
                    <GitHubIcon style={{ marginRight: '8px', verticalAlign: 'middle', color: 'white' }} />
                    <a href={githubUrl} target='_blank' rel="noopener noreferrer" className='contact-link'>
                        GitHub
                    </a>
                </p>

                {/* LinkedIn-länk */}
                <p className='card-text contact-item' style={{ marginTop: '10px' }}>
                    <LinkedInIcon style={{ marginRight: '8px', verticalAlign: 'middle', color: 'white' }} />
                    <a href={linkedinUrl} target='_blank' rel='noopener noreferrer' className='contact-link'>
                        LinkedIn
                    </a>
                </p>
            </div>
        </div>


        
    )
}