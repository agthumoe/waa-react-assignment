import Post from "./Post";

const Posts = ({ setPost, posts, title }) => {
  return (
    <div className="flex justify-center p3 w-half">
      {posts.map((post, index) => {
        if (post.id === 111 && !!title) {
          return (
            <Post
              title={title}
              id={post.id}
              author={post.author}
              onClick={() => setPost(post)}
            />
          );
        }
        return <Post {...post} key={index} onClick={() => setPost(post)} />;
      })}
    </div>
  );
};

export default Posts;
