import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import reactIcon from "../icons/react-icon.svg"

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
      y: 0
    }
      ,{
      width: "50vw",
      y: (window.innerHeight / 2),
      duration: 2,
      scrollTrigger: {
        trigger: "#anim1",
        scrub: .8,
      }
    })
  })

  console.log((window.innerHeight / 2))

  return (
    <div>
      <Box textAlign="center" height="180vh">
        <span id="textContainer" style={{ height: "1300pxg", pointerEvents: "none", position: "sticky", top: "0", textAlign: "center", padding: "40px" }}>
          <Typography ref={textRef} variant="h1" m={0} fontWeight="300" letterSpacing={2} component="h3" sx={{ position: "sticky", top: 0 }}>FRONTEND<br/>DEVELOPER</Typography>
        </span>

        <Box id="anim1" mt="100vh" height="100vh" ref={logoRef}></Box>
        <Box>
          box1
          <img src={reactIcon} />
        </Box>
      </Box>
    </div>
  )
}

export default FrontendSection