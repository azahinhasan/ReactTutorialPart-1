import React from 'react';


const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});


//yoooooooooooooooooooooooooo

export default authContext;