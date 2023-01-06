import { useState } from "react";

function Counter() {
    // the value we pass to the invocation of the useState is the initial state our component needs.
    // const state = useState(42);  // => [42, f]

    // const count = state[0];
    // const setCount = state[1];

    const [count, setCount] = useState(0);

    // Array destructuring assignment syntax


    // When the useState hook is invoked, it returns an array containing the initial state and function
    // to change that state - we call this a setter function

    // event handler function

    const handleIncrement = () => {
        if(count === 10) return;
        // setCount (count + 1);  //we are depending on existing state value to update state
        setCount((preventState) => preventState + 1);
    };


/*
when we depend of previous state to update state to a new value
React recommmends that we use the callback pattern
*/


    return (
        <>
            <span>Current Count: <span style={{color: count < 0 ? 'red' : 'black'}}>{count}</span></span>
            <section>
                <button disabled={count === 10} onClick={handleIncrement}>+</button>
                <button disabled={count === -10} onClick={() => setCount(count - 1)}>-</button>
            </section>
        </>
    )
}
export default Counter;
