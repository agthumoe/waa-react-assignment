import { useEffect, useState } from "react";
import { getOnePostWithComments } from "../api/api";

function useGetPostDetailsWithComments(postId) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (postId) {
      getOnePostWithComments(postId).then(({ post, comments }) => {
        setPost(post);
        setComments(comments);
      });
    }
  }, [postId]);
  return { post, comments };
}

export default useGetPostDetailsWithComments;
