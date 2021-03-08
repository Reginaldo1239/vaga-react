import {get} from '../../services/apiDefault';
export const getProductsApi=async(endPoint)=>{
        try{
            let products =await get(endPoint);
            if(products.status==200){
                return products.data     
            }else{
                throw products;
            }
        }catch(err){
            throw err;
        }
}