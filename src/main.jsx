import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import "./index.css";
import router from "./routers/index.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </AuthProvider>
);
