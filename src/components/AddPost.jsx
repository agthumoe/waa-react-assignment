import { useContext, useRef } from "react";
import { createPost } from "../api/api";
import Button from "./Button";
import Field from "./Field";
import Form from "./Form";
import StatefulContext from "./StatefulContext";
import TextAreaField from "./TextAreaField";

const AddPost = () => {
  const formRef = useRef();

  const { invalidate } = useContext(StatefulContext);

  const handleSubmit = () => {
    const data = {
      title: formRef.current.title.value,
      content: formRef.current.content.value,
      author: formRef.current.author.value,
    };
    createPost(data).then(() => {
      if (typeof invalidate === "function") {
        invalidate();
      }
      reset();
    });
  };

  const reset = () => {
    formRef.current.reset();
  };

  return (
    <Form
      className="max-w-lg mx-auto my-5 border p-10 rounded-lg"
      ref={formRef}
    >
      <h2 className="text-2xl font-bold text-indigo-700 mb-5">Add Post</h2>
      <Field name="title" label="Title" placeholder="Awesome title" />
      <TextAreaField name="content" label="Content" placeholder="Write here" />
      <Field name="author" label="Author" placeholder="Who's writing" />
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
