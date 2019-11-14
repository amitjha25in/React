import React, { createContext, useState, useEffect } from 'react';
import { products } from '../data/candere';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        setProduct([products]);
    }, []);
    return (
        <ProductContext.Provider value={{ product }}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;