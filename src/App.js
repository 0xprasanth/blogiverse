import { useState, useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import NotFound from "./components/NotFound";
import PostPage from "./components/PostPage";
import Layout from "./components/Layout";
// router-dom import
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
// api routes
import api from "./api/posts";
import userApi from "./api/users";
import EditPost from "./components/EditPost";
import useWindowSize from "./hooks/useWindowSize";
import { DataProvider } from "./context/DataContext";
import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {
  // user data
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userApi.get("/users?limit=30");
        setUsers(response.data.users);
      } catch (err) {
        if (err.resp) {
          console.error(err.resp.data);
          console.log(err.resp.status);
          console.log(err.resp.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    // fetchPosts();
    fetchUsers();
    // console.log(posts);
  }, []);

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index will be replaced by <Outlet /> component */}

          <Route index element={<Home users={users} />} />

          <Route path="post">
            <Route index element={<NewPost />} />

            <Route path="/post/:id" element={<PostPage users={users} />} />
          </Route>
          
          <Route path="edit">
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>

          <Route path="about" element={<About />} />
          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
