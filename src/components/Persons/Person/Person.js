import React,{Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxy';
import PropTypes from 'prop-types';
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
        if(this.props.position === 0){
        this.inputElement.focus();
        }
      }
    



    render(){
        console.log('[Person.js] Inside render()');
        return(
            <Aux>
    <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} Yeras Old</p>
    <p>{this.props.children}</p>
    <input
     ref={(inp)=>{ this.inputElement = inp }}
     type="text" onChange={this.props.changed}/>
    </Aux>

        )

        // return [
        //     <p key="1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} Yeras Old</p>,
        //     <p key="2" >{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed}/>
        // ]

    }

}

Person.propTypes = {
    click : PropTypes.func ,
    name :  PropTypes.string,
    age :  PropTypes.number,
    changed : PropTypes.func  

};

export default withClass(Person ,  classes.App);