import { useState } from "react";
import AddPost from "./AddPost";
import Button from "./Button";
import PostDetails from "./PostDetails";
import Posts from "./Posts";
import StatefulContext from "./StatefulContext";

const Dashboard = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isAddPost, setIsAddPost] = useState(false);
  const [flag, setFlag] = useState(1);
  const invalidate = () => {
    setFlag((prev) => prev + 1);
  };

  const onDeleteSuccess = () => {
    invalidate();
  };

  const onAddPostClick = () => {
    setIsAddPost(true);
    setSelectedPostId(null);
  };

  return (
    <StatefulContext.Provider
      value={{
        selectedPostId,
        setSelectedPostId,
        isAddPost,
        setIsAddPost,
        flag,
        invalidate,
      }}
    >
      <div className="p-10">
        <div className="flex flex-col items-start mb-5">
          <h1 className="text-2xl font-bold text-indigo-600 mb-2">Posts</h1>
          <span className="text-sm text-gray-500 block mb-2">
            Click Post to view details
          </span>
          <Button onClick={onAddPostClick}>Create New Post</Button>
        </div>
        <Posts />
        <PostDetails onDeleteSuccess={onDeleteSuccess} />
        {isAddPost && <AddPost />}
      </div>
    </StatefulContext.Provider>
  );
};

export default Dashboard;
