import React from 'react';


const Post = ({posts, loading}) =>{
    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <>
            {posts.map((data, idx) =>{
                return (
                    <div className='list' key={idx}>
                        <p>{data.title}</p>
                    </div>
                );
                    
                
            })}
        </>
    )
}

export default Post;