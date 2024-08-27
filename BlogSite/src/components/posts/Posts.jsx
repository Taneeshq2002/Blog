import React from "react";
import "./Posts.css";
import Post from "../post/Post";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}

export default Posts;
