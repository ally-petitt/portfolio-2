import { Typography, Grid, Box } from '@mui/material'
import Button from './accessory/Button'
import Light from './shapes/Light'
import "./projects.css"

function Projects() {

  return (
    <Grid spacing={1} container id="projectsContainer" color="white" position="sticky" top={0} left="50vw" height="100vh" py={5} pr={4} width="50vw" style={{ display: "none" }} justifyContent="center" alignItems="center">
      <Grid item xs={6} id="item1">
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Lights Out</Typography>
        <Box id="lightsContainer__projects" height="170px">
          {
            [23, 13, 14, 11, 7].map((diameter) => {return(<Light diameter={diameter} />)})
          }
        </Box>
        <Button link="https://ally-petitt.github.io/lights-out/" />
      </Grid>

      <Grid item xs={6} id="item2">
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Tic-Tac-Toe</Typography>
        <Box id="gridContainer__projects" height="170px">
          
        </Box>
        <Button link="https://angular-tic-tac-toe-caf79.web.app/" />
      </Grid>

      <Grid item xs={6} id="item3">
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Bullseye</Typography>
        <Box id="targetContainer__projects" height="170px">
          
        </Box>
        <Button link="https://ally-petitt.github.io/Target-Todos/" />
      </Grid>
      
      <Grid item xs={6} id="item4">
        <Typography variant="h5" fontFamily="Source Code Pro, monospace">Sudoku Solver</Typography>
        <Box id="numbersContainer__projects" height="170px">
          
        </Box>
        <Button link="https://ally-petitt.github.io/sudoku-solver/" />
      </Grid>
    </Grid>
  )
}

export default Projects