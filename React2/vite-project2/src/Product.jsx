function Product({ title, description, oldPrice, newPrice }) {
    return (
        <div className="product-card">
            <h2>{title}</h2>

            <p className="description">{description}</p>

            <p className="old-price">₹{oldPrice}</p>

            <p className="new-price">₹{newPrice}</p>

            <button>Buy Now</button>
        </div>
    );
}

export default Product;