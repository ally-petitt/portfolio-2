import { Typography, Grid, Box } from '@mui/material'
import Button from '../accessory/Button'
import Light from '../shapes/Light'
import "./projects.css"
import gsap from 'gsap';
import useRefs from "react-use-refs";
import { useContext, useEffect } from 'react';
import { CursorContext } from "../../App"
import TicTacToeGrid from './TicTacToeGrid';

function Projects({ refs }) {
  const [lightsContainer, timeline] = useRefs();
  const [focusCursor, setFocusCursor] = useContext(CursorContext)

  useEffect(() => {
    refs.map(ref => {
      ref.current.addEventListener("mouseover", () => setFocusCursor(true))
      ref.current.addEventListener("mouseout", () => setFocusCursor(false))
    })

  }, [])
  


  return (
    <Grid spacing={2} container id="projectsContainer" color="white" position="sticky" top={0} left="50vw" height="100vh" py={5} pr={4} width="50vw" style={{ display: "none" }} justifyContent="center" alignItems="center">
      <Grid item title="click me" xs={6} id="pj0" className="grid-item__projects" ref={refs[0]} display="flex" alignItems="center" justifyContent="space-between" flexDirection="column">
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Lights Out</Typography>
        <Box id="lightsContainer__projects" height="170px" maxWidth="300px" ref={lightsContainer}>
          {
            [42, 32, 28, 22, 19].map((diameter, i) => {return(<Light diameter={diameter} i={i}/>)})
          }
        </Box>
        <Button link="https://ally-petitt.github.io/lights-out/" />
      </Grid>

      <Grid item title="click me" xs={6} id="pj1" className="grid-item__projects" ref={refs[1]} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Tic-Tac-Toe</Typography>
          <TicTacToeGrid  />
        <Button link="https://angular-tic-tac-toe-caf79.web.app/" />
      </Grid>

      <Grid item title="click me" xs={6} id="pj2" className="grid-item__projects" ref={refs[2]}>
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Bullseye</Typography>
        <Box id="targetContainer__projects" height="170px">
          
        </Box>
        <Button link="https://ally-petitt.github.io/Target-Todos/" />
      </Grid>
      
      <Grid item title="click me" xs={6} id="pj3" className="grid-item__projects" ref={refs[3]}>
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Sudoku Solver</Typography>
        <Box id="numbersContainer__projects" height="170px">
          
        </Box>
        <Button link="https://ally-petitt.github.io/sudoku-solver/" />
      </Grid>
    </Grid>
  )
}

export default Projects