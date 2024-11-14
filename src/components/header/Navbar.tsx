import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import "../../style.css";

interface NavbarProps {
  openMenu?: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <nav>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <IoMenu className="hidden w-32 h-8 max-tablet:flex " />
      </div>
      <ul
        className={
          openMenu
            ? "absolute flex flex-col items-start gap-1 pt-8 pb-5 px-10 w-full bg-white z-[999] left-0"
            : "flex list-none items-center gap-14 cursor-pointer max-tablet:hidden "
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
