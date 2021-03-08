import React,{useEffect} from 'react';
import Product from './Product';
import Style from './Products.module.css';
import StyleCommon from '../../common.module.css';
import classNames from 'classnames';
import {getProductsApi} from './ProductsApi';
import {useStore}  from '../../Hooks/Store'
export default function Products(props){
    const {page,limit,filter,newListProducts,products}  = useStore();
    let {layoutType} = props;
    useEffect(async()=>{
        getProducts();
    },[page]);
    const getProducts=async()=>{
        console.log(layoutType)
        try{
            let resultProducts = await getProductsApi(`/products?_page=${page}&_limit=${limit}`);
            newListProducts(resultProducts) 
            console.log(resultProducts)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className={classNames({[Style.gridVariantCard]:layoutType=='card',[Style.gridVariantList]:layoutType=='list'},StyleCommon.grid)}>
            {products.map((infoProduct,index)=>
                <Product
                layoutType={layoutType}
                infoProduct={infoProduct}
                key={index}></Product>        
            )}
            
    
         
        </div>
    )
}