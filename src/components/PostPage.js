import { useContext } from 'react';
import { useParams, Link} from 'react-router-dom'
import DataContext from '../context/DataContext';

const PostPage = ({ users }) => {
  const { id } = useParams();

  const { displayTag, displayUserName, posts, handleDelete} = useContext(DataContext)

  const post = posts.find(post => (post.id).toString() === id)
  const user = users.find(user => (user.id).toString() === id)
  console.log(user);
  // console.log(users);
  return (
    <main className='PostPage'>
      <article className='post'>
        {
          post && 
            <>
              <h2>{post.title}</h2> 
              <p className="postData">{(displayUserName(user) || 'ananymous') + " • " + displayTag(post.tags)}</p>
              <p className="postBody">{post.body}</p>
              <Link to={`/edit/${post.id}`}>
                <button className="editButton">
                  EditPost
                </button>
              </Link>
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