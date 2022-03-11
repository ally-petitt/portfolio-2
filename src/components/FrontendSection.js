import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import ICONS from "../icons/index.js"

function FrontendSection() {
  gsap.registerPlugin(ScrollTrigger)
  const textRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    // animation to fade in text
    gsap.fromTo(textRef.current,{
      y: 900,
      opacity: 0
    } ,{
      y: 0,
      duration: 2,
      opacity: 1,
      scrollTrigger: {
        trigger: "#textContainer",
        scrub: .8,
      }
    })


    // animation to move text to the left
    gsap.fromTo(textRef.current,{
      y: 0,
      width: "100vw"
    }
      ,{
      width: "50vw",
      y: (window.innerHeight / 2),
      duration: 2,
      scrollTrigger: {
        trigger: "#anim1",
        scrub: .8
      }
    })


    // animation to fade up logo
    gsap.fromTo(logoRef.current, {
      opacity: 0,
      y: 0,
      display: "none"
    }, {
      opacity: 1,
      y: (window.innerHeight / 2),
      display: "inline",
      scrollTrigger: {
        trigger: "#trigger1",
        markers: true,
        scrub: .8
      }
    })


    // animation to bring in other logos

  })

  return (
    <div>
      <Box textAlign="center" display="flex" alignItems="end" justifyContent="stretch">
        <div style={{ width:"100%" }}>
          <div id="textContainer" style={{ height: "1300px", pointerEvents: "none", position: "sticky", top: "0", textAlign: "center", padding: "40px" }}>
            <Typography ref={textRef} variant="h1" m={0} fontWeight="300" letterSpacing={2} component="h3" sx={{ position: "sticky", top: 0, width: "100%" }}>FRONTEND<br/>DEVELOPER</Typography>
          </div>
          <Box id="anim1" mt="100vh" width="100%" height="100vh"></Box>
        </div>
        <Box id="logoContainer" width="50vw" >
          <div id="logoInnerContainer" style={{ position: "sticky", top: "0", padding: "40px",  height: "1300px" }}>
            <img src={ICONS.react} ref={logoRef} style={{ position: "sticky", top: "0" }}/>
            <Box id="smallLogoContainer">
              { // render in all the logos
                Object.entries(ICONS).map(([key, value]) => {
                  if (key != "react") return <img src={ICONS[key]} />
                })
              }
            </Box>
          </div>
          
          <div id="trigger1" style={{ height: "100vh" }}></div>
          <div id="trigger2" style={{ height: "100vh" }}></div> 
        </Box>
      </Box>
    </div>
  )
}

export default FrontendSection