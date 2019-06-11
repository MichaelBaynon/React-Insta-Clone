import React from 'react';

const Post = props => {

    return (
        <div>


            <div className='page'>
                <div className='header'>

                    <a href='#'>

                        <img className='logo' src={props.post.thumbnailUrl} alt='apple' />
                    </a>



                    <a href='#' className='username'>{props.post.username}</a>
                </div>


                <img className='image' src={props.post.imageUrl} alt='banana' />


                <div className='likeComment'>
                    <button className='heart'>♡</button>
                    <button className='comment'>💭</button>
                </div>


                <p className='likes'>{props.post.likes} likes</p>

                <p>{props.post.timestamp}</p>




            </div>
        </div>
    )


}

export default Post









