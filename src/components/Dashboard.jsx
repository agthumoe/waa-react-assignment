import { useState } from "react";
import PostDetails from "./PostDetails";
import Posts from "./Posts";

const Dashboard = () => {
  const posts = [
    {
      id: 111,
      title: "Hapiness",
      author: "John",
      content:
        "Mollit culpa consectetur tempor proident nulla labore eiusmod sunt. Minim in ex id nisi adipisicing dolore amet ad pariatur ullamco ullamco. Non culpa mollit elit enim ex aliqua adipisicing reprehenderit adipisicing laboris sit dolore ipsum. Laborum officia nisi nostrud aliquip cillum exercitation tempor. Incididunt ex voluptate labore amet. Nostrud consequat dolor aliquip occaecat.",
    },
    {
      id: 112,
      title: "MIU",
      author: "Dean",
      content:
        "Quis duis mollit ad officia nisi consequat. Cupidatat irure duis non sint laborum esse eu enim dolore anim reprehenderit. Eiusmod nulla ea labore qui et. Pariatur minim voluptate sunt sit qui enim eiusmod.",
    },
    {
      id: 113,
      title: "Enjoy Life",
      author: "Jasmine",
      content:
        "Dolore duis dolor esse consectetur in non commodo et cupidatat. Et pariatur reprehenderit eu laborum eiusmod officia sit adipisicing Lorem officia. Ut minim culpa ea sint dolor cupidatat dolor officia eiusmod enim deserunt. Voluptate quis irure quis dolor.",
    },
  ];
  const [post, setPost] = useState(null);

  const [text, setText] = useState("");

  const [title, setTitle] = useState("");

  const changeName = () => {
    setTitle(text);
  };

  return (
    <div className="flex align-center column">
      <Posts setPost={setPost} posts={posts} title={title} />
      <div className="flex justify-center">
        <div className="flex column">
          <input
            type="text"
            name="name"
            className="mb1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="button" onClick={changeName}>
            Change Name
          </button>
        </div>
      </div>
      <PostDetails post={post} title={title} />
    </div>
  );
};

export default Dashboard;
