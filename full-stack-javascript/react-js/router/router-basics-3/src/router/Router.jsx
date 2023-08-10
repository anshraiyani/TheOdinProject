import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Profile from "../components/Profile";
import App from "../App";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile:name",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
