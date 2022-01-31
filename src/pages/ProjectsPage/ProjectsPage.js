import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './ProjectsPage.scss'

export default function ProjectsPage() {
  return (
    <main className='projects'>
        <div className="projects__subhead-container">
          <h2 className="projects__subhead">Projects</h2>
        </div>
        <Carousel />
    </main>
  )
}
