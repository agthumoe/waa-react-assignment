const PostDetails = ({ post }) => {
  if (!post) return null;
  return (
    <div className="flex column w-half p3 border mt3 align-center">
      <h2>{post.title}</h2>
      <div>{post.author}</div>
      <div className="mt1">{post.content}</div>
      <div>
        <button type="button" className="btn-link text-red">
          edit
        </button>
        <button type="button" className="btn-link text-red">
          delete
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
