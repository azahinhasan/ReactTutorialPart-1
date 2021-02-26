import React, { Component } from 'react';

import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import   './Blog.css';
import Posts from '../../containers/Posts';
import { Route, Link , NavLink, Switch, Redirect} from 'react-router-dom';
//Route will reload full-Page but wit Link it will not
//Link NavLink etc called Spacial Compornent 
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
                            <li><NavLink to="/Posts"
                            exact
                            activeStyle={{
                                color:'blue',
                                textDecoration:'underline'
                            }}
                            >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                // hash: '#submit',
                                // search:'?quick-submit=true'
                            }} exact>Post</NavLink></li>
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
                <Switch>
                    {/* Switch will Route only fast one that match*/}
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/posts"  component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                    {/* ^ Route one link to another link. Its not
                    Render the page just chage the link*/}
                    {/* <Route path="/posts/:id" exact component={FullPost}/> */}
                    {/* <Route path="/:id" exact component={FullPost}/> */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;