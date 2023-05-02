import { useState } from 'react';
//import logo from '../logo.jpg';
import '../Header.css';

function Header() {
    const [active, setActive] = useState("nav__menu");

    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
    }

    return (
        <header className='header'>
            <nav className="nav">
                

                <ul className="nav__menu">
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Accueil
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="./recipe.js" className="nav__link">
                            Recettes
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="./form.js" className="nav__link">
                            Contact
                        </a>
                    </li>
                </ul>

                <div onClick={navToggle} className="nav__toggler">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    );
}

export default Header;