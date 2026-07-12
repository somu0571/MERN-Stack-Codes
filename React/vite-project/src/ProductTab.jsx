import Product from "./Product";
import Act from "./Act";

function ProductTab() {
    const options = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li>];
    const options2 = {
        a: "screen",
        b: "battery",
        c: "camera"
    };

    return (
        <div>
            <Product title="Phone" price={50000} features={options} features2={options2} />
            <Product title="Laptop" price={80000} features={options} features2={options2} />
            <Product title="TV" price={20000} features={options} features2={options2} />
            < Act />
        </div>
    );
}

export default ProductTab;