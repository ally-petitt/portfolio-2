import { Grid } from '@mui/material'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import "./projects.css"

function SudokuGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFirstHover, setIsFirstHover] = useState(true)

  const showNumbers = (wasClicked) => {
    //  only show numbers if it was clicked or if it is the first hover
    if (wasClicked === true || isFirstHover) {


      gsap.to(".sudGridItem:not(.sudGridItem.visible)", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5
      })
      setIsVisible(true)
      if (isFirstHover) setIsFirstHover(false)
    }
    console.log(isFirstHover)
  }

  const toggleNumbers = () => {
    console.log('click')
    if (isVisible) {
      // remove numbers from view
      gsap.to(".sudGridItem:not(.sudGridItem.visible)", {
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
      })
      setIsVisible(false)
    } else {
      showNumbers(true)
    }
  }
    



  return (
    <Grid container id="sudokuGrid" spacing={0} width="160px" maxHeight="170px" onMouseOver={showNumbers} onClick={toggleNumbers}>
      <Grid item className="sudGridItem" xs={4} display="flex" justifyContent="center" alignItems="center">1</Grid>
      <Grid item className="sudGridItem" xs={4} display="flex" justifyContent="center" alignItems="center">7</Grid>
      <Grid item className="sudGridItem" xs={4} display="flex" justifyContent="center" alignItems="center">3</Grid>
      <Grid item className="sudGridItem" xs={4} display="flex" justifyContent="center" alignItems="center">2</Grid>
      <Grid item className="sudGridItem visible" xs={4} display="flex" justifyContent="center" alignItems="center">5</Grid>
      <Grid item className="sudGridItem" xs={4} display="flex" justifyContent="center" alignItems="center">8</Grid>
      <Grid item className="sudGridItem" xs={4} display="flex" justifyContent="center" alignItems="center">6</Grid>
      <Grid item className="sudGridItem" xs={4} display="flex" justifyContent="center" alignItems="center">9</Grid>
      <Grid item className="sudGridItem" xs={4} display="flex" justifyContent="center" alignItems="center">4</Grid>
    </Grid>
  )
}

export default SudokuGrid