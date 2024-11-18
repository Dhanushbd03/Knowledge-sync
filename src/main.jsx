import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Home";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/career",
      element: <Career />,
    },
    {
      path:"/projects",
      element: <Projects />
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </StrictMode>,
);
