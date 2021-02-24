import React, { Component } from 'react';

import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import   './Blog.css';
import Posts from '../../containers/Posts';
import { Route, Link } from 'react-router-dom';
//Route will reload full-Page but wit Link it will not
//npm install -save react-router react-router-dom

//import axios from 'axios'; //npm install axios -save 

import axios from '../../axios'; //npm install axios -save 
//import classes from '.module.css';


class Blog extends Component {


    render () {


        return (

            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname:'/new-post',
                                // hash: '#submit',
                                // search:'?quick-submit=true'
                            }}>Post</Link></li>
                        </ul>
                    </nav>
                    
                </header>
                {/* <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}


                {/* <Route path="/" exact render={() => <h2>Hello</h2>}/>
                <Route path="/new-post" exact render={() => <h2>Hello2</h2>}/> */}
                {/* exect==true then Route will active on Path location */}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;