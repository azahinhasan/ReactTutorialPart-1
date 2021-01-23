//import React from 'react'; //for funciton based compornent
//import React , {Component} from 'react'; //for class based compornent
import React , {PureComponent} from 'react';
/*it will help to do shouldComponentUpdate() part autometicly 
without donint extra code*/
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';



class Persons extends PureComponent{
//class Persons extends Component{

  static getDerivedStateFromProps(props,state){
      console.log("[Pesons.js] getDerivedStateFromProps")
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   /*for the IF condition it will not re-render full page 
  //   again if we changed name or anything but if we click on Hide Cockpit
  //   it will not re-render coz there is no value chage.
  //   which is a really powerfull and good for performence optimization*/
  //   /*this if condition work like React.memo(Persons);*/
  //   if(nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked){
  //       / ^in there compering pointers not values
  //     return true;
  //   }else{
  //     return false;
  //   }
  //   /return true;
  //    /have to return some thing. Return nothing is not a option
  // }
  getSnapshotBeforeUpdate(perProps,preState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
  }

  componentWillUnmount(){
    //run after when component distroyed
    console.log('[Persons.js] componentWillUnmount..');
  }

  render(){
    console.log('[Persons.js] rendering...');
    return (
    <AuthContext.Consumer>
      {/*Consumer does not take js code as child
      but its take funciton from between opening and closing tag.
      For this reason we are caling Context funciton blown*/}
    {(context) => this.props.persons.map((person,index) => { 
      /*This ^function will get our context obj.Retun it to the consumer*/
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
      
    })}  
  </AuthContext.Consumer>
  );
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
}
  //export default persons; // for fumction based
  export default Persons; //for class based coz name of class is Person