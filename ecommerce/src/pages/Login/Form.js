import React,{useState} from 'react';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Style from './Form.module.css';
export default function (props){
    const initialState = {
        email:'',
        password:''
    }
    const [formValues,setFormValues] = useState(initialState);
    const handleInput=(event)=>{
        let name=event.currentTarget.name;
        let value =event.currentTarget.value;
        setFormValues(formValues=>({...formValues,[name]:value}))
    }
    return(
        <Form otherClassNames={Style.formStyled}>
            <FormGroup>
                <Input 
                    value={formValues.email}
                    name='email'
                    placeholder='email'
                    onChange={(event)=>handleInput(event)}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                    value={formValues.password}
                    type='password'
                    name='password'
                    placeholder='senha'
                    onChange={(event)=>handleInput(event)}
                />
            </FormGroup>
            <FormGroup>
                <Button otherClasseNames={Style.buttonStyled}>entrar</Button>
            </FormGroup>
                <div className={Style.createAccount}>
                    <span>não tem cadastro ? </span> 
                    <span> criar conta</span>
                </div>
        </Form>
    ) 
}