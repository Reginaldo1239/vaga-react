import React from 'react';
import { AiFillStar } from "react-icons/ai";

export default function StarsEvaluation(props){
    let {evaluationNumber} = props;
    return  (
    <div>
        <AiFillStar color= {evaluationNumber>=1?'#ffcB0c':'#ccc'}/>
        <AiFillStar color= {evaluationNumber>=2?'#ffcB0c':'#ccc'}/>
        <AiFillStar color= {evaluationNumber>=3?'#ffcB0c':'#ccc'}/>
        <AiFillStar color= {evaluationNumber>=4?'#ffcB0c':'#ccc'}/>
        <AiFillStar color= {evaluationNumber>=5?'#ffcB0c':'#ccc'}/>
    </div>
    )
        
}