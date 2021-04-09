import React from 'react';

const list = props =>{
    console.log('Rendering The List.......');

    return(
        <ul>
        {props.items.map(todo=>( 
           // {todoState.todoList.map(todo=>( /*for one state instated */
        <li key={todo.id}
           //bind is using for pass value to fucntion
           onClick={props.onClick.bind(this,todo.id)}
        >{todo.name}</li>
        ))}
   </ul>
    )
};

export default list;