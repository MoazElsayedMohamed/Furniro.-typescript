import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Navicons from "./Navicons";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="flex items-center justify-around">
      <div className="flex items-center mb-4">
        <Logo />
        <h2 className="text-4xl">Furniro</h2>
      </div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Navicons />
    </header>
  );
};

export default Header;
