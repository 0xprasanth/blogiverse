import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const NewPost = ({

}) => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } =
    useContext(DataContext);

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
