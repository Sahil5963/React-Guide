import React from 'react';

import classes from'./Cockpit.css';

const cockpit = ( props ) =>{

    let btnClass = '';
    let assignClasses = [];

        if(props.persons.length <= 2){
          assignClasses.push( classes.red );
        }
        if(props.persons.length <= 1){
          assignClasses.push( classes.bold );
        }

    return(

        <div className={classes.Cockpit}>
      <h3>Hellow</h3>
      <p className={assignClasses.join(' ')}>Lorem ipsum is a dummy text</p>
      <button className={btnClass} onClick={props.clicked}>Switch Name</button>
       
      </div>


    );


};


export default cockpit;