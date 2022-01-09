import React from 'react'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import './Header.scss';
import {Link} from 'react-router-dom';

export default function Header() {

    // const mailIcon = ({mailto, label}) => {
    //     return (
    //         <Link
    //             to='#'
    //             onClick = {(e) => {
    //                 e.preventDefault()
    //                 window.location = mailto
    //             }}
    //         >
    //             {label}
    //         </Link>
    //     )
    // }

    return (
        <header>
            <h1>Heimdall Sham</h1>
            <div className="nav__icons">
                <a href="https://www.linkedin.com/in/heimdall-sham/">
                    <BsIcon.BsLinkedin className='nav__icon' href="https://www.linkedin.com/feed/"/>
                </a>
                <a href="https://github.com/HeimdallS">
                    <BsIcon.BsGithub className='nav__icon'/>
                </a>
                <a href="mailto:sham.heim@gmail.com">
                    <AiIcon.AiOutlineMail className='nav__icon'/>
                </a>
            </div>
        </header>
    )
}
