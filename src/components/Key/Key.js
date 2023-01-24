import React from 'react';
function Key({onChange, guessButton, letterIndex}) {
    console.log("guessButton + " + guessButton);
    return (
        <button disabled={!guessButton.enabled} className="button" onClick={(e) => onChange(e, letterIndex)}>
            {guessButton.letter}
        </button>
    );
}

export default Key;