import { useRef } from "react";
import { createPost } from "../api/api";
import Button from "./Button";
import Field from "./Field";
import Form from "./Form";
import TextAreaField from "./TextAreaField";

const AddPost = ({ invalidate }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();

  const handleSubmit = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;
    createPost({ title, content, author }).then(() => {
      invalidate();
      reset();
    });
  };

  const reset = () => {
    titleRef.current.value = "";
    contentRef.current.value = "";
    authorRef.current.value = "";
  };

  return (
    <Form className="max-w-lg mx-auto my-5 border p-10 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-700 mb-5">Add Post</h2>
      <Field
        name="title"
        label="Title"
        placeholder="Awesome title"
        ref={titleRef}
      />
      <TextAreaField
        name="content"
        label="Content"
        placeholder="Write here"
        ref={contentRef}
      />
      <Field
        name="author"
        label="Author"
        placeholder="Who's writing"
        ref={authorRef}
      />
      <div className="mt1 flex space-x-2 justify-end">
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
        <Button color="danger" type="reset" onClick={reset}>
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default AddPost;
