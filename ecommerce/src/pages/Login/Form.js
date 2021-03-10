import React,{useState} from 'react';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useHistory} from 'react-router-dom';
import Style from './Form.module.css';
export default function (props){
    const initialState = {
        email:'',
        password:''
    }
    let history  =useHistory();
    const [formValues,setFormValues] = useState(initialState);
    const [textError,setTextError] = useState('');
    const handleInput=(event)=>{
        let name=event.currentTarget.name;
        let value =event.currentTarget.value;
        setFormValues(formValues=>({...formValues,[name]:value}))
    }
    
    const submit=()=>{
       if(formValues.email=='rock_apps@gmail.com'&&formValues.password=="rock@2020"){
        localStorage.setItem('userId','1');
        localStorage.setItem('token','123456');
        localStorage.setItem('userName','rock');
        if(!localStorage.getItem('imageProfile')){
            localStorage.setItem('imageProfile','image-profile1.jpg');
        }
        history.push('/');
       }else{
        setTextError('email ou senha incorretos')
       }
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
                    textError={textError}
                />
            </FormGroup>
            <FormGroup>
                <Button onClick={submit} otherClasseNames={Style.buttonStyled}>entrar</Button>
            </FormGroup>
                <div className={Style.createAccount}>
                    <span>não tem cadastro ? </span> 
                    <span> criar conta</span>
                </div>
        </Form>
    ) 
}