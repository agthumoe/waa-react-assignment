import { useContext, useEffect, useState } from "react";
import { getAllPosts } from "../api/api";
import StatefulContext from "../contexts/StatefulContext";

function useGetAllPosts() {
  const { flag } = useContext(StatefulContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, [flag]);
  return posts;
}

export default useGetAllPosts;
