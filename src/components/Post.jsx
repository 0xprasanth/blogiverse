import { Link, useParams } from "react-router-dom";


const Post = ({ post, users}) => {
  // const user = post.user || 'ananymous';
  const displayTag = (tags) => {
    return (
      tags.map(newTag => {
        return ' ' + newTag + ' '
      })
    )
  }

  /* pid => post.id 
    such a complicated thing
    but works
  */
  const displayUserName = (u, pid) => {
    const data = u.filter(us => (us.id === pid))
    return ( (data[0]).firstName + ' ' + (data[0]).lastName)
  }

  return (
    <article className="post">
        <Link to={`/post/${post.id}`}>
            {/* <p className="author">{post.user}</p> */}
            <h2>{post.title}</h2>
            <p className="postData">{displayUserName(users, post.id) + " • " + displayTag(post.tags)}</p>
        </Link>
        <p className="postBody">
            {
                post.body.length <= 25
                 ? post.body
                 : `${(post.body).slice(0, 30)+'...'}`

            }
        </p>
    </article>
  )
}

export default Post