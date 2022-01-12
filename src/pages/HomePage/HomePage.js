import React from 'react'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import './HomePage.scss';

export default function HomePage() {
    return (
        <main className="content">
            <h2>Hey there, thanks for viewing my page.</h2>
            <div className="content__nav-icons">
                <a href="https://www.linkedin.com/in/heimdall-sham/" className='nav__link'>
                    <BsIcon.BsLinkedin className='content__nav-icon'/>
                </a>
                <a href="https://github.com/HeimdallS" className='nav__link'>
                    <BsIcon.BsGithub className='content__nav-icon'/>
                </a>
                <a href="mailto:sham.heim@gmail.com" className='nav__link'>
                    <AiIcon.AiOutlineMail className='content__nav-icon'/>
                </a>
            </div>
            <h2 className="content__about">About</h2>
            <p className="content__mission-statement">
                This is where the about statement will go.
            </p>
            <h2 className="content-mission">Mission</h2>
            <p className="content__mission-statement">
                This is where the mission statement will go.
            </p>
            <ul className="content__box-area">
                <li className="content__boxes content__boxes--1"></li>
                <li className="content__boxes content__boxes--2"></li>
                <li className="content__boxes content__boxes--3"></li>
                <li className="content__boxes content__boxes--4"></li>
                <li className="content__boxes content__boxes--5"></li>
                <li className="content__boxes content__boxes--6"></li>
            </ul>
        </main>
    )
}
