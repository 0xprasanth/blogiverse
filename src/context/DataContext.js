import { createContext, useState, useEffect } from "react";
// // router-dom import
// import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
// // api routes
import api from "../api/posts";
import userApi from "../api/users";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [users, setUsers] = useState([]);

    const { data, fetchError, isLoading } = useAxiosFetch('https://dummyjson.com/posts?limit=30');

    useEffect(() => {
        setPosts(data);
    }, [data])

    useEffect(() => {
        const filteredResults = posts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    }, [posts, search])
    const { width } = useWindowSize();

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults, fetchError, isLoading,
            posts, setPosts, width
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;