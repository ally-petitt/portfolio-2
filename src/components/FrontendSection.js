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
    gsap.from(textRef.current, {
      y: "90vh",
      duration: 2,
      scrollTrigger: {
        trigger: "#textBox"
      }
    })
  })

  return (
    <div style={{ height: "100vh" }}>
      <Box textAlign="center" id="textBox">
        <Typography ref={textRef} variant="h1" fontWeight="300" letterSpacing={2} component="h3">FRONTEND DEVELOPER</Typography>
      </Box>
    </div>
  )
}

export default FrontendSection