import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="relative isolate px-6 pt-14">
      <div className="mx-auto max-w-2xl py-48">
        <div className="flex sm:mb-8 justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10">
            As part of WWA assignment, designed and developed by{" "}
            <strong className="text-indigo-700">Aung Thu Moe</strong>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900">
            Web Application Architecture - React JS Labs
          </h1>
          <div className="mt-10">
            <Link to="/auth/posts/new">
              <Button color="primary">Let&apos;s Create a new Post</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
