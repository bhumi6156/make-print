import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../App.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navBar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            console.log(window.scrollY)
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('resize', showButton);


    return (
        <div>
            <nav className={navBar ? 'navbar active' : 'navbar'}>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        {/* <img src='./images/logo.png' alt='company-logo' /> */}
                        Make: Print
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/hiw' className='nav-links' onClick={closeMobileMenu}>
                                HIW
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/features' className='nav-links' onClick={closeMobileMenu}>
                                Features
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                                Team
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
