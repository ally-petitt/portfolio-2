import { Grid } from "@mui/material"
import { useRef } from "react";
import { useEffect } from "react";
import "./index.css"

function TicTacToeGrid() {
    const gridRef = useRef();

    useEffect(() => {
        gridRef.current.addEventListener('mouseover', () => {gridRef.current.style.maxWidth = "170px"})
        gridRef.current.addEventListener('mouseout', () => {gridRef.current.style.maxWidth = "160px"})
    })

  return (
    <Grid container spacing={0} maxWidth="160px" id="ttt-grid" ref={gridRef}>
        {
            
            ([...Array(9)]).map((val, i) => {return ( 
            <Grid item xs={4} className="ttt-line" id={`ttt-line${i}`}>

            </Grid> )})
        }
    </Grid>
  )
}

export default TicTacToeGrid