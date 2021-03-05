import React,{createContext,useState} from 'react';
import ComponentCart from './ComponentCart';
export const ContextCart = createContext();

export const ContextCartProvider = (props)=>{
    const [productsSelected,setProductsSelected] = useState([]);
    const [showCart,setShowCart] = useState(false);

    const  addProductItem=()=>{
            console.log('add')
    }
    const removeProducItem=()=>{

    }
    const openCart=()=>{
        setShowCart(true);
    } 
    const closeCart = ()=>{
        setShowCart(false);
    }
    const values={
        productsSelected,
        addProductItem,
        removeProducItem,
        openCart,
        closeCart
    }
    return(
        <ContextCart.Provider
        value={values}
        >
            <ComponentCart 
            showCart={showCart}
            closeCart={closeCart}
            
            >
                
            </ComponentCart>
            {props.children}
        </ContextCart.Provider>
    )
}