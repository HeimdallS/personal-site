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

    return (
        <section className="carousel">
            <MdIcon.MdArrowBackIos className='carousel__left-arrow' onClick={prevSlide}/>
            {CarouselData.map((carousel, index) => {
                return (
                    <div key={carousel.key} className={index === current ? 'carousel__slide-active' : 'carousel__slide'}>
                        {index === current && (
                            <>
                                <img src={carousel.image} alt="animal thumbnail" className='carousel__thumbnails' />
                                <h3 className="carousel__project-title">{carousel.title}</h3>
                                <div className="carousel__project-links">
                                    {carousel.github}
                                </div>
                                <p className="carousel__project-description">{carousel.description}</p>
                            </>
                            
                        )}
                    </div>
                )
            })}
            <MdIcon.MdArrowForwardIos className='carousel__right-arrow' onClick={nextSlide} />
        </section>
    )
}