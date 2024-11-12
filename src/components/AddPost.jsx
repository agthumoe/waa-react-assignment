import { useState } from "react";
import { createPost } from "../api/api";

const AddPost = ({ invalidate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    createPost({ title, content, author }).then(() => {
      invalidate();
      reset();
    });
  };

  const reset = () => {
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <form noValidate className="flex column w-quarter p3 border m3">
      <div className="flex column mt1">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex column mt1">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex column mt1">
        <label htmlFor="author">Author</label>
        <input
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mt1">
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddPost;
