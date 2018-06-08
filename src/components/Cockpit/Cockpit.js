import React from 'react';
import Aux from '../../hoc/Auxy';
import classes from'./Cockpit.css';

const cockpit = ( props ) =>{

    let btnClass = classes.Button;
    let assignClasses = [];

        if(props.persons.length <= 2){
          assignClasses.push( classes.Red );
        }
        if(props.persons.length <= 1){
          assignClasses.push( classes.Bold );
        }

    return(

        <Aux>
      <h3>Hellow</h3>
      <p className={assignClasses.join(' ')}>Lorem ipsum is a dummy text</p>
      <button className={btnClass} onClick={props.clicked}>Switch Name</button>
       
      </Aux>


    );


};


export default cockpit;