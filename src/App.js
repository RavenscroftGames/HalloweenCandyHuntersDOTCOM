import logo from './HCHlogoMED.jpg';
import { Link } from "react-router-dom";
import './App.css';
import HamburgerMenu from 'react-hamburger-menu';

function App() {
  return (
    <div className="App"
    style={{
      backgroundColor: 'black',}}
    >  
      <div>
    <Link to="/about">About</Link>
   <h2>Github Pages</h2>
   <h3>Deploying React to Github</h3>
  </div>
    <HamburgerMenu
    isOpen={this.state.open}
    menuClicked={this.handleClick.bind(this)}
    width={18}
    height={15}
    strokeWidth={1}
    rotate={0}
    color='black'
    borderRadius={0}
    animationDuration={0.5}
    />
    


      <header className="App-header"
       style={{
      backgroundColor: 'black',}}
    >
      
        <img src={logo} alt="logo" />
        
      </header>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/k5HpK4bFBIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    
  );
}

export default App;
