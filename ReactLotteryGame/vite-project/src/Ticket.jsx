import TicketNum from "./TicketNum";

export default function Ticket({ ticketNum }) {
    return (
        <div>
            {ticketNum.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    )
}

