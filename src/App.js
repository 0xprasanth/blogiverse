import { useState, useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import NotFound from "./components/NotFound";
import PostPage from "./components/PostPage";
import { postData } from './data/posts'
// router-dom import
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  // using states for posts
  const [posts, setPosts] = useState(postData);
  // for search items
  const [search, setSearch] = useState('');
  // search results
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate(); 

  /* habndle dfelete */
  const handleDelete = id => {
    const postList = posts.filter(post => post.id !== id);

    setPosts(postList);
  }


  return (
    <div className="App">
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />}/>
        <Route path="/post" element={<NewPost />}/>
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
        <Route path="/about" element={<About />}/>
        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
