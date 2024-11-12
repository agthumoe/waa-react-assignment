import Post from "./Post";

const Posts = ({ onHandleClick, posts }) => {
  return (
    <div className="flex justify-center p3 w-half">
      {posts.map((post, index) => (
        <Post {...post} key={index} onHandleClick={onHandleClick} />
      ))}
    </div>
  );
};

export default Posts;
