import { Grid } from "@mui/material"
import { useRef, useState } from "react";
import { useEffect } from "react";
import "./index.css"
import TicTacToeBox from "./TicTacToeBox";

function TicTacToeGrid() {
    const gridRef = useRef();
    const tttBoxRef = useRef();
    const [gridValues, setGridValues] = useState(Array(9).fill("X"))

    useEffect(() => {
        gridRef.current.addEventListener('mouseover', () => {gridRef.current.style.maxWidth = "170px"})
        gridRef.current.addEventListener('mouseout', () => {gridRef.current.style.maxWidth = "160px"})
        tttBoxRef.current.addEventListener("click", () => {})
    })

  return (
    <Grid container spacing={0} maxWidth="160px" id="ttt-grid" ref={gridRef}>
        {
            
            ([...Array(9)]).map((val, i) => {return ( 
            <Grid item xs={4} className="ttt-line" id={`ttt-line${i}`} ref={tttBoxRef}>
                <TicTacToeBox gridValues={gridValues} i={i} setGridValues={setGridValues}/>
            </Grid> )})
        }
    </Grid>
  )
}

export default TicTacToeGrid