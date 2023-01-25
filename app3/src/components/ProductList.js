import Product from "./Product";
import { products } from "../seed";

export default function ProductList(){
    const productComponentsArray = products.map((product) =>{
        return (
            <Product 
                id= {product.id}
                title= {product.title}
                descr= {product.description}
                ownerImage = {product.submitterAvatarUrl}
                imageURL = {product.productImageUrl}
                />
        )
    })
    return(
        <div className="products">
            {productComponentsArray}
        </div>
    )
}