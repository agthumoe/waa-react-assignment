import { useEffect, useState } from "react";
import { getAllPosts } from "../api/api";

function useGetAllPosts() {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(1);

  const invalidate = () => {
    setFlag((prev) => prev + 1);
  };

  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, [flag]);
  return { posts, invalidate };
}

export default useGetAllPosts;
