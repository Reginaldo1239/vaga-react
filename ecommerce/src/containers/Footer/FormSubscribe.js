import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Style from './FormSubscribe.module.css';
export default function FormSubscribe(props){
    return(
        <Form otherClassNames={Style.formVariant}>
            <Input
            otherClassNames={Style.inputVariant}
            placeholder='email'
            />
            <Button otherClassNames={Style.buttonVariant} >inscrever-se</Button>
        </Form>
    )
}