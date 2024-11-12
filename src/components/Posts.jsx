import Post from "./Post";

const Posts = ({ setPost, posts }) => {
  return (
    <div className="flex justify-center p3 w-half">
      {posts.map((post, index) => (
        <Post {...post} key={index} onClick={() => setPost(post)} />
      ))}
    </div>
  );
};

export default Posts;
