import React, { Component } from 'react';
import axios from 'axios';

import './Post.css';

class Post extends Component {
    state = {
        posts: []
      };

    componentDidMount() {
        this.getPosts();
      }
    
      getPosts = () => {
        axios.get('/api/posts')
        .then(res=> {
          this.setState({posts: res.data})
        })
      }
    render() {
      
        let post = this.state.posts.find(e => e.id === +this.props.match.params.postid) || false;

        return (
            <div className='post'>
            <div className='post_container'>

                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
            </div>
        );
    }
}

export default Post;