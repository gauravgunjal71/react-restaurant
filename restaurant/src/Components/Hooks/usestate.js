import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        count > 0 ? setCount(count - 1) : setCount(0);
    };

    return (
        <>
            <div className="center_div">
                <p>{count}</p>
                <div className="button2" onMouseMove={incrementCount}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
                <div className="button2" onMouseMove={decrementCount}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREMENT
                </div>
            </div>
        </>
    );
};

export default UseState;
