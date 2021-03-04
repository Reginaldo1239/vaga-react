import React from 'react';
import {Button} from './indexStyle';
export default function(props){
    return (
            <Button>
                 {props.children}
            </Button>
    )
}