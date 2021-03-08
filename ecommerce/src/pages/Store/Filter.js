import React,{useEffect, useState,useRef} from 'react';
import classNames from 'classnames';
import {useStore} from '../../Hooks/Store';
import Style from './Filter.module.css';
import StyleCommon from '../../common.module.css';
export default function Filter (props){
    const {showFilter,changeFilter} = useStore();
    const liClassificationRefs = useRef([]);
    const liPriceRefs = useRef([]);
    const liColorRefs = useRef([]);
    const tagsRefs = useRef([]);
    const liClassification=[
        {id:'relevancia',text:'relevância'},
        {id:'popularity',text:'popularidade'},
        {id:'high price',text:'maior preço'},
        {id:'low price',text:'menor preço'}
    ];
    const liPrice = [
        {id:'0-50',text:'$0,00-50,00'},
        {id:'50-100',text:'$100,00-150,00'},
        {id:'150-200',text:'$150,00-200,00'},
        {id:'200-250',text:'$200,00-250,00'},
        {id:'250',text:'$250,00+'}
    ];
    const liColor = [
        {id:'red', text:'vermelho'},
        {id:'black', text:'preto'},
        {id:'blue', text:'azual'},
        {id:'gray', text:'cinza'},
        {id:'white', text:'branco'},
    ];
    const tags = [
        {id:'fashion',text:'Fashion'},
        {id:'lifeStyle',text:'Lifestyle'},
        {id:'denin',text:'Denin'},
        {id:'streetStyle',text:'Streetstyle'},
        {id:'crafts',text:'Crafts'},
       
        
    ]
    useEffect(()=>{

    },[])
    // changeLiActive remove a class LiActive de algum array de refs e adiciona na li que foi clicada
    const handleFilter=(typeFilter,value)=>{
        changeFilter(typeFilter,value)
    }
    const changeLiActive=(arrayRef,indexLiClicked)=>{
        arrayRef.map((theRef)=>
        theRef.classList.remove(Style.liActive)
        )
        arrayRef[indexLiClicked].classList.add(Style.liActive) 
    }

    const changeTagActive=(arrayRef,indexTagClicked)=>{
        arrayRef.map((theRef)=>
        theRef.classList.remove(Style.tagActive)
        )
        arrayRef[indexTagClicked].classList.add(Style.tagActive)
    }
    const resetElementsActive=()=>{
        let allElementsLi =[].concat(liClassificationRefs.current,liPriceRefs.current,liColorRefs.current);
        allElementsLi.map((elementHtmlLi)=>{
            elementHtmlLi.classList.remove(Style.liActive)
        })
        tagsRefs.current.map((elementHtmlDiv)=>
           elementHtmlDiv.classList.remove(Style.tagActive)
        )
        liClassificationRefs.current[0].classList.add(Style.liActive);
    }
    return(<>
        <div className={classNames(Style.filter,Style.flexVariant,StyleCommon.flex,{[Style.openFilter]:showFilter,[Style.closeFilter]:!showFilter})}>
            <div 
            onClick={()=>resetElementsActive()}
            className={Style.clean}>
            limpar
            </div> 
            <div className={Style.typeFilter}>
                <ul>
                    <h4>classificar</h4>
                     {liClassification.map((objectValue,index)=>
                        <li 
                        className={classNames({[Style.liActive]:index==0})}
                        key={index}
                        onClick={()=>{changeLiActive(liClassificationRefs.current,index);handleFilter('classification',objectValue.id)}} 
                        ref={el=>liClassificationRefs.current[index]=el}>
                            {objectValue.text}
                        </li> 
                    )}
                </ul> 
            </div>
            <div className={Style.typeFilter}>
                <ul>
                    <h4>preço</h4>
                    {liPrice.map((objectValue,index)=>
                         <li 
                         key={index}
                         onClick={()=>{changeLiActive(liPriceRefs.current,index);handleFilter('price',objectValue.id)}} 
                         ref={el=>liPriceRefs.current[index]=el}>
                            {objectValue.text}
                        </li>     
                    )}
                </ul> 
            </div>
            <div className={Style.typeFilter}>
                <ul>
                    <h4>Cor</h4>
                    {liColor.map((objectValue,index)=>
                       <li 
                       key={index}
                       onClick={()=>{changeLiActive(liColorRefs.current,index);handleFilter('color',objectValue.id)}}
                       ref={el=>liColorRefs.current[index]=el}>
                           {objectValue.text}
                       </li>
                    )}
                </ul>
            </div>   
            <div className={Style.typeFilter}>
                <ul>
                    <h4>Tags</h4>
                    <div className={classNames(StyleCommon.flex,Style.tagFlex)}>
                        {tags.map((objectValue,index)=>
                         <div 
                         key={index}
                         onClick={()=>{changeTagActive(tagsRefs.current,index);;handleFilter('tag',objectValue.id)}}
                         ref={el=>tagsRefs.current[index]=el}
                         className={classNames(Style.tag)}>
                             {objectValue.text}
                         </div>
                        )}
                    </div>
                </ul>
            </div> 
        </div>
        </>
    )
}