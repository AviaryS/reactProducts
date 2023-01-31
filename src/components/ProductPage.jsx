import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductPage = ({ products, setProducts }) => {
    const params = useParams();
    const product = products.find((product) => product.id === +params.id);

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Link to='/'>На главную</Link>
        </div>
    );
};

export default ProductPage;