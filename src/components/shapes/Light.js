import { useEffect, useState } from "react";
import gsap from 'gsap';
import useRefs from "react-use-refs";
import "./index.css"


function Light({ diameter, i }) {
  const [light, timeline] = useRefs();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const lights = light.current
    timeline.current = gsap.timeline({yoyo: true, repeat:-1 })
      .from(lights, {
        x: 10,
        y: 10,
        stagger: 0.3,
        duration: i+1,
      })
      .to(lights, {
        y: 10,
        x: -10,
        duration: i+1,
      })
      .from(lights, {
        x: 0,
        y: 0,
        duration: i+1,
      })
      .to(lights, {
        y: -5,
        x: 15,
        duration: i+1,
      })
      .from(lights, {
        x: 10,
        y: -10,
        duration: i+1,
      })

    light.current.addEventListener("click", () => {
      const classname = light.current.classList[0]
      if (classname === "filled") light.current.classList="outline"
      else light.current.classList="filled"
    })
  }, [])

  

  return (
    <div ref={light} style={{ 
      height: `${diameter}px`, 
      width: `${diameter}px`, 
      borderRadius: "50%", 
      transition: "all 0.3s ease" 
    }}
    className="filled"
    id={`light${i}`} 
    ></div>
  )
}

export default Light