import { useState } from 'react';


export const customHook=()=>{
    const [value,setValue]=useState('');
    const [validity,setValidity] = useState(false);

    const inputChangeHandler = event =>{
        setValue(event.target.value);
        if(event.target.value.trim() === ''){
            setValidity(false);
        }else{
            setValidity(true);
        }
    }

    return{ value : value , onChange: inputChangeHandler , validity};
}