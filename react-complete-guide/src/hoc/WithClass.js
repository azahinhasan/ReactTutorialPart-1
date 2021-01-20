import React from 'react';


// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// )


/****Another way*/

const withClass = (WrappedComponent,className) => {
//we can use more then two in here^ (..,..,..)
/*WrappedComponent fast letter should be 
Capital coz It is a referace to compornent*/
    
return props =>( //here props is a JS object
    <div className={className}>
        <WrappedComponent {...props}/>  
        {/* ...props is a spread operator. this ...props
        pull out all the properties in side of that props object
        and distributed  them as new key value.
        And ""<WrappedComponent {...props} name="to" age-15/>""
        happend behind the sceen */}
        
    </div>
);

};


export default withClass;