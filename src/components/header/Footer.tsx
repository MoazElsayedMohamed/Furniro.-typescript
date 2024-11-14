import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-[#0000002B] ">
      <div className="my-[49px] mx-[100px] max-mdTabelt:mx-[72px] max-phone1:mx-[60px] max-phone2:mx-[24px] ">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 pb-[49px] max-mdTabelt:gap-y-8 max-mdTabelt:gap-x-0  ">
          <div>
            <h3 className="text-2xl font-bold mb-6">Furniro.</h3>
            <p className="text-[#9F9F9F] font-normal w-3/4 text-base">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div>
            <h4 className="text-[#9F9F9F] font-medium text-base mb-8">Links</h4>
            <p className="mb-8">
              <NavLink
                to="/"
                className="text-base font-bold cursor-pointer capitalize mb-8 hover:text-primary"
              >
                home
              </NavLink>
            </p>
            <p className="mb-8">
              <NavLink
                to="/shop"
                className="text-base font-bold cursor-pointer capitalize mb-8 hover:text-primary"
              >
                shop
              </NavLink>
            </p>
            <p className="text-base font-bold cursor-pointer capitalize mb-8 hover:text-primary">
              about
            </p>
            <p>
              <NavLink
                className="text-base font-bold cursor-pointer capitalize mb-8 hover:text-primary"
                to="/contact"
              >
                contact
              </NavLink>
            </p>
          </div>
          <div>
            <h4 className="text-[#9F9F9F] font-medium text-base mb-8">Help</h4>
            <p className="text-base font-bold cursor-pointer capitalize mb-8 hover:text-primary">
              payment options
            </p>
            <p className="text-base font-bold cursor-pointer capitalize mb-8 hover:text-primary">
              returns
            </p>
            <p className="text-base font-bold cursor-pointer capitalize mb-8 hover:text-primary">
              privacy policies
            </p>
          </div>
          <div className="w-full">
            <h4 className="text-[#9F9F9F] font-medium text-base mb-8">
              Newsletter
            </h4>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="outline-none  border-b border-black  pb-3 text-sm placeholder:text-[#9F9F9F] placeholder:font-normal  max-mdScreen:text-xs"
            />
            <button className="outline-none  border-b border-black pb-3 text-sm uppercase ml-4 cursor-pointer font-medium max-mdScreen:ml-2 max-mdScreen:text-xs">
              subscribe
            </button>
          </div>
        </div>
        <div className="border-t border-[#D9D9D9] pt-10">
          <p className=" font-normal">2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
