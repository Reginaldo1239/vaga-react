import React,{useState} from 'react';
import classnames from 'classnames';
import {useHistory} from 'react-router-dom';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Label from '../../components/Label';
import {maskCpfOrCnpj, maskCreditCard} from '../../util//mask';
import LogoMasterCard from '../../assets/logo-mastercard.png';
import {minLength,cnpjValid,cpfValid} from '../../util/validation';
import MsgError from '../../components/MsgError';
import LogoVisa from '../../assets/visa-logo.png';
import Button from '../../components/Button';
import Style from './FormCreditCard.module.css'
import StyleCommon from '../../common.module.css';
export default function FormCreditCard (props){
    const initialStateForm ={
        numberCard:'',
        nameCard:'',
        cvvCard:'',
        flagCard:'',
        monthCard:'',
        yearCard:'',
        cpfOrCnpj:''
    }
    const [formValues,setFormValues] = useState(initialStateForm);
    const [formErrors,setFormErrors] = useState(initialStateForm);
    const history = useHistory();
    const submit=()=>{
        console.log('validForm')
        console.log(validForm());
        if(validForm()){
            history.push('/thank_purchase')
        }
     }


     const handleInputs=(event)=>{
        let name = event.currentTarget.name;
        let value = event.currentTarget.value;
        if( name!='nameCard'){
            value=   value.replace(/\D/g,'');
            switch(name){
                case 'numberCard':
                    value = maskCreditCard({flag:null,numberCard:value});
                    break;
                case 'monthCard':    
                    value= value.slice(0,2)
                        break;
                case 'yearCard':
                    value=  value.slice(0,4)
                        break;
                case 'cvvCard':
                    value= value.slice(0,4)
                        break;
               case 'cpfOrCnpj':
                    value = maskCpfOrCnpj({event}) 
                   break;           
            }
        }
        setFormValues(formValues=>({...formValues ,[name]:value }))
     }
     const handleFlag = (flagName)=>{
           setFormValues(formValues=>({...formValues,'flagCard':flagName})) 
     }
        // não validei todas as opções de erro
     const validForm=()=>{
        let allErrors =[];
        let value;
         for(let name in formValues){
             value = formValues[name];
            let  textError ='';
            if(!minLength(value,1)){
                textError = `o campo está vázio `;
            }
            switch(name){
                case'flagCard':
                        if(!minLength(value,1)){
                            textError = `selecione um cartão de crédito`;
                        }
                break;
                case 'cpfOrCnpj':
                    //remove o espaço entre os números do cartao
                   value= value.replace(/\D/g,'');
                    if(value.length==11 && !cpfValid(value)){
                        textError = 'cpf inválido';
                    }else if(value.length==14&& !cnpjValid(value)){
                        textError = 'cnpj inválido';
                    }
                    break;
                default:
                    if(!minLength(value,1)){
                        textError = `o campo está vázio `;
                    }
            }
           
            if(textError.length>0){
                allErrors.push({[name]:textError});
            }
            setFormErrors(formErrors=>({ ...formErrors,[name]:textError  }))
         }
         console.log(allErrors)
         return allErrors.length===0;
     }

  

    return(
        <Form otherClassNames={Style.form}>
            <FormGroup>
                <Label>número do cartão</Label>
                <Input
                    name="numberCard"
                    onChange={handleInputs}
                    value={formValues.numberCard}
                    textError={formErrors.numberCard}
                />
            </FormGroup>
            <FormGroup >
                <Label>nome</Label>
                <Input
                    name="nameCard"
                    onChange={handleInputs}
                    value={formValues.nameCard}
                    textError={formErrors.nameCard}
                />
            </FormGroup>
            <div  className={classnames(Style.formGroupCvvAndFlagCard,StyleCommon.flex)}>
                <div className={Style.cvv}>
                <Label>cvv</Label>
                <Input
                     name="cvvCard"
                     onChange={handleInputs}
                     value={formValues.cvvCard}
                     textError={formErrors.cvvCard}
                />
                </div> 
                <div onClick={()=>handleFlag('visa')} className={classnames(Style.flagCard,{[Style.flagCardActive ]:formValues.flagCard=='visa'})}> 
                    <img src={LogoVisa}/> 
                </div>
                 <div onClick={()=>handleFlag('master-card')} className={classnames(Style.flagCard,{[Style.flagCardActive ]:formValues.flagCard=='master-card'})}>
                     <img src={LogoMasterCard}/>
                     <MsgError textError={formErrors.flagCard}></MsgError>
                 </div>
                 
            </div>
            <FormGroup otherClassNames={StyleCommon.flex}>
                <div className={Style.labelValid} >
                    <Label>valido até</Label>
                </div>
                <div>
                <Input
                    otherClassNames={Style.inputValid}
                    placeholder='mês'
                    name="monthCard"
                    onChange={handleInputs}
                    value={formValues.monthCard}
                    textError={formErrors.monthCard}
                />
                </div>
                <div>
                <Input
                    otherClassNames={Style.inputValid}
                    placeholder='ano'
                    name="yearCard"
                    onChange={handleInputs}
                    value={formValues.yearCard}
                    textError={formErrors.yearCard}
                />
                 </div>
            </FormGroup>
            <FormGroup>
                <Label>cpf/cnpj</Label>
                <Input
                    name='cpfOrCnpj'
                    value={formValues.cpfOrCnpj}
                    onChange={handleInputs}
                    onKeyDown={handleInputs}
                    textError={formErrors.cpfOrCnpj}
                /> 
            </FormGroup> 
            <Button onClick={submit}>confirmar pagamanento</Button>
        </Form>
    )
}