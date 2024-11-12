import { useState } from "react";
import useGetAllPosts from "../hooks/useGetAllPosts";
import AddPost from "./AddPost";
import PostDetails from "./PostDetails";
import Posts from "./Posts";

const Dashboard = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { posts, invalidate } = useGetAllPosts();

  const [text, setText] = useState("");

  return (
    <div className="flex align-center column">
      <Posts onHandleClick={setSelectedPostId} posts={posts} />
      <div className="flex justify-center">
        <div className="flex column">
          <input
            type="text"
            name="name"
            className="mb1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="button">Change Name</button>
        </div>
      </div>
      <PostDetails id={selectedPostId} invalidate={invalidate} />
      <AddPost invalidate={invalidate} />
    </div>
  );
};

export default Dashboard;
