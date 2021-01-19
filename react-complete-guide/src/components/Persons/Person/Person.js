//import React from 'react';
import React,{Component} from 'react';
import classes from './Person.css';
//import styled from 'styled-components';
//import Radium from 'radium';



/*const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
`;
*/



class Person extends Component{ //class based compornent....
    render(){
        console.log('[Person.js] rendering...')
        return (
            //<div className="Person" style={style}>
            //all html tag are avable in styled as methord such as: styled.div
            //styled is a styled-components
            //<div>
            <div /*StyledDiv*/ className={classes.Person}> 
                <p onClick={this.props.click}>I'm {this.props.name}! I am {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}


/*const  person = (props) => {  //function based compornent

    console.log('[Person.js] rendering...')
    //const style ={
     //   '@media (min-width: 500px)':{
     //      width: '450px'
      //  }
    //};

   return (
        //<div className="Person" style={style}>
        //all html tag are avable in styled as methord such as: styled.div
        //styled is a styled-components
        //<div>
        { <div /*StyledDiv*/ //className={classes.Person}> 
        /*<p>I'm {props.name}! I am {Math.floor(Math.random()*30)} year old</p>}
            <p onClick={props.click}>I'm {props.name}! I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>/}
    )

};*/

//export default Radium(person);
//export default person;
export default Person; //for class based coz name of class is Person