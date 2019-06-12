import React from 'react';
import Post from './Post'
import Comment from '../CommentSection/CommentSection'

const PostContainer = props => {

    return (
        <div>

            {props.posts.map(post => (
                <div>
                    <Post post={post} />
                    <Comment comments={post} />
                </div>
            ))}
        </div>
    )










}

export default PostContainer