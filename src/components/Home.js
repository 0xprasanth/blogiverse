import React from 'react'
import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main className='Home'>
      {
        posts.length ? (
          // feed component
          // props drilling down to Feed Component
          <Feed posts={posts} />
        ) : (
          <p style={{}}>
            No posts here
          </p>
        )
      }
      
    </main>
  )
}

export default Home