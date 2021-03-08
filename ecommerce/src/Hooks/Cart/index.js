import React,{useContext} from 'react';
import {ContextCart} from '../../Context/Cart';

export const  useCart=()=>{ 
    return useContext(ContextCart)
}