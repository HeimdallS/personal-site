import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.scss';

export default function Header() {

    return (
        <nav className="header">
            <div className="header__logo-container">
                <Link to='/' className='header__logo-link'><h1 className="header__logo">HS</h1></Link>
                <Link to='/' className='header__logo-link'><h1 className="header__logo-tablet">Heimdall Sham</h1></Link>
            </div>
            <ul className='header__routes'>
               <Link to='/about' className='header__link'><li className='header__route'>About</li></Link>
                <Link to='projects' className='header__link'><li className='header__route'>Projects</li></Link>
            </ul>
        </nav>
    )
}
