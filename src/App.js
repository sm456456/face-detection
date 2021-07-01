import React, { Component } from "react"
import "./App.css"
import Particles from "react-particles-js"
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageInputForm from "./components/ImageInputForm/ImageInputForm"
import FaceDetection from "./components/FaceDetection/FaceDetection"
import Rank from "./components/Rank/Rank"
import Signin from "./components/Signin.js/Signin"
import Register from "./components/Register/Register"
import Clarifai from "clarifai"

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

const app = new Clarifai.App({
  apiKey: "c8ce1b46b6754303a017e95566162d04"
})

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage")
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    }
  }

  displayFaceBox = box => {
    this.setState({ box: box })
  }

  onInputChange = e => {
    this.setState({ input: e.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })

    app.models
      // .initModel({
      //   id: Clarifai.FACE_DETECT_MODEL
      // })
      // .then(faceDetectModel => {
      //   return faceDetectModel.predict(
      //     "https://samples.clarifai.com/face-det.jpg"
      //   )
      // })
      // .then(response => {
      //   console.log(response)
      // })
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        )
      })
      .catch(err => {
        console.log(err)
      })
  }

  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState)
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state
    return (
      <div className="App">
        <Particles
          className="App-particles__container"
          params={particleParams}
        />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageInputForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceDetection box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    )
  }
}

export default App
