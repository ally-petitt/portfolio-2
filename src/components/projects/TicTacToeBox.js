

function TicTacToeBox({ gridValues, i }) {

  return (
    <div key={gridValues[i]} 
        className="ttt-box" 
        style={{ height: "100%", 
            width: "100%", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            fontWeight: "500", 
            fontSize: "20px" 
        }} 
        id={`ttt-box${i}`} 
        className="no-select">
            {gridValues[i]}
    </div>
  )
}

export default TicTacToeBox