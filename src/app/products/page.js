import Link from "next/link";
import getProducts from "./../../../services/getProducts";
export default async function Page() {
    const getProductList = getProducts();
    const productList = await getProductList;
    return (
        <div>
            <h1>Product List</h1>
            {productList && productList.length && productList.map((product, index) => (
                <h2 key={index}>
                    {/* <p>{product.name}</p> */}
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                </h2>
            ))}
        </div>
    )
}