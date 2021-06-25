import React, { Component } from "react"
import "./App.css"
import Particles from "react-particles-js"
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageInputForm from "./components/ImageInputForm/ImageInputForm"
import FaceDetection from "./components/FaceDetection/FaceDetection"
import Rank from "./components/Rank/Rank"
import Clarifai from "clarifai"

const app = new Clarifai.App({
  apiKey: "c8ce1b46b6754303a017e95566162d04"
})

const particleParams = {
  particles: {
    number: {
      value: 90
    },
    size: {
      value: 2,
      density: {
        enable: true,
        value_area: 900
      }
    },
    shape: {
      type: "square",
      stroke: {
        width: 6,
        color: "#f9ab00"
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
}
const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  // onInputChange = e => {
  //   this.setState({ input: e.target.value })
  // }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })

    app.models
      .predict(
        {
          id: "c8ce1b46b6754303a017e95566162d04"
        },
        //Cant use imageUrl
        this.state.input
      )
      .then(
        function (response) {
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          )
        },
        function (err) {
          //there was an error
        }
      )
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="App-particles__container"
          params={particleParams}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageInputForm onButtonSubmit={this.onButtonSubmit} />
        <FaceDetection />
      </div>
    )
  }
}

export default App
