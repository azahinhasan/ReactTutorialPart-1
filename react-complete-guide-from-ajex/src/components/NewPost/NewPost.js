import React, { Component } from 'react';
//import axios from 'axios'; //more on Bloag.js
import axios from '../../axios';
import './NewPost.css';
import {  Redirect } from 'react-router-dom';
class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submited:false
    }

    postDatahandler=()=>{

        const post={
            title: this.state.title,
            content:this.state.content,
            author: this.state.author,
        }
        //axios.post('https://jsonplaceholder.typicode.com/posts',post) //no need cos of asios.js
        axios.post('/posts',post)
        .then(response =>{
            console.log(response);
           // this.setState({submited:true})
           //this.props.history.push('/posts');  //push will allow back button action
           this.props.history.replace('/posts'); //replace will not 
           // ^take to the /posts Tab 
        })
    }

    render () {
       let redirect = null;
       if(this.state.submited){
            redirect= <Redirect to="/posts"/>
       }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDatahandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;