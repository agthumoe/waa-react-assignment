import { deleteOnePost } from "../api/api";
import useGetOnePost from "../hooks/useGetOnePost";

const PostDetails = ({ id, invalidate }) => {
  const post = useGetOnePost(id);

  const handleDelete = async (id) => {
    await deleteOnePost(id);
    alert(`Deleted: ${id}`);
    invalidate();
  };

  if (!post) {
    return null;
  }

  return (
    <div className="flex column w-half p3 border mt3 align-center">
      <h2>{post.title}</h2>
      <div>{post.author}</div>
      <div className="mt1">{post.content}</div>
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
