import { useEffect } from "react";
import gsap from 'gsap';
import useRefs from "react-use-refs";


function Light({ diameter, i }) {
  const [light, timeline] = useRefs();

  console.log(i*2)

  useEffect(() => {
    const lights = light.current
    timeline.current = gsap.timeline({yoyo: true, repeat:-1 })
      .from(lights, {
        x: 10,
        y: 10,
        stagger: 0.3,
        duration: i,
      })
      .to(lights, {
        y: 10,
        x: -10,
        duration: i,
      })
      .from(lights, {
        x: 0,
        y: 0,
        duration: i,
      })
      .to(lights, {
        y: -5,
        x: 15,
        duration: i,
      })
      .from(lights, {
        x: 10,
        y: -10,
        duration: i,
      })
  }, [])


  return (
    <div ref={light} style={{ backgroundColor: "#FAE4C4", height: `${diameter}px`, width: `${diameter}px`, borderRadius: "50%", transition: "all 0.3s ease" }} id={`light${i}`}></div>
  )
}

export default Light