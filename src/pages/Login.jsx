import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Field from "../components/Field";
import Form from "../components/Form";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: formRef.current.username.value,
      password: formRef.current.password.value,
    };
    await login(data);
    alert("Successful login.");
    navigate("/");
  };

  return (
    <Form
      className="max-w-lg mx-auto mt-32 p-10 rounded-lg bg-white shadow-md"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-indigo-700 mb-7 text-center">
        Please Login to continue
      </h2>
      <Field name="username" label="Username" placeholder="Your username" />
      <Field
        name="password"
        label="Password"
        placeholder="Your password"
        type="password"
      />
      <div className="mt-7 flex space-x-2 justify-end">
        <Button type="submit">Login</Button>
        <Button color="danger" type="button">
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default Login;
