/**
 * 
 * @param {text} The word to be guessed
 * @param {usedLetters} The array of letters that have been guessed so far
 * @returns 
 */

import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({ text, usedLetters }) {
  const letters = getAllCharacters(text, usedLetters).split('');

  return (
    <>
      {letters.map((letter, index) =>
        <span key={`letter-${index}`} className="inline-block mx-1">{letter}</span>
      )}
    </>
  )
}

export default MaskedText