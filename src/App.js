import './App.css';
import KomponenKewajiban from './components/KomponenKewajiban';
import KomponenLarangan from './components/KomponenLarangan';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<KomponenKewajiban />} />
        <Route path='kewajiban' element={<KomponenKewajiban />} />
        <Route path='larangan' element={<KomponenLarangan />} />
      </Routes>
    </div>
  );
}

export default App;
