import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'

function FrontendSection() {
  gsap.registerPlugin(ScrollTrigger)
  const textRef = useRef();

  const scrollAnim = gsap.from(textRef.current, {
    y: "90vh",
    duration: 2
  });

  useEffect(() => {
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
        markers: true
      }
    })
  })

  return (
    <div>
      <Box textAlign="center" height="180vh">
        <div id="textContainer" style={{ height: "1500px", pointerEvents: "none", position: "sticky", top: "0", textAlign: "center" }}>
          <Typography ref={textRef} variant="h1" fontWeight="300" letterSpacing={2} component="h3" sx={{ position: "sticky", top: 0 }}>FRONTEND DEVELOPER</Typography>
        </div>

        <Box height="100vh">
        box1
      </Box>
      </Box>
    </div>
  )
}

export default FrontendSection