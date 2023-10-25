import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';

import Cardd from './components/Cardd';
import Cardd2 from './components/Cardd2';
import Cardd3 from './components/Cardd3';
import Footerr from './components/Footerr';

function App() {
  return (
    <>
  <Navbarr/>
  <h1 id="titre">The Legend of Zelda Tears of the Kingdom Rito village</h1>
  <div className='container'>
  <Cardd/>
  <Cardd2/>
  <Cardd3/>
  </div>
  <Footerr/>
  </>
  );
}

export default App;
