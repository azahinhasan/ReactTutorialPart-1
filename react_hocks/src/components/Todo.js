import React, { useState,useEffect } from 'react';
import axios from 'axios';
//useSate is a hook .

const todo = props =>{

    const [todoName,setTodosName] = useState('');
    // ^ 1st on current value and 2nd one is allows us update value
    const [todoList,setTodoList] = useState([]);

   // const [todoState,setTodoState] = useState({userInput:'', todoList:[]});
    // ^ this is not the optimal way privious one better


    useEffect(() => {
        axios.get('https://todoforreacthooks-default-rtdb.firebaseio.com/todos.json').then(result =>{
            console.log(result);
            const todoData = result.data;
            const todos =[];
            for(const key in todoData){
                todos.push({id:key,name:todoData[key].name})
            }
            setTodoList(todos);
        });
        return()=>{
            console.log('CleanUP');
        }
    },[todoName]);

    //[] emply will behave like componetDidMount
    // [value] with value will behave like componetDidUpdate
    //here,todoName cnages the useEffect will run again
    
    const mouseMoveHandler = event =>{
        console.log(event.clientX, event.clientY);
    }
    useEffect(() => {
        document.addEventListener('mousemove',mouseMoveHandler);
        return ()=>{
            //clean up old component
            //coment the return and [] to see tha change in console
            document.removeEventListener('mousemove',mouseMoveHandler)
        }
    }, []);



    const inputChageHandler = event =>{
        setTodosName(event.target.value);
        console.log(setTodosName);
    }

    const todoAddHandler = () =>{
        //setTodoList(todoList.concat(todoName));
        axios
        .post('https://todoforreacthooks-default-rtdb.firebaseio.com/todos.json' , {name:todoName})
        .then(res =>{
            //console.log(res);
        })
        .catch(err =>{
            console.log(err);
        });

        
    }

    
    // const inputChageHandler = event =>{  //privious on is better
    //     setTodoState({
    //         userInput: event.target.value,
    //         todoList:todoState.todoList
    //     })
    // }
    // const todoAddHandler = () =>{
    //     setTodoState({
    //         userInput:todoState.userInput,
    //         todoList:todoState.todoList.concat(todoState.userInput)
    //     })
    // }





    return(
    <React.Fragment>
        <input type="text" 
        placeholder="ToDo" 
        onChange={inputChageHandler} 
        value={todoName} 
       // value={todoState.userInput} //for one state instated

        />

        <button type="button" onClick={todoAddHandler}>ADD</button>

        <ul>
             {todoList.map(todo=>( 
                // {todoState.todoList.map(todo=>( /*for one state instated */
                <li key={todo.id}>{todo.name}</li>
            ))}
        </ul>
     </React.Fragment>
    )
}

export default todo;
