import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

//import axios from 'axios'; //npm install axios -save 

import axios from '../../axios'; //npm install axios -save 


class Blog extends Component {

    state ={
        posts:[],
        selectedPostId: null,
        error:false
    }
    componentDidMount(){
        axios.get('/posts')  
        //sourse https://jsonplaceholder.typicode.com/   HELP to create dummy data
                .then(response =>{
                    const posts = response.data.slice(0,4);
                    // ^ it will store only fast 4 posts

                    const updatedPost = posts.map(post =>{
                        return{
                            ...post,
                            author: 'max'
                        }
                    });

                    this.setState({posts:updatedPost});
                })
                .catch(error => {
                    console.log(error);  //for hendeling error or failed 
                    this.setState({error: true});
                });
    }

    postSelectedHandler =(id) =>{
            this.setState({selectedPostId : id});
    }
    render () {

        let posts = <p>Something went Wrong!</p>

        if(!this.state.error){
            posts=this.state.posts.map(post => {
                return <Post key={post.id} 
                title={post.title}
                author={post.author} 
                clicked={() => this.postSelectedHandler(post.id)}
                
                /> 
            });

        }


        return (

            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;