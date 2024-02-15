import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import api from '../api/posts'

const NewPost = ({}) => {
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  /* handle submit func to submit new post */
  const handleSubmit = async (e) => {
    // C in Create
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    // const datetime = format(new Date(), 'MMM dd, yyyy p');
    const newPost = { id, title: postTitle, body: postBody };

    try {
      const resp = await api.post("/posts/add", newPost);
      const allPosts = [...posts, resp.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
      alert(`Error: ${err.message}`);
    }
  };

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} className="newPostForm">
        {/* input title */}
        <label htmlFor="postTitle">Post title: </label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
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
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          placeholder="Body of the post"
        />
        {/* submit button */}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
