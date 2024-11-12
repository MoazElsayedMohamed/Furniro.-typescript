import { BsPersonExclamation } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Navicons = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.replace("/login");
    toast.success("logged out successfully");
  }
  return (
    <nav className="flex items-center gap-8">
      {token && username ? (
        <p className="text-xl">{username}</p>
      ) : (
        <Link to="/login">
          <BsPersonExclamation className="w-10 h-8 sm:max-xl:h-6" />
        </Link>
      )}

      <CiSearch className="w-10 h-8 sm:max-xl:h-6" />
      <CiHeart className="w-10 h-8 sm:max-xl:h-6" />

      <CiShoppingCart className="w-10 h-8 sm:max-xl:h-6" />
      {token && (
        <button
          className="text-2xl border border-primary text-primary py-4 px-8 hover:bg-primary hover:text-white sm:max-xl:text-base sm:max-xl:py-2"
          onClick={handleLogout}
        >
          log out
        </button>
      )}
    </nav>
  );
};

export default Navicons;
