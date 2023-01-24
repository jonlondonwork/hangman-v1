import React from 'react';
import { useState, useRef } from 'react';
import Word from '../Word';
import Keyboard from '../Keyboard';
import { Grid, Column, Row } from '@carbon/react';
import Canvas from '../Canvas';
export default function Gameboard(props) {

    const headRadius = 15;

    const canvasRef = useRef(null);

    const words = ["warm", "wink", "wave", "well", "wick", "wine", "wild", "will", "work", "wood", "wool", "word", "yard", "yarn", "yawn", "yell", "yoga", "yolk", "zest", "zero", "zest", "zoom", "able", "bake", "bell", "belt", "bend", "best", "bill", "bird", "blow", "blue", "boat", "body", "book", "boom", "bore", "born", "boss", "both", "bowl", "buzz", "cafe", "call", "calm", "camp", "card", "care", "case", "cash", "cast", "cell", "chat", "chip", "city", "clap", "clay", "clean", "clear", "climb", "clock", "cloth", "cloud", "club", "coach", "coast", "coat", "code", "coil", "coin", "cold", "color", "comb", "come", "cook", "cool", "cope", "copy", "cork", "cost", "count", "court", "cover", "crab", "craft", "crash", "crawl", "crazy", "cream", "credit", "creek", "crew", "crop", "cross", "crowd", "crown", "cruel", "crush", "cry"];
    const randomWord = words[getRandomInt(0, words.length)];

    const initGuessButtons = Array.from({ length: 26 }, (_, i) => ({
        letter: String.fromCharCode(i + 65),
        enabled: true
    }));

    var initialState = {
        selectedKey: "-",
        word: randomWord.toUpperCase(),
        correctGuesses: new Map(),
        incorrectGuessFunctions: [
            drawGroundLine,
            drawVerticalLine,
            drawTopLine,
            drawRope,
            drawHead,
            drawLeftArm,
            drawRightArm,
            drawBody,
            drawRightLeg,
            drawLeftLeg
        ],
        isGuessCorrect: false,
        isGameOver: false,
        guessButtons: initGuessButtons
    }

    const [state, setState] = useState(initialState);

    function handleReset(e) {
        setState(initialState);
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    function handleGuess(e, letterIndex) {
        var mySelectedKey = e.target.innerText;
        updateGuesses(mySelectedKey, letterIndex);
    }

    function updateGuesses(mySelectedKey, letterIndex) {
        console.log(state.word);
        console.log(mySelectedKey);
        var correctGuess = false;
        for (var i = 0; i < state.word.length; i++) {
            if (state.word[i] === mySelectedKey) {
                state.correctGuesses.set(i, mySelectedKey);
                correctGuess = true;
            }
        }

        if (!correctGuess) {
            if (!state.isGameOver) {
                state.incorrectGuessFunctions.shift()();
            }
        }

        setState(prevState => {
            const newState = { ...prevState };
            newState.guessButtons[letterIndex].enabled = false;
            newState.selectedKey = mySelectedKey;
            newState.isGameOver = !state.incorrectGuessFunctions.length;
            return newState;
        });
    }

    return (
        <Grid>
            <Column sm={4} md={8} lg={16} >
                <Canvas canvasRef={canvasRef} />
                <Word word={state.word} correctGuesses={state.correctGuesses} isGameOver={state.isGameOver} />
            </Column>
            <Column sm={4} md={8} lg={{ span: 8, offset: 4 }} >
                <Keyboard handleChange={handleGuess} guessButtons={state.guessButtons} />
                <div className='center'>
                    <button className='button' onClick={(e) => handleReset(e)}>Play Again</button>
                </div>
            </Column>
        </Grid>
    );

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    function drawGroundLine() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(220, 280);
        ctx.lineTo(100, 280);
        ctx.stroke();
    }

    function drawVerticalLine() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(100, 80);
        ctx.stroke();
    }

    function drawTopLine() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(220, 80);
        ctx.stroke();
    }

    function drawRope() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(220, 120);
        ctx.stroke();
    }

    function drawHead() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.arc(220, 120, headRadius, 0, 2 * Math.PI); //head
        ctx.fill();
    }

    function drawLeftArm() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.moveTo(220, 120 + headRadius); //bottom middle of the head circle as a starting point to draw the arms
        ctx.lineTo(250, 120 + headRadius); // right arm
        ctx.stroke();
    }

    function drawRightArm() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.moveTo(220, 120 + headRadius); //bottom middle of the head circle as a starting point to draw the arms
        ctx.lineTo(190, 120 + headRadius); // left arm
        ctx.stroke();
    }

    function drawBody() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.moveTo(220, 120 + headRadius); //bottom middle of the head circle as a starting point to draw body
        ctx.lineTo(220, 170); //body
        ctx.stroke();
    }

    function drawRightLeg() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(245, 200); //right arm
        ctx.stroke();
    }

    function drawLeftLeg() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.moveTo(220, 170); //bottom of body as starting point to draw right leg
        ctx.lineTo(195, 200); //left leg
        ctx.stroke();
    }
}