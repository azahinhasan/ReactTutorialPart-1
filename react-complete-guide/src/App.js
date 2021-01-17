//import React, { useState } from 'react'; for Hook
import React, { Component } from 'react';
import './App.css';
import  Radium  ,{ StyleRoot }from 'radium';
/*install Radum package by typing in project 
folder 'npm install -- save radium'
Radium is a most propuler package for raact which allow us
us to use inline style with sudo Selector[Ex: .mover]*/
//StyleRoot using for rap all function from Person.js

import Person from './Person/Person';

//import './Person/Person.css';


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
    const style = {  //its call inline styling
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {  //hover called Sude Selector
        //to use it here have to install Radium Instration on the Top
        backgroundColor: 'black',
        color: 'white'
      }
    };

    
    let persons = null;

    if(this.state.showPersons){ //if true
      persons = (
      
      <div>

        {this.state.persons.map((person,index) => { 
          //if there are more then 1 perameter have to raped up by ()
          //this feature is for  js vanela
          //will delete if click on the text
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name = {person.name}
          age= {person.age} 
          key = {person.id}
          children = {"hi"}
          changed={(event)=>this.nameChangedHandler(event,person.id)}/> //4.9 no video
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
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor:'green',
        color:'white'
      }
    }

    //let classes = ['red' , 'bold'].join(' ');

    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red'); //adding red into the classes array
    }
    if (this.state.persons.length <= 1){
      classes.push('underLine');
    }

    return (
    <StyleRoot>
    <div className="App">
      {/*<h1 className={classes}>HI I am Zahin</h1>*/}

      <h1 className={classes.join(' ')}>HI I am Zahin</h1>

      <p>This is really working</p>

      <button
      //style={style} 
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


      <button
      style={style} 
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
    </StyleRoot>
     //React.createElement('div',{className:'App'},React.createElement('h1',null,'h1','hi im zahin'))  //JSX its give acess html write in JS file

    );
  }
}

//export default App;

export default Radium(App);
 
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


