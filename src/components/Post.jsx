import Badge from "./Badge";

const Post = ({ id, title, author, onHandleClick }) => {
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

export default Post;
