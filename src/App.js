import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
