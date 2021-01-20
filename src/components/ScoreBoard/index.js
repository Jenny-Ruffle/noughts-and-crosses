import React from 'react'
import './index.css'

const ScoreBoard = ({winner, xNext}) => {
    return (
        <div className="scoreboard">
            {winner ? <p className="scoreboard-text-bold"> {`Player ${winner} has won!`} </p> : <p className="scoreboard-text"> {`Player ${(xNext ? "X" : "O")}'s turn`} </p>}
        </div>
    )
}


export default ScoreBoard;