import React from 'react'
import './AboutPage.scss'
import html from '../../assets/images/html-5.png';
import css from '../../assets/images/css.png';
import sass from '../../assets/images/sass.png';
import js from '../../assets/images/js-logo.png';
import react from '../../assets/images/react.png';
import npm from '../../assets/images/npm-logo.png';
import express from '../../assets/images/express.png';
import node from '../../assets/images/nodejs.png';
import mysql from '../../assets/images/mysql.png';

function AboutPage() {
    return (
        <main className="about">
            <section className='about__background-container'>
                <h2 className="about__subhead">About</h2> 
                <p className="about__statement">
                    After working in sales and marketing for the majority of my professional life, I consider myself 
                    an expert in communication and relationship management. However, I have always prided 
                    myself as being a life-long learner in pursuit of continued personal growth and 
                    development. 
                    <br/>
                    <br/>
                    My motive in switching career paths from Sales to Web Development is to 
                    immerse myself in a constantly evolving industry; one that will allow me to utilize my 
                    communication skills to work in collaborative environments while also pushing me to 
                    challenge myself and continue to hone my programming skills and abilities.
                </p> 
            </section>
            <section className="about__skills">
                <h2 className="about__subhead">Skills</h2>
                <div className="about__stacks">
                    <div className="about__stacks-container">
                        <img src={html} alt="orange html icon" className="about__stack-icon" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                HTML5
                            </div>
                        </div>
                    </div>
                    <div className="about__stacks-container">
                        <img src={css} alt="blue css icon" className="about__stack-icon" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                CSS3
                            </div>
                        </div>
                    </div>
                    <div className="about__stacks-container">
                        <img src={sass} alt="cursive sass icon" className="about__stack-icon" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                Sass
                            </div>
                        </div>
                    </div>
                    <div className="about__stacks-container">
                        <img src={js} alt="yellow javascript icon" className="about__stack-icon" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                JavaScript
                            </div>
                        </div>
                    </div>
                    <div className="about__stacks-container">
                        <img src={npm} alt="red white block letter npm icon" className="about__stack-icon" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                npm
                            </div>
                        </div>
                    </div>
                    <div className="about__stacks-container">
                        <img src={react} alt="light blue nebula react icon" className="about__stack-icon" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                React
                            </div>
                        </div>
                    </div>
                    <div className="about__stacks-container">
                        <img src={node} alt="green express icon letters js" className="about__stack-icon" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                Node JS
                            </div>
                        </div>
                    </div>
                    <div className="about__stacks-container">
                        <img src={express} alt="lower case e x express icon" className="about__stack-icon about__stack-icon--ex" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                Express
                            </div>
                        </div>
                    </div>
                    <div className="about__stacks-container">
                        <img src={mysql} alt="dolphin mysql icon" className="about__stack-icon" />
                        <div className="about__img-overlay">
                            <div className="about__img-text">
                                MySQL
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutPage
