//import React from 'react';
import React,{useEffect,useRef} from 'react'; //useeeffect is the most importent Reack hook
/*useEffect hook is  like combined of all lifeCycle(componentDidMount, componentDidUpdate, 
and componentWillUnmount)*/

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props)=>{


  const toggleBtnRef = useRef(null);

  useEffect(() => { //take a function by default whic will run for every render lifeCycle
    //userEffefct run after Return of JS rendering part
    console.log('[CockPit.js] useEffect...');
    //can do HTTP Req there
    setTimeout(() =>{
      alert('Saved data to cloud!');
    },1000);
    toggleBtnRef.current.click();

    
  },[]); 
  // [ ] is a arguments
  //[ ] this empty array mean there is no dependency so,It will run only for fast time
  // if use [pros.persons] than it will execute when we cange persons


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

    return(  //here jsx code render for us
    <div className={classes.Cockpit}>
        <h1 className={assignedClasses.join(' ')}>HI I am Zahin</h1>

        {/*<p>This is really working</p>*/}
        <p>{props.title}</p>



        <button /*StyleButton*/
        //className='button'
        //style={style} //no need for  styled compornet
        //alt = {this.state.showPersons}  
        //alt just a variable which is passing value of this.state.showPersons
        //className= {classes.Button} eject another for Static
        //className= {btnClass.join(' ')}
        className= {btnClass}
        ref = {toggleBtnRef}
        /*ref like key.In here it clicking the button by defult
        thorugh calling toggleBtnRef*/
        // ^ making it Dynamic and EJECT will help to done it more easyly
        onClick={props.clicked}>
  
        Show Names 
        </button>

        <AuthContext.Consumer>
          {context => <button onClick={context.login}>Log In</button>}
        </AuthContext.Consumer>
    </div>
    )
};


//export default React.memo(cockpit);
/*React.memo is a memowais technique where it will store snapshot 
of Cockpit and only it will re-render when input changes*/
/*its work like shouldComponentUpdate() with IF-Else condition*/
export default cockpit;