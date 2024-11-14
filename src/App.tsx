import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./output.css";
import AppLayout from "./AppLayout";
import { Toaster } from "sonner";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
