import React,{createContext, useState} from 'react';
import props from '../../components/Button';

export const ContextStore= createContext();


export const ContextStoreProvider = (props)=>{
    const limit = 30;
    const [showFilter,setShowFilter] = useState(false);
    const [filter,setFilter] = useState({});
    const [products,setProducts] = useState([]);
    const [page,setPage] = useState(0);

    // controla a exibição do componente filter
    const handleShowFilter=(showOrHidden)=>{
        setShowFilter(showOrHidden);
    }
    const addProductsToList = (listProducts)=>{
        setProducts(products.concat(listProducts));
    }
    const newListProducts = (listProducts)=>{
        setProducts([]);
        setProducts(listProducts);
    }
    const changeFilter = (attributeName,value)=>{
        setPage(0);
        setFilter(filter=>({...filter,[attributeName]:value}))
        
        
    }
    const cleanFilter = ()=>{
        setPage(0)
        setFilter(``)
    }
    const addParamAndValueToFilter = (paramAndValue)=>{
        if(filter.length==1){
            setFilter(filter+paramAndValue);
        }else{
            setFilter('&'+filter+paramAndValue);
        }
    }


    const values={
            handleShowFilter,
            limit,
            products,
            showFilter,
            page,
            filter,
            addProductsToList,
            newListProducts,
            changeFilter,
            cleanFilter
    }
    return(
    <ContextStore.Provider
        value={values}
    >
        {props.children}
    </ContextStore.Provider>
    )
}