import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    line_linked: {
      number: {
        value: 30,
      },
        density: {
          enable: true,
          area_value: 800
         
        }
      
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions} 
        />
        <Navigation />
        <Logo  />
        <Rank /> 
        <ImageLinkForm />
       
      </div>
    );
  }
}

export default App;
