import React from 'react';

export default function Letter({ correctGuesses, letterIndex, isGameOver, word}) {

    return (
        <span className="letter">
            {displayLetter()}
        </span>
    );

    function displayLetter() {
        if (isGameOver) {
            return word.substring(letterIndex, letterIndex + 1);
        }

        return correctGuesses.has(letterIndex) ? correctGuesses.get(letterIndex) : "-";
    }
}