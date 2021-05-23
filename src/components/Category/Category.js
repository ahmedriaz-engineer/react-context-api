import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';


const allProducts = [
    {name: "Samsung", category: "mobile"}, {name: "Oppo", category: "mobile"}, {name: "Vivo", category: "mobile"},
    {name: "HP", category: "laptop"}, {name: "Apple", category: "laptop"}, {name: "Lenovo", category: "laptop"}, 
    {name: "Nikon", category: "camera"}, {name: "Codak", category: "camera"}, {name: "Sony", category: "camera"},
]

const Category = () => {
    const [category] = useContext(CategoryContext);

    const [products, setProducts] = useState([]);

    useEffect(()=>{
       const matchedProduct = allProducts.filter(product=> product.category === category.toLowerCase());
       setProducts(matchedProduct);
    }, [category])
    
    return (
        <div>
            <h3>Your Selected Categories</h3>
            {
                products.map(product=><CategoryDetail product ={product}></CategoryDetail>)
            }
        </div>
    );
};

export default Category;