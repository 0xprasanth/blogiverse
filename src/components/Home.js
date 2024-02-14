import React from "react";
import Feed from "./Feed";
import { ClockLoader } from "react-spinners";
// import {  } from "react-sp";

const Home = ({ posts, users, fetchError, isLoading }) => {
  const loadingStyles = {
    color: 'red',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
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
        (posts.length ? (
          <Feed users={users} posts={posts} />
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
