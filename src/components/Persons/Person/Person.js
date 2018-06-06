import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component{

    constructor(props){
        super(props);
    console.log('[Person.js] Inside Constructor', props);
    
      }
    
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
      }
    



    render(){
        console.log('[Person.js] Inside render()');
        return(
            <div className={classes.Person}>
    <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} Yeras Old</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed}/>
    </div>

        )

    }

}


export default Person;