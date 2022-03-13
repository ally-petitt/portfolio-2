import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import ICONS from "../icons/index.js"

function FrontendSection() {
  gsap.registerPlugin(ScrollTrigger)
  // todo: clean this up
  const textRef = useRef();
  const logoRef = useRef();
  const logosRef = useRef();
  const timeline = useRef();

  useEffect(() => {

    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#textContainer",
        scrub: .8 
      }
    })

    timeline.current
     // make text and logos transparent before animations begin
      .set(textRef.current, { opacity: 0, x: 500 })
      .set(logoRef.current, { opacity: 0, y: 100 })
      .set(logosRef.current, { opacity: 0 })

      // fade text up
      .from(textRef.current, {
          y: 900,
          duration: 2,
          opacity: 1,
        })
    // move text to left
      .to(textRef.current, .75, {
          x: 0,
          y: 0,
          duration: 1,
        })
      // fade up react logo
      .to(logoRef.current,{
          opacity: 1,
          y: 0,
          duration: 1
        })
  

  }, [])

  return (
    <div>
      <Box>
        <div id="wrapper" style={{ position: "sticky", top: "0", height: "3000px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "100vw"}}>
          <div id="textContainer" style={{ width: "50vw", height: "100vh", pointerEvents: "none", position: "sticky", top: "0", textAlign: "center", padding: "40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Typography ref={textRef} lineHeight={1.3} variant="h1" m={0} fontWeight="300" letterSpacing={2} component="h3" sx={{ position: "sticky", top: 0 }}>FRONTEND<br/>DEVELOPER</Typography>
          </div>
          <Box id="logoContainer" width="50vw" position="sticky" top={0} >
              <img src={ICONS.react} ref={logoRef} style={{ width: "60%", position: "sticky", top: "0", height: "100vh", padding: "40px" }}/>
              <Box id="smallLogoContainer" ref={logosRef} position="sticky" top={0}>
                { // render in all the logos
                  Object.entries(ICONS).map(([key, value]) => {
                    if (key != "react") return <img style={{ opacity: "0" }} src={ICONS[key]} alt={`${ICONS[key]} logo`} />
                  })
                }
              </Box>
          </Box>
        </div>
      </Box>
    </div>
  )
}

export default FrontendSection