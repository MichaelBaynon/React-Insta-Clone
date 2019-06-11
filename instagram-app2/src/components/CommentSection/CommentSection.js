import React from 'react';


const Comment = props => {


    return (
        <div>
            <div className='commentArea'>

                <div>{props.comments.comments.map(comment => (
                    <div>
                        <p><b>{comment.username}</b>{comment.text}</p>


                    </div>

                ))}
                </div>
















            </div>
        </div>
    )
}

export default Comment