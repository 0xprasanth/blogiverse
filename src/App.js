import { useState, useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import NotFound from "./components/NotFound";
import PostPage from "./components/PostPage";
// router-dom import
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import { format } from "date-fns";
// api routes
import api from './api/posts'

function App() {
  // using states for posts
  const [posts, setPosts] = useState([]);
  // for search items
  const [search, setSearch] = useState("");
  // search results
  const [searchResult, setSearchResult] = useState([]);
  // new post state
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate();


  useEffect(()=>{
    const fetchPosts = async () => {
      try{
        const resp = await api.get('/posts');
        /*  axios automatically converts to json object */
        setPosts(resp.data);
      }catch (err) {
        /* Nog in the 200 response range */
        /* know what you are dealing with backend */
        /* know what you will get from the backend */
        if (err.resp) {
          console.error(err.resp.data);
          console.log(err.resp.status);
          console.log(err.resp.headers);
        }else{
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPosts();
  }, []) 

  /*
    posts X search are dependency 
    as our search input provides new data
    to the [search's] essentially filter the posts
    that both matches [search] 
  */
  useEffect(() => {
    const filteredResults = posts.filter( post => 
      (post.body).toLowerCase().includes(search.toLowerCase())
      || // OR short circuit
      (post.title).toLowerCase().includes(search.toLowerCase())
    )
    setSearchResult(filteredResults);
  }, [posts, search])
  



  /* handle submit func to submit new post */
  const handleSubmit = e => {
    e.preventDefault(); 
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMM dd, yyyy p'); 
    const newPost = { id, title: postTitle, datetime, body: postBody};
    console.log(id, datetime)
    console.log(newPost);

    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate("/");


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
        element={<Layout postsCount={searchResult.length} search={search} setSearch={setSearch} />}
      >

      {/* index will be replaced by <Outlet /> component */}

      <Route index element={<Home posts={searchResult} />} />

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
