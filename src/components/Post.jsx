import { Link } from "react-router-dom";


const Post = ({ post }) => {
  const user = post.user || 'ananymous';
  const displayTag = (tags) => {
    return (
      tags.map(newTag => {
        console.log(newTag);
        return newTag
      })
    )

  }
  return (
    <article className="post">
        <Link to={`/post/${post.id}`}>
            {/* <p className="author">{post.user}</p> */}
            <h2>{post.title}</h2>
            <p className="postData">{user + " • " + displayTag(post.tags)}</p>
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