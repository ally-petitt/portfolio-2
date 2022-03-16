import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import ICONS from "../icons/index.js"
import "./frontend.css"
import Projects from './Projects.js';

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
      // .set(textRef.current, { opacity: 0, x: 500 })
      .set(logoRef.current, { opacity: 0, y: 100 })
      .set(logosRef.current, { opacity: 0, y: -100, scale: 0.9 })

      // fade text up
      // .from(textRef.current, {
      //     y: 900,
      //     duration: 2,
      //     opacity: 1,
      //   })
    // move text to left
      .to(textRef.current, .75, {
          x: 0,
          y: 0,
          duration: 2,
        })
      // fade up react logo
      .to(logoRef.current, 1 ,{
          opacity: 1,
          y: 0,
          duration: 2
        })
      // lower other logos
      .to(logosRef.current, {
        y: 0,
        opacity: 1,
        duration: 2,
        scale: 1
      })
      // animate out text
      .to(textRef.current, 0.8, {
        rotateX: "90deg",
        rotateY: "90deg",
        opacity: "0",
        x: -400,
        y: -200,
        scale: .6,
        duration: .8,

      })
      // TODO: make parallax where logos move faster than react logo on scroll
      .to("#logoContainer", { y: "-100vh", duration: 2, scale: 0.8, opacity: 0})
  

  }, [])

  return (
    <div>
      <Box bgcolor="primary.main">
        <div id="wrapper" style={{ position: "sticky", top: "0", textAlign: "center", justifyContent: "center", display: "flex", maxWidth: "100vw"}}>
          <div id="textContainer" style={{ width: "50vw", height: "200vh", pointerEvents: "none", position: "sticky", top: "0", textAlign: "center", padding: "40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Typography id="text" color="white" ref={textRef} lineHeight={1.3} variant="h1" m={0} fontWeight="300" letterSpacing={2} component="h3" sx={{ position: "sticky", top: 0 }}>FRONTEND<br/>DEVELOPER</Typography>
          </div>
          <Box id="logoContainer" width="50vw" position="sticky" top={0} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
              <img src={ICONS.react} ref={logoRef} style={{ zIndex: "2", width: "60%", position: "relative", padding: "40px" }}/>
              <Box container id="smallLogoContainer" ref={logosRef} position="relative" top={-1}  width="65%">
                { // render in all the logos
                  Object.entries(ICONS).map(([key, value]) => {
                    if (key != "react") return (
                      <img id={`${key}-logo`} style={{ opacity: 1, position: "relative" }} src={ICONS[key]} alt={`${key} logo`} />
                    )
                  })
                }
              </Box>
          </Box>
        </div>
        <Projects />
      </Box>
    </div>
  )
}

export default FrontendSection