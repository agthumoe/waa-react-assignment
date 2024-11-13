import PropTypes from "prop-types";
import { useContext } from "react";
import StatefulContext from "../contexts/StatefulContext";
import Badge from "./Badge";

const Post = ({ id, title, author }) => {
  const { setSelectedPostId, setIsAddPost } = useContext(StatefulContext);

  const onHandleClick = (id) => {
    setSelectedPostId(id);
    setIsAddPost(false);
  };

  return (
    <div
      className="border shadow-md rounded-lg p-6 w-full hover:shadow-lg cursor-pointer transition duration-300 bg-white"
      onClick={() => onHandleClick(id)}
      role="button"
    >
      <div className="flex items-center space-x-4">
        <h3 className="font-medium text-md">{author}</h3>
        <Badge>ID: {id}</Badge>
      </div>
      <div className="text-gray-600 text-md mt-1">{title}</div>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Post;
