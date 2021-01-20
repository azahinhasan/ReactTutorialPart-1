//import React from 'react';
import React,{Component,Fragment} from 'react';
import classes from './Person.css';
//import styled from 'styled-components';
//import Radium from 'radium';
import Aux from '../../../hoc/Auxiliary'



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
           // <div /*StyledDiv*/ className={classes.Person}> 
           /* we cannt write anything outside of this ^ div.Coz it is the Root Element. But we can 
             use custom enement to do that which is in here <Aux> or we can do it my returing Array of element
             which is shown on top [1.2]*/
           //</div>
           /*Here Aux is a empty rapper.*/

           //we can use <Fragment></Fragment> except <Aux>.
           //They are same but Fragemnt is React bulid-in JSX compornent 
           //which have to "import React,{Component,Fragment} from 'react';""
            <Aux> 
           
                <p onClick={this.props.click}>I'm {this.props.name}! I am {this.props.age} year old</p>
               <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            
            </Aux>

            
           
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

//export default Radium(person);
//export default person;
export default Person; //for class based coz name of class is Person