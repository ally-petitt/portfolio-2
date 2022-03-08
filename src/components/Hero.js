import { Typography, Box, Stack } from "@mui/material"
import gsap from "gsap";
import { useEffect, useRef } from "react"
import mouseIcon from "../icons/mouse.svg"

function Hero() {
  const mouseRef = useRef();

  useEffect(() => {
    gsap.to(mouseRef.current, { 
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      duration: 1.2
     });
  });

  return (
    <Box bgcolor="primary.main" position="relative" color="white" flexDirection="column" textAlign="center" height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h1" letterSpacing={2}>Ally Petitt</Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{position: "absolute", bottom: "55px"}}>
            <Typography letterSpacing={2} variant="subtitle1" sx={{  display: "inline" }}>
                SCROLL
            </Typography>
            <img ref={mouseRef} src={mouseIcon} style={{ display: "inline", height: "20px", marginBottom: "3px" }}/>
        </Stack>
    </Box>
  )
}

export default Hero