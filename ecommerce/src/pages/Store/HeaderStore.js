import React, { useRef, useEffect } from 'react';
import className from 'classnames';
import {useStore} from '../../Hooks/Store';
import Button from '../../components/Button';
import Style from './HeaderStore.module.css';
import StyleCommon from '../../common.module.css';

const ListLi =(props)=>{
    const liRef = useRef([]);
    const optionsLi=['Todos produtos','Mulher','Homem','Mochila','Watches'];
    useEffect(()=>{ 
        addClassNameLiActive(0);
    },[])
    const addClassNameLiActive=(index)=>{
        liRef.current.map((li)=>{
            li.classList.remove(Style.liActive)
        })
        liRef.current[index].classList.add(Style.liActive);
    }
    return( <>
         {optionsLi.map((value,index)=>
            <li 
            key={index}
            onClick={()=>addClassNameLiActive(index)} ref={el=> liRef.current[index] = el} >{value}</li>
            )}
            </>
    )
}

export default function HeaderStore(props){
    const {handleShowFilter,showFilter} = useStore();
    useEffect(()=>{
        console.log(showFilter)
    },[])
    return (
        <header className={className(StyleCommon.flex,Style.flexVarient,Style.headerStore)}>
            <div className={Style.containerNav}>
                <nav className={Style.nav}>
                    <ul className={StyleCommon.flex}>
                       <ListLi></ListLi>
                    </ul>
                </nav> 
            </div>
            <div className={className(Style.containerButtons,StyleCommon.flex)}>
                <div className={Style.itemButton}>
                    <Button 
                    onClick={()=>handleShowFilter(!showFilter)}
                    otherClassNames={Style.buttonVariant}>
                        { showFilter ? 'x': 'filtro'}
                    </Button>
                </div>
                <div className={Style.itemButton}>
                    <Button otherClassNames={Style.buttonVariant}>
                        buscar
                    </Button> 
                </div>
            </div>
           
        </header>
    )
}