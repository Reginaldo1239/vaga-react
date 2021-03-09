import {get} from '../../services/apiDefault';

export const getInfoSiteApi =async(product_id)=>{
    try{
       let infoProduct = await get(`/products?id=${product_id}`);
        if(infoProduct.status==200){
            if(infoProduct.data.length>0){
                return infoProduct.data[0];
            }else{
                throw({status:infoProduct.status,data:infoProduct.data});
            } 
        }else{
            throw({status:infoProduct.status,data:infoProduct.data});
        }
    }catch(err){
        throw (err); 
    } 
} 