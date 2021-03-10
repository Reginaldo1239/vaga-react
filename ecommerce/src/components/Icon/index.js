import React from 'react';
import Card from './Card';
import List from './List';
export default function Icon (props){
    let {iconName,active} = props;
    switch(iconName){
        case 'card':
            return <Card active={active}></Card>
        case 'list':
            return   <List active ={active}></List>
    }
} 