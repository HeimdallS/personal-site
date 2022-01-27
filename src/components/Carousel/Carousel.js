import React, {useState} from 'react';
import './Carousel.scss';
import * as MdIcon from 'react-icons/md'
import { CarouselData } from '../../data/CarouselData';

export default function Carousel() {

    const [current, setCurrent] = useState(0)
    const length = CarouselData.length

    if (!Array.isArray(CarouselData) || CarouselData.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

    return (
        <section className="carousel">
            <MdIcon.MdArrowBackIos className='carousel__left-arrow' onClick={prevSlide}/>
            <MdIcon.MdArrowForwardIos className='carousel__right-arrow' onClick={nextSlide} />
            {CarouselData.map((carousel, index) => {
                return (
                    <div key={carousel.key} className={index === current ? 'carousel__slide-active' : 'carousel__slide'}>
                        {index === current && (
                            <img src={carousel.image} alt="animal thumbnail" className='carousel__thumbnails' />
                        )}
                    </div>
                )
            })}
        </section>
    )
}