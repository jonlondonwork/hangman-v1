import React from 'react';
import Key from '../Key';

export default function Keyboard({ handleChange, guessButtons }) {
    return (
        guessButtons.map(function (guessButton, index) {
            return <Key key={guessButton.letter} guessButton={guessButton} onChange={handleChange} letterIndex={index}/>;
        })

    );
}