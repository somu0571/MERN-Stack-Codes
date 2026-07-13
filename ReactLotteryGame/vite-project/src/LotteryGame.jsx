import { useState } from "react";
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket";

export default function LotteryGame({ n, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticketNum={ticket} />
            <h3>{isWinning ? "Congratulations! You Won!" : "Better Luck Next Time!"}</h3>
            <button onClick={buyTicket}>Buy New Ticket</button>
        </div>
    )
}