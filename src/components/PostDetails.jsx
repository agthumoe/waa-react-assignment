import { deleteOnePost } from "../api/api";
import useGetAllCommentsOfPost from "../hooks/useGetallCommentsOfPost";
import useGetOnePost from "../hooks/useGetOnePost";
import Comment from "./Comment";

const PostDetails = ({ id, invalidate }) => {
  const post = useGetOnePost(id);
  const { comments, invalidate: invalidateComments } =
    useGetAllCommentsOfPost(id);

  const handleDelete = async (id) => {
    await deleteOnePost(id);
    alert(`Deleted: ${id}`);
    invalidate();
    invalidateComments();
  };

  if (!post) {
    return null;
  }

  return (
    <div className="flex column w-half p3 border mt3 align-center">
      <h2>{post.title}</h2>
      <div>{post.author}</div>
      <div className="mt1">{post.content}</div>
      {comments?.length > 0 && (
        <div>
          <h3>Comments</h3>
          {comments?.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      )}
      <div>
        <button type="button" className="btn-link text-red">
          edit
        </button>
        <button
          type="button"
          className="btn-link text-red"
          onClick={() => handleDelete(id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
