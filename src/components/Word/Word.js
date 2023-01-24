import React from 'react';
import Letter from '../Letter';
export default function Word({ word, correctGuesses, isGameOver }) {
    return (
        <div className="word center">
            {word.split('').map(function (name, index) {
                return <Letter key={"letter_" + name + "_" + index} correctGuesses={correctGuesses} letterIndex={index} isGameOver={isGameOver} word={word} />
            })}
        </div>
    );
}