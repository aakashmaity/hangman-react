import { Link } from "react-router-dom"

function PlayGame() {
  return (
    <div>
        <h1>PlayGame</h1>
        <Link to={'/start'}>StartGame</Link>
    </div>
  )
}

export default PlayGame