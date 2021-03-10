import React,{useRef, useState,useEffect} from 'react';
import className from 'classnames'
import Style from './Images.module.css';
import StyleCommon from '../../common.module.css';
export default function Images(props){
    let {infoProduct} = props;

    const [imageMain,setImageMain] =useState();
    
    const [listImages,setListImages] = useState([
        "https://ecommerceteste1.s3.amazonaws.com/product/product-08.jpg",
        "https://ecommerceteste1.s3.amazonaws.com/product/product-06.jpg"
    ]);
    useEffect(()=>{
        if(infoProduct.imageLocation != undefined){
                setListImages(listImages=>[infoProduct.imageLocation,...listImages])
                setImageMain(imageMain=>( infoProduct.imageLocation));
            }
    },[infoProduct.imageLocation])
   
    const changeImageMain=(imageLocation)=>{
        setImageMain(imageLocation);
        
    }
    return(
        <div className={className(Style.images,StyleCommon.flex)}>
            <div className={Style.listImages}>
                    {listImages.map((imageLocation,index)=>
                    <div  
                    key={index}
                    onClick={()=>changeImageMain(imageLocation)}
                    onMouseEnter={()=>changeImageMain(imageLocation)}><img src={imageLocation}></img></div>
                    )}
                
            </div>
            <div className={Style.singleImage}>
                <img  src={imageMain}></img>
            </div>
        </div>
    )
}