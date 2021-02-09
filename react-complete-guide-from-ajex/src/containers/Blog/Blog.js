import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios'; //npm install axios -save 
import post from '../../components/Post/Post';


class Blog extends Component {

    state ={
        posts:[],
        selectedPostId: null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')  
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
                });
    }

    postSelectedHandler =(id) =>{
            this.setState({selectedPostId : id});
    }
    render () {

        const posts=this.state.posts.map(post => {
            return <Post key={post.id} 
            title={post.title}
            author={post.author} 
            clicked={() => this.postSelectedHandler(post.id)}
            
            /> 
        });

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