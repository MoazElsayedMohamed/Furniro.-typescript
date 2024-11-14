import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Navicons from "./Navicons";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="flex items-center justify-around h-24 max-tablet:justify-between">
      <div className="flex items-center ">
        <Logo />
        <h2 className="text-3xl font-bold">Furniro</h2>
      </div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Navicons openMenu={openMenu} />
    </header>
  );
};

export default Header;
