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
      
    timeline.current.fromTo(textRef.current,{
        y: 900,
        opacity: 0
      } ,{
        y: 0,
        duration: 2,
        opacity: 1,
      })
      .to(textRef.current, {
        color: "#ff0000",
        duration: 3,
      })

    // var tween = gsap.fromTo(textRef.current,{
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

    // console.log(tween)
    

  }, [])

  return (
    <div>
      <Box textAlign="center" display="flex" alignItems="end" justifyContent="stretch">
        <div style={{ width:"100%" }}>
          <div id="textContainer" style={{ height: "1300px", pointerEvents: "none", position: "sticky", top: "0", textAlign: "center", padding: "40px", width: "100vw" }}>
            <Typography ref={textRef} variant="h1" m={0} fontWeight="300" letterSpacing={2} component="h3" sx={{ position: "sticky", top: 0 }}>FRONTEND<br/>DEVELOPER</Typography>
          </div>
          {/* <Box id="anim1" mt="100vh" width="100%" height="100vh"></Box> */}
        </div>
        {/* <Box id="logoContainer" width="50vw" > */}
          <div id="logoInnerContainer" style={{ position: "sticky", top: "0", padding: "40px",  height: "1300px", width: "50vw" }}>
            <img src={ICONS.react} ref={logoRef} style={{ position: "sticky", top: "0" }}/>
            <Box id="smallLogoContainer" ref={logosRef} position="sticky" top={0}>
              { // render in all the logos
                Object.entries(ICONS).map(([key, value]) => {
                  if (key != "react") return <img style={{ opacity: "0" }} src={ICONS[key]} alt={`${ICONS[key]} logo`} />
                })
              }
            </Box>
          </div>
          
          {/* <div id="trigger1" style={{ height: "100vh" }}></div>
          <div id="trigger2" style={{ height: "100vh" }}></div>  */}
        {/* </Box> */}
      </Box>
    </div>
  )
}

export default FrontendSection