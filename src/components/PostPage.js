import { useContext } from 'react';
import { useParams, Link} from 'react-router-dom'
import DataContext from '../context/DataContext';
import { useNavigate } from "react-router-dom";

const PostPage = ({ users }) => {
  const { id } = useParams();

  const { posts, setPosts } = useContext(DataContext)
  const navigate = useNavigate();

  /* habndle delete */
  const handleDelete = async (id) => {
    // D for delete
    try {
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };
  /* Belongs to PostPage component */
  const displayTag = (tags) => {
    return (
      tags.map(newTag => {
        return newTag
      })
    )
  }

  const displayUserName = (u) => {
    return u.firstName +' '+ u.lastName
  }

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