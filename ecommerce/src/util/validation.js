export const minLength=(value,minLength)=>{
    if(typeof value =='string'){
        return value.length>=minLength;
    }
    throw 'value no is a string'
} 
export const  cpfValid = (cpf)=>{
    if( typeof cpf=='string'){
    cpf =cpf.replace(/\D/g,'');
     let reg = RegExp('\\d{11}','g');   
         if(reg.test(cpf)){
             let somar=0;
             let caracteres=0;
             let restOfDivision,verifyingDigit1,verifyingDigit2,divisionResult;
         // a partir daqui verificar o primeiro digito validador
             for(let i=10;i>1;i--){
                 somar+=cpf[caracteres]*i;
                 caracteres++;
             }
             restOfDivision = somar%11;
             divisionResult = somar/11;
             verifyingDigit1 = 11-restOfDivision; 
             // a partir daqui verificar o segundo digito validador
             somar=0;
             caracteres=0;
             for(let i=11;i>1;i--){
                 somar+=cpf[caracteres]*i;
                 caracteres++;
             }
             restOfDivision = somar%11;
             divisionResult = somar/11;
             verifyingDigit2 =11-restOfDivision;
        //     console.log(verifyingDigit2)
             if(cpf[9] == verifyingDigit1 && cpf[10] == verifyingDigit2){
                 return true;
             }
        
         }
         return false;
    }
    throw 'cpf no is a string'
}

export const cnpjValid = (cnpj)=>{
    cnpj = cnpj.replace(/\D/g,'');
    let reg = new RegExp('\\d{14}','g');
    const regra1 = '543298765432';
    const regra2 ='6543298765432';
    if( typeof cpf=='string'){
    let dv1,dv2,resto1,resto2,somarAndMult1,somarAndMult2;
    if(reg.test(cnpj)){
     somarAndMult1 = (regra1[0]*cnpj[0])+(regra1[1]*cnpj[1])+(regra1[2]*cnpj[2])+(regra1[3]*cnpj[3])+(regra1[4]*cnpj[4])+(regra1[5]*cnpj[5])+(regra1[6]*cnpj[6])+(regra1[7]*cnpj[7])+(regra1[8]*cnpj[8])+(regra1[9]*cnpj[9])+(regra1[10]*cnpj[10])+(regra1[11]*cnpj[11]);
     resto1 = somarAndMult1%11;  
        if(resto1 <2){
            dv1 = 0;
        }else{
            dv1 = 11-resto1; 
        }
        //segundo dv abaixo
        somarAndMult2=0;
        for(let i=0;i<13;i++){
            somarAndMult2+= regra2[i]*cnpj[i];
        }
        resto2 = somarAndMult2%11
            if(resto2<2){
                dv2=0;
            }else{
                dv2=11-resto2;
            }
                if(cnpj[12]==dv1 && cnpj[13]==dv2){
                    return true;
                }else{
                    return false;
                }
    }
    return false;
}
    throw 'cnpj no is a string'
}

