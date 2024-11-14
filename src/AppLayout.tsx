import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/header/Footer";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

const AppLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const Loading = () => {
    return <p>loading...</p>;
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Outlet />
        {!isLogin && <Footer />}
      </Suspense>
    </div>
  );
};

export default AppLayout;
