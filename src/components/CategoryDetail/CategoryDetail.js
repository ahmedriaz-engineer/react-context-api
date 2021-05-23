import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';



const CategoryDetail = (props) => {
    const [category] = useContext(CategoryContext);
    const {name}= props.product;
    
    
    return (
        <div>
            <h5>Your Category Details: {category}</h5>
            <p>Selected Brand: {name}</p>
            
        </div>
    );
};

export default CategoryDetail;