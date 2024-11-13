import { useContext } from "react";
import { deleteOnePost } from "../api/api";
import useGetAllCommentsOfPost from "../hooks/useGetallCommentsOfPost";
import useGetOnePost from "../hooks/useGetOnePost";
import Badge from "./Badge";
import Button from "./Button";
import Comments from "./Comments";
import StatefulContext from "./StatefulContext";

const PostDetails = () => {
  const { selectedPostId, setIsAddPost, setSelectedPostId, invalidate } =
    useContext(StatefulContext);

  const post = useGetOnePost(selectedPostId);
  const { comments, invalidate: invalidateComments } =
    useGetAllCommentsOfPost(selectedPostId);

  const onDeleteSuccess = () => {
    setIsAddPost(false);
    setSelectedPostId(null);
    invalidate();
  };

  const handleDelete = async (id) => {
    await deleteOnePost(id);
    alert(`Deleted: ${id}`);
    onDeleteSuccess();
    invalidateComments();
  };

  if (!post || !selectedPostId) {
    return null;
  }

  return (
    <div className="max-w-lg mx-auto my-5 border p-10 rounded-lg">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-1">
        {post.title}
      </h2>
      <p className="my-4 text-gray-500">{post.content}</p>
      <Badge>{post.author}</Badge>
      <div className="flex space-x-2 mt-8">
        <Button>Edit</Button>
        <Button color="danger" onClick={() => handleDelete(selectedPostId)}>
          Delete
        </Button>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200" />
      <Comments comments={comments} />
    </div>
  );
};

export default PostDetails;
