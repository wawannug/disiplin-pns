import './App.css';
import KomponenKewajiban from './components/KomponenKewajiban';
import KomponenLarangan from './components/KomponenLarangan';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './mode/ScrollToTop';
import Hukuman from './components/Hukuman';
import Bahasan from './pages/Bahasan';
import PeraturanTerkait from './pages/PeraturanTerkait';
import Artikel from './pages/Artikel'
import Pejabat from './pages/Pejabat';
import Pemeriksaan from './pages/Pemeriksaan'
import BerlakuHukuman from './pages/BerlakuHukuman';

function App() {
  return (
    <div className="App dark:bg-[#0f172a]">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='kewajiban' element={<KomponenKewajiban />} />
        <Route path='larangan' element={<KomponenLarangan />} />
        <Route path='hukuman' element={<Hukuman />} />
        <Route path="bahasan" element={<Bahasan />} />
        <Route path='peraturan' element={<PeraturanTerkait />} />
        <Route path="artikel" element={<Artikel />} />
        <Route path="pejabat" element={<Pejabat />} />
        <Route path="pemeriksaan" element={<Pemeriksaan />} />
        <Route path="berlaku" element={<BerlakuHukuman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
