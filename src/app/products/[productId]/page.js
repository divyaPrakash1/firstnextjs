import getProducts from "@/../../services/getProducts"



export default async function Page(props) {
    const getProductList = getProducts();
    const productList = await getProductList;
    console.log(props.params.productId)
    const currentId = props.params.productId;
    const productDetail = productList[currentId - 1];
    // console.log(productList[currentId - 1])
    return (
        <div>
            <h2>Product detail</h2>
            <h3>Name: {productDetail.name}</h3>
            <h3>Category: {productDetail.productCategory}</h3>
            <h3>Brand: {productDetail.brand}</h3>
            <h3>Display: {productDetail.display}</h3>
            <h3>Category: {productDetail.productCategory}</h3>
        </div>
    )
}
// static pages will create under .next/app/products
export async function generateStaticParams() { // method name must be same as generateStaticParams
    const getProductList = getProducts();
    const productList = await getProductList;
    return productList.map((product) => ({
        productId: product.id.toString()
    }))
}