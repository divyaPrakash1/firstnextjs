
async function productList() {
    let data = await fetch("https://dummyapi.online/api/products");
    data = await data.json();
    return data;
}

export default async function Page() {
    let products = await productList();
    return (
        <div>
            <h1>Product Name list</h1>
            {products && products.length > 0 && products.map((product, index) => (
                <div key={index}>
                    <h2> Product Name : {product.name} </h2>
                </div>
            ))}
        </div>
    )
}