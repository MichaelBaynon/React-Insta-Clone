import React from 'react';


const Comment = props => {
    console.log(props)

    function addNewComment(e) {
        return
    }


    return (
        <div>
            <div className='commentArea'>

                <div>{props.comments.comments.map(comment => (
                    <div>
                        <p><b>{comment.username}</b>&nbsp;&nbsp;{comment.text}</p>


                    </div>



                ))}
                </div>

            </div>

            <div className='addCommentSection'>

                <form className='addAComment'>Add a comment...</form>
                <p className='settings'>...</p>



            </div>

        </div>
    )
}

export default Comment