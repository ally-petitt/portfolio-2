import { Typography, Grid } from '@mui/material'
import React from 'react'
import Button from './accessory/Button'

function Projects() {
  return (
    <Grid spacing={1} container id="projectsContainer" color="white" position="sticky" top={0} left="50vw" maxHeight="100vh" width="50vw" style={{ display: "none" }}>
      <Grid item xs={6} id="item1">
        item
        <Button link="https://ally-petitt.github.io/lights-out/" />
      </Grid>

      <Grid item xs={6} id="item2">
        item
        <Button link="https://angular-tic-tac-toe-caf79.web.app/" />
      </Grid>

      <Grid item xs={6} id="item3">
        item
        <Button link="https://ally-petitt.github.io/Target-Todos/" />
      </Grid>
      
      <Grid item xs={6} id="item4">
        item
        <Button link="https://ally-petitt.github.io/sudoku-solver/" />
      </Grid>
    </Grid>
  )
}

export default Projects