import {get} from '../../services/apiDefault';

export const getEvaluations =async (product_id)=>{
    product_id=1;
   try{
       let listEvaluation = await get(`/evaluations?product_id=${product_id}`);
        if(listEvaluation.status===200){
            if(listEvaluation.data.length>0){
                return listEvaluation.data;
            }else{
                throw({status:listEvaluation.status,data:listEvaluation.data})
            }
        }else{
            throw({status:listEvaluation.status,data:listEvaluation.data})
        }
   }catch(err){
    throw({status:500,data:err})
   }
}