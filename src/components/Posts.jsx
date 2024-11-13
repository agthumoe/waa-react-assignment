import PropTypes from "prop-types";
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

Posts.propTypes = {
  onHandleClick: PropTypes.func,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Posts;
