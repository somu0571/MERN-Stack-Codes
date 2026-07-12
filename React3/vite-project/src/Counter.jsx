import { useState } from "react";
import LikeButton from "./LikeButton";
export default function Counter() {
    // let count = 0;

    // function inCount() {
    //     count += 1;
    //     console.log(count);
    // }

    function init() {
        return Math.random(); // we can pass a function in useState, & it will only be called once
    }

    let [count, setCount] = useState(init);  // is a built-in React Hook that allows you to add state variables to functional components
    console.log("Component is rendered!");
    console.log(`count = ${count}`);
    let inCount = () => {
        // setCount(count + 1);
        // console.log(count);
        setCount((currCount) => { // using callback in state function
            return currCount + 1;
        });

    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Count Increase</button> {/*State in React */}
            <LikeButton />
        </div>
    )
}