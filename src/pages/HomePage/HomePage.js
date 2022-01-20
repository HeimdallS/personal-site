import React, {useState} from 'react'
import Animation from '../../components/Animation/Animation'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import './HomePage.scss';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import stars from '../../assets/images/stars.jpg';

const on = {
    500: '#ebd580',
  };
  
  const off = {
    400: '#BFC7CF',
    500: '#AAB4BE',
  };

const Root = styled('span')`

  font-size: 0;
  position: relative;
  display: flex;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  & .${switchUnstyledClasses.track} {
    background: ${off[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${off[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${on[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

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
            </div>
            <Animation toggle={toggle}/>
            <div className="content__toggle">
                <SwitchUnstyled component={Root} onChange={handleClick} defaultChecked/> 
            </div>
        </main>
    )
}
