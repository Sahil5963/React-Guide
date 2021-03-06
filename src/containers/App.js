import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from  '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxy';
import withClass from '../hoc/withClass';
class App extends PureComponent {

  constructor(props){
    super(props);
console.log('[App.js] Inside Constructor', props);
    this.state ={
      persons :[
        { id:'p1', name:"Sahil", age:19},
        { id:'p2', name:"Shanky", age:20},
        { id:'p3', name:"Rajan", age:18},
      ],
      showPersons  : false,
      toggleClicked:0
    }

  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps , nextState){
  //   console.log('[App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //          nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps,nextState){
    console.log('[Appjs Inside componentWilllUpdate',nextProps,nextState);
  }

  componentDidUpdate(){
    console.log('[Appjs Inside componentDidUpdate');
  }






  // state ={
  //   persons :[
  //     { id:'p1', name:"Sahil", age:19},
  //     { id:'p2', name:"Shanky", age:20},
  //     { id:'p3', name:"Rajan", age:18},
  //   ],
  //   showPersons  : true
  // }

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
        this.setState((prevState,props)=>{
          return{
            showPersons: !doesShow,
            toggleClicked:prevState.toggleClicked + 1
          }
          
        });

      }





    render() {
      console.log('[App.js] Inside render()');

      let persons = null;
      let btnClass='';

      if(this.state.showPersons){
        persons = 
            <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />

          
        }
      
        
      

    return (
      
      <Aux>
      <button onClick={()=>{this.setState({showPersons:true})}}>Show Person</button>
<Cockpit showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersonsHandler}/>

       {persons}

  
  

  
      <div className="box">
      </div>
      
      </Aux>


      
      


    );
  }
}

export default withClass(App , classes.App);
