import React, { useState } from 'react';
import './Header.css';
import im1 from './img/logo.png';
import im2 from './img/menu.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="header">
                <div className="logo">
                    <img src={im1} alt="Logo" />
                    <h1>Herbs of Eternity</h1>
                </div>
                <div className="helpmenu">
                    <button onClick={toggleMenu}>
                        <img src={im2} alt="Menu" />
                    </button>
                    <ul className={menuOpen ? 'open' : ''}>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Our Store</li>
                        <li>Pages</li>
                    </ul>
                </div>
                <div className="search">
                    <input type="search" placeholder="" />
                </div>
            </div>
        </header>
    );
}
