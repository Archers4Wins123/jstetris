import React, { useEffect } from "react";
import { moveDown } from "../actions";
import { moveLeft } from "../actions";
import { moveRight } from "../actions";
import { rotate } from "../actions";
import { Connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'

export default function Controls(props) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.isRunning)

    useEffect(() => {
        const handleArrowKeys = (event) => {
            if (event.keyCode === 37) {
                dispatch(moveLeft())
            }
            if (event.keyCode === 38) {
                dispatch(rotate())
            }
            if (event.keyCode === 39) {
                dispatch(moveRight())
            }
            if (event.keyCode === 40) {
                dispatch(moveDown())
            }
        };
        window.addEventListener('keydown', handleArrowKeys);

        return () => {
            window.removeEventListener('keydown', handleArrowKeys);
        };
    }, []);
    return (
        <div className="controls">
            {/* left */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveLeft())
            }}>Left</button>
            {/* right */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveRight())
            }}>Right</button>
            {/* rotate */}
            <button className="control-button" onClick={(e) => {
                dispatch(rotate())
            }}>Rotate</button>
            {/* down */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveDown())
            }}>Down</button>
        </div>
    )
}