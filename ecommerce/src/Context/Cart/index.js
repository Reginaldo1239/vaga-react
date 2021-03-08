import React,{createContext,useState,useEffect} from 'react';
import infoProduct from '../../pages/ProductDetail/infoProduct';
import ComponentCart from './ComponentCart';
export const ContextCart = createContext();

export const ContextCartProvider = (props)=>{
    const [productsSelected,setProductsSelected] = useState([]);
    const [showCart,setShowCart] = useState(false);

    useEffect(()=>{
       let itensCart = JSON.parse(localStorage.getItem('itensCart'));
       if(itensCart){
       setProductsSelected(itensCart)
        }
    },[])
    
    const  addProductItem=(newItem)=>{
    // permite adiciona um produto de determinado id
        let existProductInCart=  productsSelected.find((product)=>{
               return product.id==newItem.id;
            });
        if(existProductInCart == undefined){
            let newArrayProductsSelected = productsSelected;
            newItem.quantity=1;
            newArrayProductsSelected.push(newItem)
            setProductsSelected(productsSelected=>[...newArrayProductsSelected]);
            localStorage.setItem('itensCart',JSON.stringify(newArrayProductsSelected))
        }
    }
    const removeProducItem=(index)=>{
        let  newArrayProductsSelected= []
        console.log(productsSelected.length)
        productsSelected.map((productItem,i)=>{
                if(index!=i){
                    newArrayProductsSelected.push(productItem)
                }
        });
        setProductsSelected(productsSelected=>[...newArrayProductsSelected]);
        localStorage.setItem('itensCart',JSON.stringify(newArrayProductsSelected))
    }
    const changeQuantityItem =(quantity,index)=>{
        if(quantity>0){
        let arrayProductsSelected = productsSelected;
        arrayProductsSelected[index].quantity = quantity;
        setProductsSelected(productsSelected=>[...arrayProductsSelected]);
        }
     }
    const openCart=()=>{
        setShowCart(true);
    } 
    const closeCart = ()=>{
        setShowCart(false);
    }

    const getTotalCart=()=>{
        let total =0;
        productsSelected.map((infoProduct)=>{
            total += infoProduct.price*infoProduct.quantity;
        });
        return parseFloat(total).toFixed(2);
    }
    const values={
        productsSelected,
        addProductItem,
        removeProducItem,
        openCart,
        closeCart,
        changeQuantityItem,
        getTotalCart
    }
    return(
        <ContextCart.Provider
        value={values}
        >
            <ComponentCart 
            showCart={showCart}
            closeCart={closeCart}
            productsSelected={productsSelected}
            removeProducItem={removeProducItem}
            closeCart={closeCart}
            
            >
                
            </ComponentCart>
            {props.children}
        </ContextCart.Provider>
    )
}