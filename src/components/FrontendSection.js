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
    // // animation to fade in text
    // gsap.fromTo(textRef.current,{
    //   y: 900,
    //   opacity: 0
    // } ,{
    //   y: 0,
    //   duration: 2,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: "#textContainer",
    //     scrub: .8,
    //   }
    // })


    // // animation to move text to the left
    // gsap.fromTo(textRef.current,{
    //   y: 0,
    //   width: "100vw"
    // }
    //   ,{
    //   width: "50vw",
    //   y: (window.innerHeight / 2),
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: "#anim1",
    //     scrub: .8
    //   }
    // })


    // // animation to fade up logo
    // gsap.fromTo(logoRef.current, {
    //   opacity: 0,
    //   y: 0,
    //   display: "none"
    // }, {
    //   opacity: 1,
    //   y: (window.innerHeight / 2),
    //   display: "inline",
    //   scrollTrigger: {
    //     trigger: "#trigger1",
    //     scrub: .8
    //   }
    // })


    // // animation to bring in other logos
    // gsap.fromTo(logosRef.current, {
    //   opacity: 0,
    //   y: "-400px",
    // }, {
    //   opacity: 1,
    //   y: (window.innerHeight / 2),
    //   scrollTrigger: {
    //     trigger: "#trigger2",
    //     markers: true,
    //     scrub: .8
    //   }
    // })

    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#textContainer",
        scrub: .8 
      }
    })

    timeline.current
     // make text and logos transparent before animations begin
      .set(textRef.current, { opacity: 0, x: 500 })
      .set(logoRef.current, { opacity: 0 })
      .set(logosRef.current, { opacity: 0 })

      // fade text up
      .from(textRef.current, {
          y: 900,
          duration: 2,
          opacity: 1,
        })
    // move text to left
      .to(textRef.current, {
          x: "0",
          y: (window.innerHeight / 2),
          duration: 1,
        })
      // fade up react logo
      .fromTo(logoRef.current, 1, {
          opacity: 0,
          y: 0,
        }, {
          opacity: 1,
          y: (window.innerHeight / 2),
          duration: 2
        })
  

  }, [])

  return (
    <div>
      <Box textAlign="center" display="flex" alignItems="end" maxWidth="100vw">
        <div>
          <div id="textContainer" style={{ width: "50vw", height: "10000px", pointerEvents: "none", position: "sticky", top: "0", textAlign: "center", padding: "40px"}}>
            <Typography ref={textRef} variant="h1" m={0} fontWeight="300" letterSpacing={2} component="h3" sx={{ position: "sticky", top: 0 }}>FRONTEND<br/>DEVELOPER</Typography>
          </div>
        </div>
        <Box id="logoContainer" width="50vw" >
          <div id="logoInnerContainer" style={{ position: "sticky", top: "0",  height: "1300px", width: "100%" }}>
            <img src={ICONS.react} ref={logoRef} style={{ position: "sticky", top: "0" }}/>
            <Box id="smallLogoContainer" ref={logosRef} position="sticky" top={0}>
              { // render in all the logos
                Object.entries(ICONS).map(([key, value]) => {
                  if (key != "react") return <img style={{ opacity: "0" }} src={ICONS[key]} alt={`${ICONS[key]} logo`} />
                })
              }
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default FrontendSection