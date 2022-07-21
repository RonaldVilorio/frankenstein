import { gsap } from 'gsap/all';
import './App.css';
import {useRef, useEffect} from "react"
function App() {
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: 360 });
  });
  return (
    <div className="App">
        <div className="box"ref={boxRef}>Hello</div>
    </div>
  );
}

export default App;
