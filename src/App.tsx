import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./output.css";
import AppLayout from "./AppLayout";

import { Toaster } from "sonner";
import { Suspense, lazy } from "react";
// import { Skeleton } from "./components/ui/skeleton";

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

  const Spinner = () => {
    return (
      <div className="w-[6rem] h-[6rem] rounded-[50%] animate-spin  bg-custom-conic absolute left-[50%] top-[30rem]"></div>
    );
    // <Skeleton className="w-[100px] h-[20px] rounded-full" />;
  };

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
        <Toaster />
      </Suspense>
    </>
  );
}

export default App;
