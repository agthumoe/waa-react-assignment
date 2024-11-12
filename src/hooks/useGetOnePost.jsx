import { useEffect, useState } from "react";
import { getOnePost } from "../api/api";

function useGetOnePost(id) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (id) {
      getOnePost(id).then((data) => setPost(data));
    }
  }, [id]);
  return post;
}

export default useGetOnePost;
