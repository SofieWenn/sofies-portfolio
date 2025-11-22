import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import profilbild from '../assets/images/Hakan i handen.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="navbar">
                <img src={profilbild} alt="profilbild" className="nav-img" />
                <span className="nav-text">Sofies Portfolio</span>

                {/* Hamburgarknappen */}
                <button 
                    className="hamburger-button" 
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen} 
                    aria-controls="mobile-menu"
                >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>

                {/* DROP-DOWN MENYN */}
                <div 
                    id="mobile-menu"
                    className={`nav-dropdown ${isMenuOpen ? 'open' : ''}`} 
                >
                    {/* HEM */}
                    <Link to="/" className="nav-item dropdown-item" onClick={toggleMenu}>
                        Hem
                    </Link>
                    
                    {/* OM MIG */}
                    <Link to="/about" className="nav-item dropdown-item" onClick={toggleMenu}>
                        Om mig
                    </Link>

                    {/* KONTAKT */}
                    <Link to="/contact" className="nav-item dropdown-item" onClick={toggleMenu}>
                        Kontakt
                    </Link>

                    {/* PROJEKT */}
                    <Link to="/projekt" className="nav-item dropdown-item" onClick={toggleMenu}>
                        Projekt
                    </Link>
                </div>
            </nav>
        </header>
    );
}