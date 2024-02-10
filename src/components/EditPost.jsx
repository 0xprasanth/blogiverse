import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      {editTitle && (
        <form onSubmit={e => e.preventDefault()} className="newPostForm">
          {/* input title */}
          <label htmlFor="postTitle">Post title: </label>
          <input
            type="text"
            name="postTitle"
            id="postTitle"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            required
            placeholder="post title goes here"
          />
          {/* post body */}
          <label htmlFor="postBody">Post: </label>
          <textarea
            name="postBody"
            id="postBody"
            cols="30"
            rows="5"
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            placeholder="Body of the post"
          />
          {/* submit button */}
          <button onClick={() => handleEdit(post.id)} type="submit">Submit</button>
        </form>
      )}
      {
        !editTitle && 
            <>
                <NotFound />
            </>
      }
    </main>
  );
};

export default EditPost;
