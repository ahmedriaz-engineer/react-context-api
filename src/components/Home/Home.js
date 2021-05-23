// import React, { useContext} from 'react';
// import { CategoryContext } from '../../App';
import Category from '../Category/Category';
import './Home.css'

const Home = () => {
    // const category = useContext(CategoryContext)
    
    
    return (
        <div className="home"> 
           <h2>Home</h2>
           
           <Category></Category>

        </div>
    );
};

export default Home;