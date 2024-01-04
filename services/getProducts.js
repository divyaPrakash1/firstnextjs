export default async function getProducts() {
    const results = await fetch("https://dummyapi.online/api/products");
    return results.json();
}