import { BsPersonExclamation } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navicons = () => {
  return (
    <nav className="flex gap-8">
      <Link to="/login">
        <BsPersonExclamation className="w-10 h-8 sm:max-xl:h-6" />
      </Link>

      <CiSearch className="w-10 h-8 sm:max-xl:h-6" />
      <CiHeart className="w-10 h-8 sm:max-xl:h-6" />

      <CiShoppingCart className="w-10 h-8 sm:max-xl:h-6" />
    </nav>
  );
};

export default Navicons;
