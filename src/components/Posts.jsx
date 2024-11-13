import { useContext, useEffect, useState } from "react";
import { getAllPosts } from "../api/api";
import Post from "./Post";
import StatefulContext from "./StatefulContext";

const Posts = () => {
  const { flag } = useContext(StatefulContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, [flag]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
