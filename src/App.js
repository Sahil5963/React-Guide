import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {

  state ={
    persons :[
      { id:'p1', name:"Sahil", age:19},
      { id:'p2', name:"Shanky", age:20},
      { id:'p3', name:"Rajan", age:18},
    ],
    showPersons  : true
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

 


    nameChangeHandler = (event , id) =>{

      const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id;
      });
      const person ={
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons =[...this.state.persons];
      persons[personIndex] = person;



      this.setState({
        persons :persons
    }) 

    }

      togglePersonsHandler = () =>{

        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

      }





    render() {

      const style = {
        backgroundColor: 'green',
        font : 'Helvetica',
        border:'1px solid',
        padding : '10px',
        color:'white',
        cursor:'pointer',
      }

      let persons = null;
      if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index)=> {
              return <Person 
              name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed = {(event) => this.nameChangeHandler(event,person.id)} />
            })}

         

        </div>  );

    style.backgroundColor = 'red';

          
        }
      
        let classes = [];

        if(this.state.persons.length <= 2){
          classes.push('red');
        }
        if(this.state.persons.length <= 1){
          classes.push('bold');
        }
      

    return (
      
      <div className="App">

      <h3>Hellow</h3>
      <p className={classes.join(' ')}>Lorem ipsum is a dummy text</p>
      <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
       
       {persons}

  
  

  
      <div className="box">
      </div>
      
     


      </div>
      


    );
  }
}

export default App;
