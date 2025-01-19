const ALPHABETS = new Array(26).fill('').map((e, idx) => String.fromCharCode(65 + idx)) // ['A', 'B', 'C', ... 'Z'] ASCII code

function LetterButtons({ text,usedLetters, onLetterClick }) {
    const originalLetters = new Set(text.toUpperCase().split(''));
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

    const buttonStyle = function(letter){
        if(selectedLetters.has(letter)){
            return `${originalLetters.has(letter) ? 'bg-green-600 border-green-700 hover:bg-green-700' : 'bg-red-600 border-red-700 hover:bg-red-700'}`
        } else {
            return "bg-blue-500 border-blue-700 hover:bg-blue-700"
        }
    }
    const handleClick = function(e){
        const character = e.target.value;
        onLetterClick?.(character);
    }

    const buttons = ALPHABETS.map(letter => {
        return (
            <button 
                className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white border-2 shadow-xl ${buttonStyle(letter)}`}
                value={letter}
                disabled={selectedLetters.has(letter)}
                onClick={handleClick}
                key={`button-${letter}`}
            >
                {letter}
            </button>
        )
    })
    return (
        <>
            {buttons}
        </>
    )
}

export default LetterButtons