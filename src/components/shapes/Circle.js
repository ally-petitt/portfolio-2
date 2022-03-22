import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react"
import { gsap } from "gsap"
import "./index.css"

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();
    
  useImperativeHandle(ref, () => {           
    
    return {
      moveTo(x, y) {
        gsap.to(el.current, { x, y, delay });
      }
    };
  }, [delay]);
  
  return <div className={`circle ${size}`} ref={el}></div>;
});

function Cursor() {    
  const circleRefs = useRef([]);
  
  circleRefs.current = [];
     
  useEffect(() => {
    
    circleRefs.current.forEach(ref => ref.moveTo(window.innerWidth / 2, window.innerHeight / 2));
    
    const onMove = ({ clientX, clientY }) => {      
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
    
    window.addEventListener("pointermove", onMove);
    
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  
  const addCircleRef = ref => {
    if (ref) {
      circleRefs.current.push(ref);
    }    
  };
  
  return (
    <div className="app">   
      <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
    </div>
  );
}

export default Cursor