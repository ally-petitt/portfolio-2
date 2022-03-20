

function Light({ diameter }) {
  return (
    <div style={{ backgroundColor: "#FAE4C4", height: `${diameter}px`, width: `${diameter}px`, borderRadius: "50%", transition: "all 0.3s ease" }} id="light"></div>
  )
}

export default Light