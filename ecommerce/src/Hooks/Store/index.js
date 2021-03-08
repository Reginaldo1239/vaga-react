import React,{useContext} from 'react';
import {ContextStore} from '../../Context/Store';
export const useStore= (props)=>{
    return useContext(ContextStore);
}