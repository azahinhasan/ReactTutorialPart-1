import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person,index) => { 
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

  });

  export default persons;