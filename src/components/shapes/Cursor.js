import { useEffect, useRef, useContext, useImperativeHandle, forwardRef } from "react"
import { gsap } from "gsap"
import "./index.css"
import { CursorContext } from "../../App"

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
  const [focusCursor] = useContext(CursorContext)
     
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
    <>   
      <Circle size={focusCursor ? "focused" : "md"} ref={addCircleRef} delay={focusCursor ? 0: 0.1} />
      <Circle size={focusCursor ? "focused" : "lg"} ref={addCircleRef} delay={focusCursor ? 0: 0.2} />
      <Circle size={focusCursor ? "focused" : "sm"} ref={addCircleRef} delay={focusCursor ? 0: 0} />
    </>
  );
}

export default Cursor

