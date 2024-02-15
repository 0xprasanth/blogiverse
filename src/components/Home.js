import React, { useContext } from "react";
import Feed from "./Feed";
import { ClockLoader } from "react-spinners";
import DataContext from "../context/DataContext";
// import {  } from "react-sp";

const Home = ({ users }) => {
  const loadingStyles = {
    color: 'red',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  const { searchResults, fetchError, isLoading } = useContext(DataContext);

  return (
    <main className="Home">
      <ClockLoader loading={isLoading} cssOverride={loadingStyles} className="loadingStyles" speedMultiplier={5} size={100}/>
      
      {!isLoading && fetchError && (
        <p style={{ color: "red" }} className="statusMsg">
          Error Fetching posts...
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed users={users} posts={searchResults} />
        ) : (
          <p className="statusMsg">No post to display</p>
        ))}
      {/* {
        posts.length ? (
          // feed component
          // props drilling down to Feed Component
          <Feed users={users} posts={posts} />
        ) : (
          <p style={{fontSize:'1.2rem'}}>
            No posts here
          </p>
        )
      } */}
    </main>
  );
};

export default Home;
