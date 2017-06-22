import React from 'react'

export default ({ score, isDead, restart }) => (
    <div className="score">
        <h1>SCORE: {score}</h1>
        <h1>LENGTH: {score/10+2}</h1>
        {
            isDead &&
            <button onClick={restart} className="restart-btn">RESTART</button>
        }
    </div>
)
