import React, { Component } from "react"
import "./App.css"
import Particles from "react-particles-js"
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageInputForm from "./components/ImageInputForm/ImageInputForm"
import FaceDetection from "./components/FaceDetection/FaceDetection"

const particleParams = {
  particles: {
    number: {
      value: 50
    },
    size: {
      value: 2,
      density: {
        enable: true,
        value_area: 900
      },
      random: true,
      anim: {
        enable: true,
        speed: 1
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

  render() {
    return (
      <div className="App">
        <Particles
          className="App-particles__container"
          params={particleParams}
        />
        <Navigation />
        <Logo />
        <ImageInputForm />
        <FaceDetection />
      </div>
    )
  }
}

export default App
