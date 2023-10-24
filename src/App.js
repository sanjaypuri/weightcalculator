import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import SettingBar from './components/SettingBar';
import HexBar from './pages/HexBar';
import RoundBar from './pages/RoundBar';
import Home from './pages/Home';
import RoundTube from './pages/RoundTube';
import SquareBar from './pages/Squarebar';
import RectangularTube from './pages/RectangularTube';
import TBar from './pages/TBar';
import Angle from './pages/Angle';
import Channel from './pages/Channel';
import Beam from './pages/Beam';
import Flat from './pages/Flat';
import Plate from './pages/plate';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <div className="main">
          <Header />
          <SettingBar />
          {/* <Home/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hexbar" element={<HexBar />} />
            <Route path="/roundbar" element={<RoundBar />} />
            <Route path="/roundtube" element={<RoundTube />} />
            <Route path="/squarebar" element={<SquareBar />} />
            <Route path="/rectangulartube" element={<RectangularTube />} />
            <Route path="/tbar" element={<TBar />} />
            <Route path="/angle" element={<Angle />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/beam" element={<Beam />} />
            <Route path="/flat" element={<Flat />} />
            <Route path="/plate" element={<Plate />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
