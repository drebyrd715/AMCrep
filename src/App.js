import './App.css';
import Footer from './components/Footer';
import Footerlogo from './components/Footerlogo';
import Seeamovie from './components/Seeamovie';
import Movietitles from './components/Movietitles';
import Moretitles from './components/Moretitles';
import Somemoretitle from './components/Somemoretitle';
import Lastimage from './components/Lastimage';

function App() {
  return (
    <>
    <Seeamovie/>
    <Movietitles/>
    <Moretitles/>
    <Somemoretitle/>
    <Lastimage/>
    <img src="./links.png"/>
    <Footer/>
    <Footerlogo/>
    </>
  );
}

export default App;
