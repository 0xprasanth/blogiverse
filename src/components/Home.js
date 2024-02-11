import React from 'react'
import Feed from './Feed'

const Home = ({ posts, users }) => {
  return (
    <main className='Home'>
      {
        posts.length ? (
          // feed component
          // props drilling down to Feed Component
          <Feed users={users} posts={posts} />
        ) : (
          <p style={{fontSize:'1.2rem'}}>
            No posts here
          </p>
        )
      }
      
    </main>
  )
}

export default Home