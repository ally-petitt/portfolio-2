import { Typography, Grid, Box } from '@mui/material'
import Button from './accessory/Button'
import Light from './shapes/Light'
import "./projects.css"
import gsap from 'gsap';
import useRefs from "react-use-refs";
import { useEffect } from 'react';

function Projects({ refs }) {
  const [lightsContainer, timeline] = useRefs();

  

  // useEffect(() => {
  //   const lights = lightsContainer.current.children
  //   timeline.current = gsap.timeline({yoyo: true, repeat:-1 })
  //     .from(lights, {
  //       x: 10,
  //       y: 10,
  //       stagger: 0.3,
  //       duration: 2
  //     })
  //     .to(lights, {
  //       y: 10,
  //       x: -10,
  //       stagger: 0.2,
  //       duration: 2
  //     })
  //     .from(lights, {
  //       x: 0,
  //       y: 0,
  //       stagger: 0.3,
  //       duration: 2
  //     })
  //     .to(lights, {
  //       y: -5,
  //       x: 15,
  //       stagger: 0.4,
  //       duration: 2
  //     })
  //     .from(lights, {
  //       x: 10,
  //       y: -10,
  //       stagger: 0.3,
  //       duration: 2
  //     })

  // }, [])


  return (
    <Grid spacing={1} container id="projectsContainer" color="white" position="sticky" top={0} left="50vw" height="100vh" py={5} pr={4} width="50vw" style={{ display: "none" }} justifyContent="center" alignItems="center">
      <Grid item xs={6} id="pj0" className="grid-item__projects" ref={refs[0]} display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Lights Out</Typography>
        <Box id="lightsContainer__projects" height="170px" ref={lightsContainer}>
          {
            [42, 32, 28, 22, 19].map((diameter, i) => {return(<Light diameter={diameter} i={i}/>)})
          }
        </Box>
        <Button link="https://ally-petitt.github.io/lights-out/" />
      </Grid>

      <Grid item xs={6} id="pj1" className="grid-item__projects" ref={refs[1]}>
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Tic-Tac-Toe</Typography>
        <Box id="gridContainer__projects" height="170px">
          
        </Box>
        <Button link="https://angular-tic-tac-toe-caf79.web.app/" />
      </Grid>

      <Grid item xs={6} id="pj2" className="grid-item__projects" ref={refs[2]}>
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Bullseye</Typography>
        <Box id="targetContainer__projects" height="170px">
          
        </Box>
        <Button link="https://ally-petitt.github.io/Target-Todos/" />
      </Grid>
      
      <Grid item xs={6} id="pj3" className="grid-item__projects" ref={refs[3]}>
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Sudoku Solver</Typography>
        <Box id="numbersContainer__projects" height="170px">
          
        </Box>
        <Button link="https://ally-petitt.github.io/sudoku-solver/" />
      </Grid>
    </Grid>
  )
}

export default Projects