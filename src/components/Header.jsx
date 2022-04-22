import React from 'react';

import '../styles/header.css';

export const Header = () => {
    return (
        <header>
            <div>
                <h2>Bravin Thillainathan</h2>
            </div>
            <ul className="header-links">
                <li>Home</li>
                <li>Projects</li>
                <li className="contact-btn">Contact</li>
            </ul>
        </header>
    );
};

export default Header;
