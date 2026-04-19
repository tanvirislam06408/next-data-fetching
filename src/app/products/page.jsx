import ProductCard from "@/components/ProductCard";

const getProducts = async () => {
    const res = await fetch('http://localhost:5000/posts',{next: {revalidate: 20}});
    return res.json();
}
const ProductsPage = async () => {
    const data = await getProducts();
    return (
        <div>
            <h1>Products : {data.length}</h1>
            <div className="grid grid-cols-3 gap-2.5 container mx-auto">
                {
                    data.map(product=>{
                        return <ProductCard key={product.id} product={product}/>
                    })
                }
            </div>
            
        </div>
    );
};

export default ProductsPage;