import { useState } from "react"
export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 }) // initial value = 0 in State for all 
    let [arr, SetArr] = useState(["no moves"])

    let updateBlue = () => {
        // setMoves((prevMoves) => {
        //     return { ...prevMoves, blue: prevMoves.blue + 1 }
        // });

        // Using Array in State
        SetArr((prevArr) => {
            return [...prevArr, "blue moves"];
        });
        console.log(arr);

    }

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 }
        });
    }
    let updateGreen = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 }
        });
    }
    let updateRed = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 }
        });
    }
    return (
        <div>
            <p>Game Begins !</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue", color: "white", fontSize: "20px" }} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black", fontSize: "20px" }} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green", color: "white", fontSize: "20px" }} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red", color: "white", fontSize: "20px" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}