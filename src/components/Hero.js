import { Typography, Box, Stack } from "@mui/material"
import mouseIcon from "../icons/mouse.svg"

function Hero() {
  return (
    <Box bgcolor="primary.main" position="relative" color="white" flexDirection="column" textAlign="center" height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h1" letterSpacing={2}>Ally Petitt</Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{position: "absolute", bottom: "55px"}}>
            <Typography letterSpacing={2} variant="subtitle1" sx={{  display: "inline" }}>
                SCROLL
            </Typography>
            <img src={mouseIcon} style={{ display: "inline", height: "25px" }}/>
        </Stack>
    </Box>
  )
}

export default Hero