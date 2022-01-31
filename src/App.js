import './App.scss';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Nav';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

function App() {
  return (
    <div className='app'>
      <Header/>
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </>
      <div className="app__foot-container">
        <Footer className='app__foot'/>
      </div>
    </div>
  );
}

export default App;
