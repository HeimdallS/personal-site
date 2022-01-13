import './App.scss';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Nav';

function App() {
  return (
    <div >
      <Header/>
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
