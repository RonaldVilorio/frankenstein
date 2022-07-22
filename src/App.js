import { gsap,Draggable} from 'gsap/all';
import './App.css';
import {useRef, useEffect} from "react"
function App() {
  // const boxRef = useRef();
  // const circleRef = useRef();
  // Draggable.create(".circle")
  gsap.registerPlugin(Draggable);
  useEffect(() => {
    Draggable.create(".circle",{
      bounds:".container"
    })
  });
  return (
    <div className="App">
        <div className="container"></div>
        <div className="circle">Hello</div>
    </div>
  );
}

export default App;
