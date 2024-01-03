"use client"
import { useEffect, useState } from "react";

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyapi.online/api/products");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <div>
            <h1>Product List</h1>
            {products && products.length > 0 && products.map((product, index) => (
                <h4 key={index}>Name : {product.name}, Price : {product.brand}</h4>
            ))}
        </div>
    )
}