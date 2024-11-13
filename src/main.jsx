import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./components/Dashboard.jsx";
import { StatefulContextProvider } from "./contexts/StatefulContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StatefulContextProvider>
      <Dashboard />
    </StatefulContextProvider>
  </StrictMode>
);
