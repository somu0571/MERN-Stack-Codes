// Handling Click Events
import Form from "./Form";
import Counter from "./Counter";

function printHello(event) {
    console.log("Hello World!");
    console.log(event);
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click Me!</button>
            {/* Handling Non Click Events eg. Mouse Events */}
            <div>
                <button onMouseDown={printHello}>Press Me!</button>
                <button onMouseUp={printHello}>Lift Me!</button>
                <button onMouseEnter={printHello}>Hover Me!</button>
                <button onMouseOver={printHello}>Over Me!</button>
                <Form />
                <Counter />
            </div>
        </div>
    )
}