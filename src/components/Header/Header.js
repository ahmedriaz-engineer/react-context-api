import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category ,setCategory] = useContext(CategoryContext);

    const laptopClick = () => {
        setCategory("Laptop")
    }
    const mobileClick = () => {
        setCategory("Mobile")
    }
    const cameraClick = () => {
        setCategory("Camera")
    }
    return (
        <div>
            <h1>Context Api</h1>
            <h3>Select Your Category</h3>
            <button onClick={laptopClick}> Laptop</button>
            <button onClick={mobileClick}>Mobile</button>
            <button onClick={cameraClick}>Camera</button>
        </div>
    );
};

export default Header;