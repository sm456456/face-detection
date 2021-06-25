import React, { Component } from "react"
import "./App.css"
import Particles from "react-particles-js"
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageInputForm from "./components/ImageInputForm/ImageInputForm"
import FaceDetection from "./components/FaceDetection/FaceDetection"

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
        <Particles params={{}} />
        <Navigation />
        <Logo />
        <ImageInputForm />
        <FaceDetection />
      </div>
    )
  }
}

export default App
