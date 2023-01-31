import React from "react";
import { useNavigate } from "react-router";

const Product = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={() => navigate(`/product/${product.id}`)}> Подробнее</button>
        </div>
    );
};

const Products = ({ products }) => {
    return products.map((product) => {
        return <Product key={product.id} product={product} />;
    });
};

export default Products;