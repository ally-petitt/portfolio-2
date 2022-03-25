import { Grid } from "@mui/material"
import { useRef, useState } from "react";
import { useEffect } from "react";
import "./index.css"
import TicTacToeBox from "./TicTacToeBox";

function TicTacToeGrid() {
    const gridRef = useRef();
    const tttBoxRefs = useRef([]);
    tttBoxRefs.current = []
    const [gridValues, setGridValues] = useState(Array(9).fill("X"))

    useEffect(() => {
        gridRef.current.addEventListener('mouseover', () => {gridRef.current.style.maxWidth = "170px"})
        gridRef.current.addEventListener('mouseout', () => {gridRef.current.style.maxWidth = "160px"})
    })

    const handleClick = (e) => {
        const i = parseInt(e.target.id.charAt(e.target.id.length - 1))
        setGridValues(values => {
            const list = values.map((item, j) => {
                if (j === i) {
                    const options = ["", "O", "X"]
                    return options[(options.indexOf(item) + 1) % options.length]
                }
                else return item
            })
            return list
        })
    }

  return (
    <Grid container spacing={0} maxWidth="160px" id="ttt-grid" ref={gridRef}>
        {
            
            ([...Array(9)]).map((val, i) => {return ( 
            <Grid item xs={4} className="ttt-line" onClick={handleClick} id={`ttt-line${i}`} display="flex" justifyContent="center" alignItems="center">
                <TicTacToeBox gridValues={gridValues} i={i} setGridValues={setGridValues} />
            </Grid> )})
        }
    </Grid>
  )
}

export default TicTacToeGrid