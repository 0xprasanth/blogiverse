import { useParams, Link} from 'react-router-dom'

const PostPage = ({ posts, handleDelete}) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className='PostPage'>
      <article className='post'>
        {
          post && 
            <>
              <h2>{post.title}</h2> 
              <p className="postData">{post.user + " • " + post.date}</p>
              <p className="postBody">{post.body}</p>
              <button className='deleteBtn' onClick={()=> handleDelete(post.id)}> Delete</button>
            </>
        }
        </article>
        {
          // post is not there
          !posts &&
            <>
              <h2>Post not found</h2>
              <p>
                <Link to='/'>Vist Home Page</Link>
              </p>  
            </>
        }
    </main>
  )
}

export default PostPage