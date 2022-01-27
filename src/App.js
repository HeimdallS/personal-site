import './App.scss';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Nav';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <Header/>
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
