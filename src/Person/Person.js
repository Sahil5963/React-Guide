import React,{Component} from 'react';
import classes from './Person.css';
const person = (props) =>{

    const rnd=Math.random();

    if(rnd > 0.7){
        throw new Error('Something Went Wrong');
    }

    return (
    <div className={classes.Person}>
        
        

    <p onClick={props.click}>I'm a {props.name} and I am {props.age} Yeras Old</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed}/>
    </div>
    )
}

export default person;