import { Route, Routes } from "react-router-dom"
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer"
import PlayGame from "./pages/PlayGame/PlayGame"
import StartGame from "./pages/StartGame/StartGame"

const App = () => {
  return (
    <>
      <div>
        <h1>Navbar</h1>
      </div>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  )
}

export default App