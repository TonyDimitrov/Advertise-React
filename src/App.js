
import Nav from './components/Nav';
import Home from './components/Home';
import Properties from './components/Properties';
import About from './components/About';
import Details from './components/Details';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Route path="/" exact component={Home}/>
        <Route path="/properties" component={Properties}/>         
        <Route path="/about" component={About}/>     
        <Route path="/details/:id" component={Details}/>     
      </main>

      <Footer/>
    </div>
  );
}

export default App;
