

function TicTacToeBox({ gridValues, i, setGridValues }) {
    
    const handleClick = () => {
        setGridValues(values => {
            const list = values.map((item, j) => {
                if (j === i) {
                    if (item === "X" || item === "") return "O"
                    if (item === "O") return "X"
                }
                else return item
            })
            return list
        })
        console.log(gridValues)
    }

  return (
    <div style={{ height: "100%", width: "100%"}} onClick={handleClick}>{gridValues[i]}</div>
  )
}

export default TicTacToeBox