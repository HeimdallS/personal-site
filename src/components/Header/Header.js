import React from 'react'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import './Header.scss';

export default function Header() {

    return (
        <header>
            <h1>Heimdall Sham</h1>
            <div className="nav__icons">
                <a href="https://www.linkedin.com/in/heimdall-sham/" className='nav__link'>
                    <BsIcon.BsLinkedin className='nav__icon' href="https://www.linkedin.com/feed/"/>
                </a>
                <a href="https://github.com/HeimdallS" className='nav__link'>
                    <BsIcon.BsGithub className='nav__icon'/>
                </a>
                <a href="mailto:sham.heim@gmail.com" className='nav__link'>
                    <AiIcon.AiOutlineMail className='nav__icon'/>
                </a>
            </div>
        </header>
    )
}
