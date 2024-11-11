import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/header/Footer";

const AppLayout = () => {
  const location = useLocation();

  const isLogin = location.pathname === "login";

  return (
    <div>
      <Header />
      <Outlet />
      {!isLogin && <Footer />}
    </div>
  );
};

export default AppLayout;
