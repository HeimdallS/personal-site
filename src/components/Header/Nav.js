import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.scss';

export default function Header() {

    return (
        <nav className="header">
            <Link to='/' className='header__logo-link'><h1 className="header__logo">Heimdall Sham</h1></Link>
            <Link to='/' className='header__logo-link'><h1 className="header__logo-tablet">HS</h1></Link>
            <ul className='header__routes'>
               <Link to='/about' className='header__link'><li className='header__route'>About</li></Link>
                <li className='header__route'>Projects</li>
            </ul>
        </nav>
    )
}
