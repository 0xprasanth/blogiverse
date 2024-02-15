import { createContext, useState, useEffect } from "react";
// // router-dom import
import { useNavigate } from "react-router-dom";

import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://dummyjson.com/posts?limit=30"
  );

  /*
    posts X search are dependency 
    as our search input provides new data
    to the [search's] essentially filter the posts
    that both matches [search] 
  */
    useEffect(() => {
        // console.log(posts);
        const filteredResults = posts.filter(
          (post) =>
            post.body.toLowerCase().includes(search.toLowerCase()) || // OR short circuit
            post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filteredResults);
      }, [posts, search]);
    
    
  useEffect(() => {
    setPosts(data);
  }, [data]);


  const { width } = useWindowSize();

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
        // handleSubmit,
        // handleDelete,
        // handleEdit,
        // editTitle,
        // setEditTitle,
        // editBody,
        // setEditBody,
        // displayTag,
        // displayUserName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
