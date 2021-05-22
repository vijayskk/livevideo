import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";


function App() {
  return (
    <div className="App">
      <div style={{border:"2px solid black"}}><Webcam /></div>
         
    </div>
  );
}

export default App;
