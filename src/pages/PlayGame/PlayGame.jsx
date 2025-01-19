import { Link } from "react-router-dom"
import MaskedText from "../../components/MaskedText/MaskedText"
import LetterButtons from "../../components/LetterButtons/LetterButtons"
import { useState } from "react";

function PlayGame() {
  const [usedLetters, setUsedLetters] = useState([]);

  function handleLetterClick(letter){
    setUsedLetters([...usedLetters, letter]);
  }

  return (
    <div>
        <h1>PlayGame</h1>
        <MaskedText text="humble" usedLetters={usedLetters}/>
        <br/>
        <LetterButtons text="humble" usedLetters={usedLetters} onLetterClick={handleLetterClick}/>
        <Link to={'/start'} className="text-blue-600 underline hover:text-blue-800">StartGame</Link>
    </div>
  )
}

export default PlayGame