import { useEffect, useState } from "react";
import { getAllCommentsOfPost } from "../api/api";

function useGetAllCommentsOfPost(postId) {
  const [comments, setComments] = useState([]);
  const [flag, setFlag] = useState(1);

  const invalidate = () => {
    setFlag((prev) => prev + 1);
  };

  useEffect(() => {
    if (postId) {
      getAllCommentsOfPost(postId).then((data) => setComments(data));
    }
  }, [flag, postId]);
  return { comments, invalidate };
}

export default useGetAllCommentsOfPost;
