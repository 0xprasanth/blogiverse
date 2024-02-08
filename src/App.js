import { useState, useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import NotFound from "./components/NotFound";
import PostPage from "./components/PostPage";
import { postData } from "./data/posts";
// router-dom import
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import { format, formatRelative } from "date-fns";

function App() {
  // using states for posts
  const [posts, setPosts] = useState(postData);
  // for search items
  const [search, setSearch] = useState("");
  // search results
  const [searchResult, setSearchResult] = useState([]);
  // new post state
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate();

  



  /* handle submit func to submit new post */
  const handleSubmit = (e) => {
    e.target.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp'); 
    const newPost = { id, title: postTitle, datetime, body: postBody};

    const allPosts = { ...posts, newPost};
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');


  }


  /* habndle delete */
  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    // console.log(posts);
    // console.log(postList);

    setPosts(postList);

    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout postsCount={posts.length} search={search} setSearch={setSearch} />}
      >

      {/* index will be replaced by <Outlet /> component */}

      <Route index element={<Home posts={posts} />} />

      <Route path="post">
        
        <Route index element={
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        } />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        
      </Route>

      <Route path="about" element={<About />} />
      {/* not found */}
      <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
