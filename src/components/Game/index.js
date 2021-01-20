import React, { useState } from 'react';
import GameBoard from '../GameBoard';
import ScoreBoard from '../ScoreBoard';
import { calculateWinner } from '../../utils';

const RestartButton = ({handleClick}) => (
    <button className="restart-button" onClick={handleClick}>
        Restart game
    </button>
)

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [xNext, setXNext] = useState(true);
    const winner = calculateWinner(board);

    const restartFunction = () => setBoard(Array(9).fill(''));

    const handleClick = (index) => {
        const newBoard = [...board];
        if (winner || newBoard[index] !== '' ) return;
        newBoard[index] = xNext ? 'X' : 'O';
        setBoard(newBoard);
        setXNext(!xNext);
    };

    return (
        <>
            <GameBoard onClick={handleClick} boardButtonArray={board} xNext={xNext}/>
            <ScoreBoard winner={winner} xNext={xNext} />
            <RestartButton handleClick={restartFunction} />
        </>
    )
}

export default Game;