import React from 'react'
import './index.css'

const BoardButton = (props) => {
    const classes = `board-button ${props.boardHoverClass}`
    return (
        <button className={classes} onClick={props.onClick}>{props.value}</button>
    )
}
const GameBoard = ({ boardButtonArray, onClick, xNext }) => {
    const boardHoverClass = xNext ? 'board-button-blue' : 'board-button-green';
    return (
        <div className="game-board">
            { boardButtonArray.map((value, index) => <BoardButton key={index} value={value} onClick={() => onClick(index)} boardHoverClass={boardHoverClass} />) }
        </div>
    )
}

export default GameBoard;