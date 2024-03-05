import './App.css';
import Nav from './components/Nav'; 
import Mini from './components/Mini';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Next from './pages/Next';
import About from './pages/About';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
    <div className="App">
      {/* {component} FOR RPOUTING WITHOUT ROUTER*/}
     <div className='MainNav'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/matches" element={<Matches/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/next" element={<Next/>}/>
      </Routes>
      </div>
      
    </div>
    </>
  );
}

export default App;
