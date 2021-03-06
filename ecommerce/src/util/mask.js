export const maskCreditCard= (params)=>{
    let {flag,numberCard} = params;
    if( typeof numberCard=='string'){  
        numberCard=   numberCard.replace(/\D/g,'');
            if(flag =='visa' || flag=='master-card' || flag== undefined  || flag == null){
                numberCard=numberCard.replace(/^(\d{4})(\d)/g,"$1 $2");
                numberCard=numberCard.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
                numberCard=numberCard.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
                numberCard=numberCard.replace(/^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4 $5");
                //returns 19 characters because it counts spaces
                return numberCard.slice(0,19);
            }
    }
    throw 'numberCard no is a string';
}