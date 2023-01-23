import React from 'react';
function Key({displayValue, onChange, guessButton, letterIndex}) {
    console.log("guessButton + " + guessButton);
    return (
        <button disabled={!guessButton.enabled} className="key" onClick={(e) => onChange(e, letterIndex)}>
            {guessButton.letter}
        </button>
    );
}

export default Key;