import { NavLink } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";
import "../../style.css";

interface NavbarProps {
  openMenu?: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <nav>
      <div onClick={() => setOpenMenu(!openMenu)}>
        {/* <IoMenu className="hidden w-32 h-8 sm:max-xl:flex " /> */}
      </div>
      <ul
        className={
          openMenu
            ? "open"
            : "flex list-none items-center gap-14 text-2xl cursor-pointer sm:max-xl:hidden"
        }
      >
        <li>
          <NavLink to="/" className="hover:text-primary">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="hover:text-primary">
            Shop
          </NavLink>
        </li>
        <li className="hover:text-primary">About</li>
        <li>
          <NavLink to="/contact" className="hover:text-primary">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
