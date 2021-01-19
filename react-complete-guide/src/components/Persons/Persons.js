//import React from 'react'; //for funciton based compornent
import React , {Component} from 'react'; //for class based compornent
import Person from './Person/Person';





class Persons extends Component{

  static getDerivedStateFromProps(props,state){
      console.log("[Pesons.js] getDerivedStateFromProps")
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true; //have to return some thing. Return nothing is not a option
  }
  getSnapshotBeforeUpdate(perProps,preState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
  }


  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person,index) => { 
      //if there are more then 1 perameter have to raped up by ()
      //this feature is for  js vanela
      //will delete if click on the text
      return <Person  //ErrorBoundary is for debugging
      // ^key come here becouse it is now outer boundery of MAP Methord
      // [impoternt:] only use ErrorBoundary where I am sure it will me fail or gonna have error
      // key always be outer boundery
      //key help to Track React what ever we are deleting or editing
      click = {() => this.props.clicked(index)}
      name = {person.name}
      age= {person.age} 
      key = {person.id}
      children = {"hi"}
      changed={(event)=>this.props.changed(event,person.id)}/> //4.9 no video
  
    })
  };
}




/*const persons = (props) => {  //this is a function based compornent
  console.log('[Persons.js] rendering...');
  return props.persons.map((person,index) => { 
    //if there are more then 1 perameter have to raped up by ()
    //this feature is for  js vanela
    //will delete if click on the text
    return <Person  //ErrorBoundary is for debugging
    // ^key come here becouse it is now outer boundery of MAP Methord
    // [impoternt:] only use ErrorBoundary where I am sure it will me fail or gonna have error
    // key always be outer boundery
    //key help to Track React what ever we are deleting or editing
    click = {() => props.clicked(index)}
    name = {person.name}
    age= {person.age} 
    key = {person.id}
    children = {"hi"}
    changed={(event)=>props.changed(event,person.id)}/> //4.9 no video

  })};*/

  //export default persons; // for fumction based
  export default Persons; //for class based coz name of class is Person