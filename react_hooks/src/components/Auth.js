import React,{useContext} from 'react';
import AuthContext from '../auth-context';



const Auth = props =>{

    const auth = useContext(AuthContext);


    return(
        <button onClick={auth.login}>login</button>
    )


}
export default Auth;