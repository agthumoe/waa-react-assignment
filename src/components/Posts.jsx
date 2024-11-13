import Post from "./Post";

const Posts = ({ onHandleClick, posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {posts.map((post, index) => (
        <Post {...post} key={index} onHandleClick={onHandleClick} />
      ))}
    </div>
  );
};

export default Posts;
