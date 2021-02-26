import React, { Component } from 'react';

import Post from '../components/Post/Post';
import FullPost from '../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import   './Posts.css';
import axios from "../axios";
import { Route, Link , NavLink} from 'react-router-dom';
//import axios from 'axios'; //npm install axios -save 



class Posts extends Component {

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

            this.props.history.push({pathname: '/posts/'+id});
           // this.setState({selectedPostId : id});
    }
    render () {

        let posts = <p>Something went Wrong!</p>

        if(!this.state.error){
            posts=this.state.posts.map(post => {
            return (
                // <Link  to={'/'+post.id}  key={post.id} >
                <Link  to={this.props.match.url+"/"+post.id}  key={post.id} >
                    <Post
                    title={post.title}
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)}
                    />
                </Link>
                
            )
        });

        }


        return (

            <div className="Blog">
                <section className="Posts">
                    {posts}
                </section>

                <Route path={this.props.match.url+'/:id'} exact component={FullPost}/>
                {/* ^Nested Dynamic Routes */}
            </div>
        );
    }
}

export default Posts;