import { createContext, useState, useEffect } from "react";
// // router-dom import
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
// // api routes
import api from "../api/posts";
import userApi from "../api/users";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // new post state
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [users, setUsers] = useState([]);


  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://dummyjson.com/posts?limit=30"
  );

  const navigate = useNavigate();
  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);
  const { width } = useWindowSize();

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

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMM dd, yyyy p");
    const updatePost = { id, title: editTitle, datetime, body: editBody };
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

  /* habndle delete */
  const handleDelete = async (id) => {
    // D for delete
    try {
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };
  /* Belongs to PostPage component */
  const displayTag = (tags) => {
    return (
      tags.map(newTag => {
        return newTag
      })
    )
  }

  const displayUserName = (u) => {
    return u.firstName +' '+ u.lastName
  }


  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts,
        width,
        handleSubmit,
        handleDelete,
        handleEdit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        displayTag,
        displayUserName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
