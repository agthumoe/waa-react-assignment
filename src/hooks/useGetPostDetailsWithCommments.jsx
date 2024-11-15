import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnePostWithComments } from "../api/api";

function useGetPostDetailsWithComments() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      getOnePostWithComments(id).then(({ post, comments }) => {
        setPost(post);
        setComments(comments);
      });
    }
  }, [id]);
  return { post, comments, id };
}

export default useGetPostDetailsWithComments;
