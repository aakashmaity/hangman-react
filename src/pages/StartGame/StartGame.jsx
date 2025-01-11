import { Link } from "react-router-dom"

function StartGame() {
  return (
    <div>
        <h1>StartGame</h1>
        <Link to={'/play'}>PlayGame</Link>
    </div>
  )
}

export default StartGame