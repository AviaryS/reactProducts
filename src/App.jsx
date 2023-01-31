import './App.css'
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", description: "Description", reviews: [] },
        { id: 2, name: "Product 2", description: "Description", reviews: [] },
        { id: 3, name: "Product 3", description: "Description", reviews: [] },
        { id: 4, name: "Product 4", description: "Description", reviews: [] },
        { id: 5, name: "Product 5", description: "Description", reviews: [] },
    ]);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Products products={products} />} />
                    <Route path="/product/:id"
                        element={<ProductPage products={products} setProducts={setProducts} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;