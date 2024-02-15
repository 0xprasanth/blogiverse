import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import DataContext from "../context/DataContext";
import api from '../api/posts'

const EditPost = (
  {
    // posts,
    // handleEdit,
    // editBody,
    // setEditBody,
    // editTitle,
    // setEditTitle,
  }
) => {
  const { posts, setPosts } = useContext(DataContext);

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const { id } = useParams();

  const post = posts.find((post) => post.id.toString() === id);

  const navigate = useNavigate(); 

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  const handleEdit = async (id) => {
    const updatePost = { id, title: editTitle, body: editBody };
    try {
      // update block
      const resp = await api.put(`/posts?id=${id}`, updatePost);
      // only update the posts that match the id else keep it as it is
      setPosts(posts.map((post) => (post.id === id ? { ...resp.data } : post)));
      setEditBody("");
      setEditTitle("");
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      {editTitle && (
        <form onSubmit={(e) => e.preventDefault()} className="newPostForm">
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
          <button onClick={() => handleEdit(post.id)} type="submit">
            Submit
          </button>
        </form>
      )}
      {!editTitle && (
        <>
          <NotFound />
        </>
      )}
    </main>
  );
};

export default EditPost;
