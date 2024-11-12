import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./output.css";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { Toaster } from "sonner";

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
