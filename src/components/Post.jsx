const Post = ({ id, title, author, onHandleClick }) => {
  return (
    <div
      className="border p3 m1 bg-blue text-white"
      onClick={() => onHandleClick(id)}
      role="button"
    >
      <div>ID: {id}</div>
      <div>Title: {title}</div>
      <div>Author: {author}</div>
    </div>
  );
};

export default Post;
