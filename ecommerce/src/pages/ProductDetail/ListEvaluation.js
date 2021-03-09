import React,{useEffect, useState} from 'react';
import Loading from '../../components/Loading';
import StarsEvaluation from '../../components/StarsEvaluation';
import EvaluationItem from './EvaluationItem';
import {getEvaluations} from './ListEvaluationApi';
import IsEmpty from '../../components/IsEmpty';
import Style from './ListEvaluation.module.css'

export default function ListEvaluation(props){
    const [loading,setLoading] = useState(false);
    const [evaluations,setEvaluations] = useState([]);
    useEffect(async()=>{
        setLoading(true)
        try{
           
          let resultEvaluation = await  getEvaluations(1)
          setEvaluations(resultEvaluation)
          setLoading(false)
        }catch(err){
            setLoading(false)
        }
    },[])

   if(loading)  return  <div className={Style.loading}><Loading></Loading></div>

    return(
        evaluations.length>0?(
        <div className={Style.listEvaluation}>
            <header>
                <h3>4.8</h3>
                <StarsEvaluation evaluationNumber={5}></StarsEvaluation>
                <h5>Média de avaliações</h5>
               
            </header>
            <div>
                {evaluations.map((data,index)=>
                    <EvaluationItem data={data}></EvaluationItem>
                 )}

            </div>
        </div>
        ):(
           
                <IsEmpty>Esse produto ainda não tem nenhuma avaliação</IsEmpty>
            
        )
    )
}