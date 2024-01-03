import Product from "./product";

async function productList() {
    let data = await fetch("https://dummyapi.online/api/products");
    data = await data.json();
    return data;
}
export default async function Page() {
    let products = await productList();
    console.log(products)
    return (
        <div>
            <h1>Product List</h1>
            {products && products.map((product) => (
                <div>
                    <h4>{product.name}</h4>
                    <Product price={product.basePrice} />
                </div>
            ))}
        </div>
    )
}