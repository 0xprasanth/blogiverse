import React from 'react'
import Feed from './Feed'

const Home = ({ posts, users, fetchError, isLoading }) => {
  return (
    <main className='Home'>
      {
        isLoading && <p className="statusMsg">Loading posts...</p>
      }
      {
        fetchError && <p style={{color:"red"}} className="statusMsg">Error Fetching posts...</p>
      }
      {
        !isLoading && !fetchError && (
          posts.length ? <Feed users={users} posts={posts} />
           : <p className="statusMsg">No post to display</p>
        )
      }
      {/* {
        posts.length ? (
          // feed component
          // props drilling down to Feed Component
          <Feed users={users} posts={posts} />
        ) : (
          <p style={{fontSize:'1.2rem'}}>
            No posts here
          </p>
        )
      } */}
      
    </main>
  )
}

export default Home