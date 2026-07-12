import "./Product.css"

function Product(props) {
    let isDiscount = props.price > 30000 ? "5% discount" : "0% discount"; // using ternary operator for conditional statements
    // let style = { backgroundColor: "yellow" }; // using dynamic component styling in React
    let styles = { backgroundColor: props.price > 30000 ? "Red" : "" }; // using dynamic component styling in React with conditional Statements

    return (
        <div className="product-card" style={styles}>
            <h3>{props.title}</h3> {/*Used props to display the title passed from ProductTab component* basically it's a way to pass data from a parent component to a child component*/}
            <p>Price : {props.price}</p>
            <p>{isDiscount}</p>
            {/* <p>{props.features}</p>
            <p>{props.features2.a}</p>
            <p>{props.features2.b}</p>
            <p>{props.features2.c}</p> */}
        </div>
    )
}

export default Product;