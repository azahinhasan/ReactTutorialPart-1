//import React from 'react';
import React,{Component,Fragment} from 'react';
import classes from './Person.css';
//import styled from 'styled-components';
//import Radium from 'radium';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'
/*npm install --save prop-types
it will throw Warninng/error if anyone try to pass incurrect props
Such as: I assign Age as Int but some one pushed as String..
this thing is not importent for Parsonal porject.but Helpfull for group project
*/

/*const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
`;
*/



class Person extends Component{ //class based compornent....

    static contextType = AuthContext; 
    /*this context for function based compernent.In here there is nothig more .Check video 7.31*/

    constructor(props){
        super(props); /*Note: always use super in constructor*/
        this.inputElementRef = React.createRef();

    }

    componentDidCatch(){
        this.inputElementRef.current.focus();
        //document.querySelector('input').focus(); //for focuse on first text box
       // console.log(this.context.authenticated);

    }


    render(){
        console.log('[Person.js] rendering...')
        
        

        // return[
        //     /* [1.2] another way to Return elements.Which is returing Array*************/

        //     <p onClick={this.props.click}>I'm {this.props.name}! I am {this.props.age} year old</p>,
        //     <p>{this.props.children}</p>,
        //     <input type="text" onChange={this.props.changed} value={this.props.name}/>

        // ];
        
        return (
           
            //<div className="Person" style={style}>
            //all html tag are avable in styled as methord such as: styled.div
            //styled is a styled-components
            //<div>
            //<div /*StyledDiv*/ className={classes.Person}> 
           /* we cannt write anything outside of this ^ div.Coz it is the Root Element. But we can 
             use custom enement to do that which is in here <Aux> or we can do it my returing Array of element
             which is shown on top [1.2]*/
           //</div>
           /*Here Aux is a empty rapper.*/

           //we can use <Fragment></Fragment> except <Aux>.
           //They are same but Fragemnt is React bulid-in JSX compornent 
           //which have to "import React,{Component,Fragment} from 'react';""
            <Aux> 

                <AuthContext.Consumer>  
                    {/*we can use this in only class based compornent*/}
                    {(context) => 
                    context.authenticated ? <p>Authenticated!</p> : <p>Plz logIn</p>}
                </AuthContext.Consumer>

                <p onClick={this.props.click}>I'm {this.props.name}! I am {this.props.age} year old</p>
               <p>{this.props.children}</p>
                <input 
                type="text" 
                //key="i3"
                ref={this.inputElementRef} /*Help to focus on last input box*/
                onChange={this.props.changed} 
                value={this.props.name}
                />
            
            
            </Aux>
            /*there is no class name with Aux thats way ther is no
            at site on each Person.Aux is without class Compornet.
            with class there is another file at same folder called withClass.js*/

            
           
        );
    }
}


/*const  person = (props) => {  //function based compornent

    console.log('[Person.js] rendering...')
    //const style ={
     //   '@media (min-width: 500px)':{
     //      width: '450px'
      //  }
    //};

   return (
        //<div className="Person" style={style}>
        //all html tag are avable in styled as methord such as: styled.div
        //styled is a styled-components
        //<div>
        { <div /*StyledDiv*/ //className={classes.Person}> 
        /*<p>I'm {props.name}! I am {Math.floor(Math.random()*30)} year old</p>}
            <p onClick={props.click}>I'm {props.name}! I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>/}
    )

};*/



Person.propTypes={
/*PropTypes is a spacial property.
In here: we are assigning which type of data each compornet 
should have
*/

click : PropTypes.func,
name : PropTypes.string,
age: PropTypes.number,
changed: PropTypes.func

};




//export default Radium(person);
//export default person; //for Function base
//export default Person; //for class based coz name of class is Person

export default withClass(Person,classes.Person); 