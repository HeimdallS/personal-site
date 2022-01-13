import React from 'react'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import './HomePage.scss';
import stars from '../../assets/images/stars.jpg'

export default function HomePage() {
    return (
        <main className="content">
            <div className="content__container">
                <div className="content__text-container">
                    <h2>Hey there, thanks for viewing my page.</h2>
                    <p className="content__mission-statement">
                        My name's Heimdall Sham and i'm a full stack web developer. I pride myself on my ability to learn and adapt 
                        to new technologies quickly, and am proficient with HTML/CSS, JavaScript, React, Node, and a multitidue of 
                        other frameworks and libraries. Enjoy perusing my portfolio, and please feel free to reach out!   
                    </p>
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
                <img src={stars} alt="star gazing" className='content__profile-pic' />
            </div>

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
