import React, {useState, useEffect} from 'react';
import './Animation.scss';

function Animation({toggle}) {

    const [animation, setAnimation] = useState(0)

    useEffect(() => {
        toggle ? setAnimation(1) : setAnimation(0)
    }, [toggle])

    return (
        <>
            <ul className="animation__box-area">
                <li className="animation__boxes animation__boxes--1" animation={animation}></li>
                <li className="animation__boxes animation__boxes--2" animation={animation}></li>
                <li className="animation__boxes animation__boxes--3" animation={animation}></li>
                <li className="animation__boxes animation__boxes--4" animation={animation}></li>
                <li className="animation__boxes animation__boxes--5" animation={animation}></li>
                <li className="animation__boxes animation__boxes--6" animation={animation}></li>
            </ul>
        </>
    )
}

export default Animation