import React from 'react'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import './HomePage.scss';
import stars from '../../assets/images/stars.jpg'

export default function HomePage() {

    const handleAnimation = (e) => {
        e.preventDefault()
    }

    return (
        <main className="content">
            <div className="content__container">
                <div className="content__text-container">
                    <h2 className="content__subhead">Hey there, my name's Heimdall Sham</h2>
                    <p className="content__personal-statement">
                        Thanks for viewing my page. I'm a Full Stack Web Developer proficient with <span className='content__highlight'>HTML/CSS</span>, <span className='content__highlight'>JavaScript</span>, <span className='content__highlight'>React</span>, <span className='content__highlight'>Node</span>, and a multitidue of 
                        other frameworks and libraries. Enjoy perusing my portfolio, and feel free to reach out and chat with me sometime.   
                    </p>
                    <div className="content__link-container">
                        <a href="https://www.linkedin.com/in/heimdall-sham/" className='content__nav-link'>
                        <BsIcon.BsLinkedin className='content__nav-icon'/>
                        </a>
                        <a href="https://github.com/HeimdallS" className='content__nav-link'>
                            <BsIcon.BsGithub className='content__nav-icon'/>
                        </a>
                        <a href="mailto:sham.heim@gmail.com" className='content__nav-link'>
                            <AiIcon.AiOutlineMail className='content__nav-icon'/>
                        </a>
                    </div>
                </div>
                <img src={stars} alt="star gazing" className='content__profile-pic' />
                <button className="content__animation-start-stop">On/Off</button>
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
