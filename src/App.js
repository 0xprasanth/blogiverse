import { useState, useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import NotFound from "./components/NotFound";
import PostPage from "./components/PostPage";
// router-dom import
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/post" element={<NewPost />}/>
        <Route path="/post/:id" element={<PostPage />}/>
        <Route path="/about" element={<About />}/>
        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
