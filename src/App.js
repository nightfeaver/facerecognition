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
      urlImage:'',
      box:{}
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol:(clarifaiFace.left_col * width),
      topRow:(clarifaiFace.top_row * height),
      rightCol:(width - (clarifaiFace.right_col * width)),
      bottomRow:(height - (clarifaiFace.bottom_row * height))
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
    console.log(this.state)
  }

  onButtonSubmit = () => {
    this.setState({urlImage: this.state.input})
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(`error is ${err}`));
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
        <FaceRecognition box={this.state.box} urlImage={this.state.urlImage} />
      </div>
    );
  }
}

export default App;
