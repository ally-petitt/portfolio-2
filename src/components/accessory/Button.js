import "./button.css"

function Button({ link }) {
  return (
    <a target="_blank" href={link}>
      <button id="button1">SEE PROJECT</button>
    </a>
  )
}

export default Button