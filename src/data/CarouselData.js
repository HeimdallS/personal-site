import hamster from '../assets/images/hamster.jpeg'
import puppy from '../assets/images/puppy.jpeg'
import kitty from '../assets/images/kitty.jpeg'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';

export const CarouselData = [
    {
        key: 1,
        image: `${hamster}`,
        github: <a href="https://github.com/HeimdallS/capstone-prime-performance" target="_blank" rel='noreferrer'>
        <BsIcon.BsGithub className='carousel__nav-icon'/>
                </a>,
        title: "Prime Performance",
        description: "A full stack personal workout application for both beginners and experienced fitness enthusiasts. Utilizing React, Express, Node.js, and Sass, Prime Performance allows users to find new exercise routines, customize their own workouts, as well as generate a randomized workout for individuals who feel that their growth has plateued with their existing workout."
    },
    {
        key: 2,
        image: `${kitty}`,
        github: <a href="https://github.com/HeimdallS" target="_blank" rel='noreferrer'>
        <BsIcon.BsGithub className='carousel__nav-icon'/>
                </a>,
        title: "InStock",
        description: "A team based full stack inventory management website. Using React, Sass, Node.js, and Express, this fully responsive web page is capable of managing dynamic warehousing and inventory information for users."
    },
    {
        key: 3,
        image: `${puppy}`,
        github: <a href="https://github.com/HeimdallS" target="_blank" rel='noreferrer'>
        <BsIcon.BsGithub className='carousel__nav-icon'/>
                </a>,
        title: "Personal Portfolio",
        description: "Utilizing React, Sass, and multiple libraries, this page was developed to give you a glimpse of my experiences and who I am both as a person and a developer."
        
    }
]