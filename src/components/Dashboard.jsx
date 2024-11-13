import { useState } from "react";
import useGetAllPosts from "../hooks/useGetAllPosts";
import AddPost from "./AddPost";
import Button from "./Button";
import PostDetails from "./PostDetails";
import Posts from "./Posts";

const Dashboard = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isAddPost, setIsAddPost] = useState(false);

  const { posts, invalidate } = useGetAllPosts();

  const onPostClick = (id) => {
    setSelectedPostId(id);
    setIsAddPost(false);
  };

  const onAddPost = () => {
    setIsAddPost(true);
    setSelectedPostId(null);
  };

  const onDeleteSuccess = () => {
    setSelectedPostId(null);
    invalidate();
  };

  return (
    <div className="p-10">
      <div className="flex flex-col items-start mb-5">
        <h1 className="text-2xl font-bold text-indigo-600 mb-2">Posts</h1>
        <span className="text-sm text-gray-500 block mb-2">
          Click Post to view details
        </span>
        <Button onClick={onAddPost}>Create New Post</Button>
      </div>
      <Posts onHandleClick={onPostClick} posts={posts} />
      {selectedPostId && (
        <PostDetails id={selectedPostId} onDeleteSuccess={onDeleteSuccess} />
      )}
      {isAddPost && <AddPost invalidate={invalidate} />}
    </div>
  );
};

export default Dashboard;
