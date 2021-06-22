import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageInputForm />
      {/* 
      <FaceDetection /> */}
    </div>
  );
}

export default App;
