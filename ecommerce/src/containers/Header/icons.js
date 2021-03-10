import React,{useEffect} from 'react';
import classNames from 'classnames';
import {useCart} from '../../Hooks/Cart';
import { HiShoppingCart,HiOutlineSearch } from "react-icons/hi";
import { GoThreeBars,GoX } from "react-icons/go";

import Style from './icons.module.css';
import StyleCommon from '../../common.module.css';
export default function Icons (props){
    let {openCart,productsSelected} = useCart();
    let {menuMobileVisible,showMenuMobile} = props;
 
    return(
        <div className={classNames(StyleCommon.flex,Style.icons,Style.flexVariant)}>
            <div className={classNames(Style.icon,Style.iconLupa)}>
                <HiOutlineSearch size={'2em'} ></HiOutlineSearch>
            </div>
            <div
            onClick={()=>openCart()}
            className={classNames(Style.icon,Style.iconCart)}>
                <div className={classNames(Style.icon,Style.iconCartLength)}>{productsSelected.length}</div>
                <HiShoppingCart size={'2em'}></HiShoppingCart>
            </div>
            <div
            onClick={()=>showMenuMobile()}
            className={Style.IconMenu}>
                    {menuMobileVisible?(
                        <GoX size={'2em'}></GoX>
                    ):(
                        
                        <GoThreeBars size={'2em'}></GoThreeBars>    
                    )}
                    
            </div>
            

        </div>
    )
}