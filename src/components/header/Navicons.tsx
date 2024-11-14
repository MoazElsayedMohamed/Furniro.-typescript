import { Link } from "react-router-dom";
import { toast } from "sonner";
import { SvgIcon } from "../SvgIcon";

interface NavbarProps {
  openMenu?: boolean;
}

const Navicons: React.FC<NavbarProps> = ({ openMenu }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.replace("/login");
    toast.success("logged out successfully");
  }
  return (
    <nav
      className={
        openMenu
          ? "flex flex-col items-end absolute right-0 top-16 gap-2 z-[999] pt-8 pb-5 px-10"
          : "flex items-center gap-8 max-tablet:hidden"
      }
    >
      {token && username ? (
        <p>{username}</p>
      ) : (
        <Link to="/login">
          <SvgIcon name="login" />
        </Link>
      )}

      <SvgIcon name="search" />
      <SvgIcon name="heart" />
      <SvgIcon name="shopping-cart" />
      {token && (
        <button
          className="border border-primary text-primary py-2 px-4 hover:bg-primary hover:text-white "
          onClick={handleLogout}
        >
          log out
        </button>
      )}
    </nav>
  );
};

export default Navicons;
