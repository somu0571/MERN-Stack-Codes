import LotteryGame from './LotteryGame'
import './App.css'
import TicketNum from './TicketNum'
import Ticket from './Ticket';
import Lottery from "./LotteryGame";
import { sum } from "./helper";

function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15; // we can change the condition according to our need
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
