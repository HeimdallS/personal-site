import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.scss';

export default function Header() {

    return (
        <nav className="header">
            <ul className='header__routes'>
                <li className='header__route'>About</li>
                <li className='header__route'>Projects</li>
            </ul>
        </nav>
    )
}
