import React from 'react';
import StarsEvaluation from '../../components/StarsEvaluation';
import Style from './EvaluationItem.module.css';
export default function(props){
    let {data} = props;
    return (
        <div  className={Style.evaluationItem}>
            <header>
                    <div>
                           <h5>{data.name_user} </h5> 
                    </div>
                    <div>
                            <StarsEvaluation evaluationNumber={data.evaluation} ></StarsEvaluation> 
                    </div>
            </header>
            <div className={Style.message}>
                    {data.message}
            </div>
        </div>
    )
}