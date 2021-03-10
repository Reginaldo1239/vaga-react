import React from 'react'
import {useCart} from '../../../Hooks/Cart';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import Style from './index.module.css';
export default function Table(props){
    let {productsSelected} = useCart();
    return(
        <table className={Style.table}>
            <TableHead></TableHead>
        {productsSelected.map((infoProduct,index)=>
        <TableBody 
        infoProduct={infoProduct}
        index={index}></TableBody>
        )}
        <TableFooter></TableFooter>
            
            
           
           
        </table>
    )
} 