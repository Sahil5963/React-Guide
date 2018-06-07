import React,{Component} from 'react';
import Person from './Person/Person';
class Persons extends Component{

    constructor(props){
        super(props);
    console.log('[Persons.js] Inside Constructor', props);
    
      }
    
      componentWillMount(){
        console.log('[Persons.js] Inside componentWillMount()');
      }
    
      componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount()');
      }
    
      componentWillReceiveProps(nextProps){
        console.log('[Update Persons.js] Inside componentWillReccieveProps', nextProps);
      }

      shouldComponentUpdate(nextProps , nextState){
        console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
      }

      componentWillUpdate(nextProps,nextState){
        console.log('[Update Person.js Inside componentWilllUpdate',nextProps,nextState);
      }

      componentDidUpdate(){
        console.log('[Update Person.js Inside componentDidUpdate');
      }



    render(){

        console.log('[Persons.js] Inside render()')
        return this.props.persons.map((person, index)=> {
            return(
          
            <Person 
            name={person.name} 
            age={person.age} 
            click={() => this.props.clicked(index)}
            key={person.id}
            changed = {(event) => this.props.changed(event,person.id)} />
    
            
          )});



    }

}  




      export default Persons;


