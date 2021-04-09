import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
//useContext in the header
import axios from 'axios';

import { customHook } from '../hooks/customHook';
//useSate is a hook .
import List from './List';
const todo = props =>{
    const [inputIsValid, setInputIsValid] = useState(false);
    // const [todoName,setTodosName] = useState(''); //move to useRef
    // ^ 1st on current value and 2nd one is allows us update value
    //const [todoList,setTodoList] = useState([]); //moved to useReducer
    // const[submittedTodo,setSubmittedTodo] = useState(null);

   // const [todoState,setTodoState] = useState({userInput:'', todoList:[]});
    // ^ this is not the optimal way privious one better
    const todoInputRef = useRef(null);

    const todoInput = customHook();

    const todoListRecucer = (state,action)=>{
        switch(action.type){
            case 'ADD':
                return state.concat(action.payload);
            case 'SET':
                return action.payload;
            case 'REMOVE':
                return state.filter((todo) => todo.id !== action.payload);
            default:
                return state;
        }
    }

    const [todoList,dispatch] = useReducer(todoListRecucer,[]); //useReducer work like Redux

    

    useEffect(() => {
        axios.get('https://todoforreacthooks-default-rtdb.firebaseio.com/todos.json').then(result =>{
            console.log(result);
            const todoData = result.data;
            const todos =[];
            for(const key in todoData){
                todos.push({id:key,name:todoData[key].name})
            }
            //setTodoList(todos);
            dispatch({type: 'SET', payload:todos});
        });
        return()=>{
            console.log('CleanUP');
        }
    },[]);
    // },[todoName]);

    //[] emply will behave like componetDidMount
    // [value] with value will behave like componetDidUpdate
    //here,todoName cnages the useEffect will run again
    
    // const mouseMoveHandler = event =>{
    //     console.log(event.clientX, event.clientY);
    // }


    useEffect(() => {
        //document.addEventListener('mousemove',mouseMoveHandler);
        return ()=>{
            //clean up old component
            //coment the return and [] to see tha change in console
            //document.removeEventListener('mousemove',mouseMoveHandler)
        }
    }, []);




    // useEffect(()=>{
    //     if(submittedTodo){
    //        // setTodoList(todoList.concat(submittedTodo));
    //         dispatch({type:'ADD',payload:submittedTodo})
    //     }

    // },[submittedTodo])

    // const inputChageHandler = event =>{
    //     setTodosName(event.target.value);
    //     console.log(setTodosName);
    // } //comentOut coz for useRef and const todoName



    const todoAddHandler = () =>{
        //setTodoList(todoList.concat(todoName));

        // const todoName = todoInputRef.current.value; //moved to customHook
        const todoName = todoInput.value;

        axios
        .post('https://todoforreacthooks-default-rtdb.firebaseio.com/todos.json' , {name:todoName})
        .then(res =>{
            //console.log(res);
            setTimeout(()=>{
                const todoItem = {id:res.data.name,name:todoName}
                //setSubmittedTodo(todoItem);
                dispatch({type: 'ADD',payload:todoItem})
            },500);

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


const todoRemoveHandler = todoId =>{
    axios
    .delete("https://todoforreacthooks-default-rtdb.firebaseio.com/todos/"+todoId+".json")
    .then(res=>{
        dispatch({type:'REMOVE', payload: todoId});
    })
    .catch(err => console.log(err))
    
}

const inputValidationHandler = event => {
    if (event.target.value.trim() === '') {
      setInputIsValid(false);
    } else {
      setInputIsValid(true);
    }
  };

    return(
    <React.Fragment>
        <input type="text" 
        placeholder="ToDo" 
        // onChange={inputChageHandler}  //moved to ref
        // value={todoName}  //moved to ref
       // value={todoState.userInput} //for one state instated
        // ref={todoInputRef}  //moved to customHooks
        // onChange={inputValidationHandler}//moved to customHooks
        //todoInput ref to Customhook
        
        onChange={todoInput.onChange}
        value={todoInput.value}
        // style={{ backgroundColor: inputIsValid ? 'transparent' : 'orange' }}
        style={{ backgroundColor: todoInput.validity === true ? 'transparent' : 'orange' }}

        />

        <button type="button" onClick={todoAddHandler}>ADD</button>

        {useMemo(()=>(<List items={todoList} onClick={todoRemoveHandler}/>
            ), 
            /*Memo will rerender when todoList changed  otherwise
            it will show previous cache value*/
            //memo can take any kind of value in funtion 
            [todoList])
        }

       
     </React.Fragment>
    )
}

export default todo;





