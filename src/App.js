import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';

function App() {
  return (
    <div className="App">
      <Particles />
      <Navigation />
      <Logo />
      <ImageInputForm />
      {/* 
      <FaceDetection /> */}
    </div>
  );
}

export default App;
