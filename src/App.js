import logo from './logo.svg';
import './App.css';
import './Style/Foolter.css';
import './Style/Home.css';
import RoutePages from './Components/RoutePages';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Home from './Pages/Home';
import Promotion from './Pages/Promotion';

function App() {
  return (
    <>
    <div className='wrapper wrapper--bg'>
      {/* <Header /> */}
        <RoutePages />
      {/* <Footer /> */}
    </div>

    
    </>
  );
}

export default App;
