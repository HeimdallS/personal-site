import React, {useState} from 'react'
import Animation from '../../components/Animation/Animation'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import './HomePage.scss';
import stars from '../../assets/images/stars.jpg';

export default function HomePage() {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <main className="content">
            <div className="content__container">
                <div className="content__text-container">
                    <h2 className="content__subhead">Hi, my name's Heimdall</h2>
                    <p className="content__personal-statement">
                        Thanks for visiting my page. I'm a Full Stack Web Developer proficient with <span className='content__highlight'>HTML/CSS</span>, <span className='content__highlight'>JavaScript</span>, <span className='content__highlight'>React</span>, <span className='content__highlight'>Node</span>, and a multitidue of 
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
                <button className="content__animationButt" onClick={handleClick}>On/Off</button>
            </div>
            <Animation toggle={toggle}/>
        </main>
    )
}
