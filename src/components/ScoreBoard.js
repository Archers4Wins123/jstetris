import React from "react";
import { Connect } from "react-redux";
import { pause } from "../actions";
import { resume } from "../actions";
import { restart } from "../actions";
import { useSelector, useDispatch } from "react-redux";

export default function ScoreBoard(props) {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game)
    const {score, isRunning, gameOver} = game
    return (
        <div className="score-board">
            <div>Score:{ score }</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
                if(gameOver) {return};
                if(isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }}>{isRunning ? 'Pause' : 'Play'}</button>
            <button className="score-board-button" onClick={(e) => {
                dispatch(restart())
            }}>Restart</button>
        </div>
    )
}