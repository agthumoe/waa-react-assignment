import { createBrowserRouter } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import AuthLayout from "../pages/layouts/AuthLayout";
import RootLayout from "../pages/layouts/RootLayout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PostDetails from "../pages/PostDetails";
import Posts from "../pages/Posts";
import Profile from "../pages/Profile";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "auth",
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Profile />,
            },
            {
              path: "posts",
              element: <Posts />,
            },
            {
              path: "posts/new",
              element: <CreatePost />,
            },
            {
              path: "posts/:id",
              element: <PostDetails />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

export default router;
