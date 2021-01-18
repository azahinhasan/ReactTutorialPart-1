import React, { Component } from 'react';
//import './App.css';
import classes from './App.css'; //hav to run 'npm run eject' in project folder
// ^in here all the class of App.css will be property of 'classes'


//import  Radium  ,{ StyleRoot }from 'radium';  //comment out coz using styled-components.com
/*install Radum package by typing in project 
folder 'npm install -- save radium'
Radium is a most propuler package for raact which allow us
us to use inline style with sudo Selector[Ex: .mover]*/
//StyleRoot using for rap all function from Person.js

//import styled from 'styled-components';
import Person from './Person/Person';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// ^this import for find or detect error


//import './Person/Person.css';


/*const StyleButton = styled.button`
     // background-Color: white;
     background-color: ${props => props.alt ? 'red' : 'green'}; 
     //if alt is true clolor gonna be red
      font: inherit;
      border: 1x solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {  //hover called Sude Selector
        //& will say his hover is with this button which is split-out
        background-Color: black;
        color: white;
      }
`;*/

class App extends Component {   
  state={
    persons:[   //array of JS object
      {id:1,name:"yo",age:28},
      {id:2,name:"Mr.Hender",age:27},
      {id:3,name:"Mofi",age:30}
    ],
    otherState:'some other value',
    showPersons:false
  };
  
  switchNameHandler=(newName)=>{  //program is dynamic now So,no need of this
    console.log('was clicked!');
    // no need to do
    //donn't do this : this.state.persons[0].name = 'Zahin hasan';
    this.setState({
      persons:[
        {name:newName,age:28},
        {name:"Khalifa",age:27},
        {name:"Mofix",age:30}
        
      ]
    })
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons; // copy the pinter
    const persons = this.state.persons.slice(); //copy the full old array
    //const person = [...this.state.pdrsons]; //... sprit operator
    //take value from old array and put it in Const Person
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }
  
  nameChangedHandler=(event,id)=>{
    //const person = this.state.persons.find(); //givers us this.Person
    const personIndex = this.state.persons.findIndex(p => {
      //gives us index of eliment
      return p.id === id;
    });
    
    //const person = this.state.persons[personIndex];
    const person = {...this.state.persons[personIndex]};
    //const person = Object.assign({},this.state.persons[personIndex]);


    person.name = event.target.value;
    const persons = [...this.state.persons];
    
    persons[personIndex] = person;
    this.setState({persons: persons});

    /*this.setState({
      persons:[
        {name:"yo",age:28},
        {name:"Mr.Hender",age:27},
        {name:event.target.value,age:27}

      ]
    })*/
  }



  togglePersonsHandler =() =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow}); //if doesShow is false 
                                              // showPersons will me true
  }

  render() {
      /* this part was for radium
      const style = {  //its call inline styling 
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {  //hover called Sude Selector
      ///to use it here have to install Radium Instration on the Top
        backgroundColor: 'black',
        color: 'white'
      }
    };*/

    
    let persons = null;
    let btnClass = [classes.Button]; 
    // ^ avable by Eject npm moduel
    //classes.Button is the pointer of CSS moduel package 

    if(this.state.showPersons){ //if true
      persons = (
      
      <div>

        {this.state.persons.map((person,index) => { 
          //if there are more then 1 perameter have to raped up by ()
          //this feature is for  js vanela
          //will delete if click on the text
          return <ErrorBoundary key = {person.id}><Person  //ErrorBoundary is for debugging
          // ^key come here becouse it is now outer boundery of MAP Methord
          // [impoternt:] only use ErrorBoundary where I am sure it will me fail or gonna have error
          // key always be outer boundery
          //key help to Track React what ever we are deleting or editing
          click = {() => this.deletePersonHandler(index)}
          name = {person.name}
          age= {person.age} 
          //key = {person.id}
          children = {"hi"}
          changed={(event)=>this.nameChangedHandler(event,person.id)}/> //4.9 no video
          </ErrorBoundary>
        })}

       {/* <Person 
          name='zahin' 
          age = '20'/>
        <Person 
          name='hasan'>And I like Football
        </Person>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this,'Max!*')}>Click This Paragraph</Person>
       */}
        </div>
      );
      /*style.backgroundColor = 'red'; //it was for radium
      style[':hover']= {
        backgroundColor:'green',
        color:'white'
      }*/

      btnClass.push(classes.Red); //using for EJECT module
    }

    //let classes = ['red' , 'bold'].join(' ');

    let assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //adding red into the classes array
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.underLine);
    }

    return (
    //<StyleRoot>
    <div 
    //className="App"
    className={classes.App}>
      {/*<h1 className={classes}>HI I am Zahin</h1>*/}

      <h1 className={assignedClasses.join(' ')}>HI I am Zahin</h1>

      <p>This is really working</p>

      <button
      //style={style} 
      className= {classes.Button}
      /*have to comment out this Coz redium does
      not work in multible same style . hav to use
      id or class or any uniq key
      */
      onClick={this.switchNameHandler.bind(this,'Max')}>
      {/*<button onClick={()=> this.switchNameHandler('Max')}> //Should not use
      </button><button onClick={this.switchNameHandler}> //Another Way
      */}
        Switch Name
      </button>
      <br></br>


      <button /*StyleButton*/
      //className='button'
      //style={style} //no need for  styled compornet
      //alt = {this.state.showPersons}  
      //alt just a variable which is passing value of this.state.showPersons
     //className= {classes.Button} eject another for Static
      className= {btnClass.join(' ')}
      // ^ making it Dynamic and EJECT will help to done it more easyly
      onClick={this.togglePersonsHandler}>
        Show Names 
       </button>
        
     
      {persons}

     {/* <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click = {this.switchNameHandler.bind(this,'Max')}  
        changed ={this.nameChangedHandler}>
        Type SomeThing here
        </Person>
  */}
    </div>
    //</StyleRoot>
     //React.createElement('div',{className:'App'},React.createElement('h1',null,'h1','hi im zahin'))  //JSX its give acess html write in JS file

    );
  }
}

export default App;

//export default Radium(App);
 
//its called HigherOrder compornent










/*<button   //toggle name another way
            //not suggested to use it

      style={style} 
      onClick={this.togglePersonsHandler}>
        Show Names
      </button>
      {
        this.state.showPersons == true ?  
        
       /* <div>  {/*Can use some js expresion in if we use {} [tiinery expresion] */


       /* <Person 
          name='zahin' 
          age = '20'/>
        <Person 
          name='hasan'>And I like Football
        </Person>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this,'Max!*')}>Click This Paragraph</Person>
      
        </div> : null
        }
*/


/*const app = props => {  //hook
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};*/

//export default app;


