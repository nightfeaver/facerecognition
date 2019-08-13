import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '43921cbcf15440adad9ce85e9a6c7f98'
});

const particlesOptions = {
  particles: {
    number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
    },
    size: {value: 3}
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input:'',
      urlImage:''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({urlImage: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
      )
    .then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition urlImage={this.state.urlImage} />}
      </div>
    );
  }
}

export default App;
