import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props)=>{


    let assignedClasses = [];
   // let btnClass = [classes.Button]; 
   let btnClass = classes.Button; 

    if (props.showPersons){
        btnClass = classes.Red;
       // btnClass.push(classes.Red);
    }

    //using for EJECT module
    if (props.persons.length <= 2){
      assignedClasses.push(classes.red); //adding red into the classes array
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.underLine);
    }

    return(
    <div className={classes.Cockpit}>
        <h1 className={assignedClasses.join(' ')}>HI I am Zahin</h1>

        <p>This is really working</p>



        <button /*StyleButton*/
        //className='button'
        //style={style} //no need for  styled compornet
        //alt = {this.state.showPersons}  
        //alt just a variable which is passing value of this.state.showPersons
        //className= {classes.Button} eject another for Static
        //className= {btnClass.join(' ')}
        className= {btnClass}
        // ^ making it Dynamic and EJECT will help to done it more easyly
        onClick={props.clicked}>
        Show Names 
        </button>
        <p>jlhlgajlg: {props.showPersons}</p>
    </div>
    )
};


export default cockpit;

