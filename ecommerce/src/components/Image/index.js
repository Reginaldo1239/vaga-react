import React,{useState} from 'react';
import Loading from '../Loading'
import Style from './index.module.css';
export default function Image(props){

    let {imageLocation} = props;
    const [imageLoading,setImageLoading] = useState(true);
    const imageLoaded=()=>{
       setImageLoading(false);
        
    }
    return (
    <div className={Style.containerImg}>
        {imageLoading?
        <div className={Style.img} ><div className={Style.imgLoading}> <Loading></Loading></div></div>
  
            :
         
            <img onLoad={imageLoaded}  src={imageLocation}/>
    
        }
            <img className={Style.display}  onLoad={imageLoaded}  src={imageLocation}/>
    </div>
    )
}