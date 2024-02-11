import React from 'react'
import Post from './Post'

const Feed = ({ posts, users}) => {
  return (
    <>
        {
            posts.map(post => (
                <Post users={users} key={post.id} post={post} />
            ))
        }
    </>
  )
}

export default Feed