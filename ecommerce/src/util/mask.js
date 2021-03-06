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


export const maskCpfOrCnpj =(params)=>{
    let {event} = params;
    let value;
    if(event){
        value = event.currentTarget.value;
        console.log(value)
       if(event.key=='Backspace' && event.type=='keydown'){
          value = value.slice(0,value.length-1); 
           event.preventDefault();
       }else{
       value = value.replace(/\D/g,'');
       value = value.replace(/(\d{3})/,'$1.');
       value = value.replace(/(\d{3})\.(\d{3})/,'$1.$2.');
       value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})/,'$1.$2.$3-');
       if(value.length>14){
           value= value.replace(/\D/g,'');
           value = value.replace(/^(\d{2})/, "$1.");
           value = value.replace(/^(\d{2}).(\d{3})/, "$1.$2.")
           value = value.replace(/^(\d{2}).(\d{3}).(\d{3})/, "$1.$2.$3/");
           value = value.replace(/^(\d{2}).(\d{3}).(\d{3})\/(\d{4})/, "$1.$2.$3/$4-");
       }
    }
    }

    return value.slice(0,18);
}