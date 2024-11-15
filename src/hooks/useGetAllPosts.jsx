import { useEffect, useState } from "react";
import { getAllPosts } from "../api/api";

function useGetAllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, []);
  return posts;
}

export default useGetAllPosts;
