import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 mt-8 py-8 px-32">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 pb-8">
        <div>
          <h3 className="text-5xl font-bold mb-8">Furniro.</h3>
          <p className="text-gray-400 font-semibold w-3/4 text-2xl">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div>
          <h4 className="text-gray-400 font-bold text-2xl mb-8">Links</h4>
          <p className="mb-8">
            <NavLink
              to="/"
              className="text-2xl font-bold cursor-pointer capitalize mb-8 hover:text-primary"
            >
              home
            </NavLink>
          </p>
          <p className="mb-8">
            <NavLink
              to="/shop"
              className="text-2xl font-bold cursor-pointer capitalize mb-8 hover:text-primary"
            >
              shop
            </NavLink>
          </p>
          <p className="text-2xl font-bold cursor-pointer capitalize mb-8 hover:text-primary">
            about
          </p>
          <p>
            <NavLink
              className="text-2xl font-bold cursor-pointer capitalize mb-8 hover:text-primary"
              to="/contact"
            >
              contact
            </NavLink>
          </p>
        </div>
        <div>
          <h4 className="text-gray-400 font-bold text-2xl mb-8">Help</h4>
          <p className="text-2xl font-bold cursor-pointer capitalize mb-8 hover:text-primary">
            payment options
          </p>
          <p className="text-2xl font-bold cursor-pointer capitalize mb-8 hover:text-primary">
            returns
          </p>
          <p className="text-2xl font-bold cursor-pointer capitalize mb-8 hover:text-primary">
            privacy policies
          </p>
        </div>
        <div>
          <h4 className="text-gray-400 font-bold text-2xl mb-8">Newsletter</h4>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="outline-none  border-b border-black mt-4 pb-3 text-xl placeholder:text-gray-400 placeholder:font-normal
            "
          />
          <button className="outline-none  border-b border-black mt-4 pb-3 text-2xl uppercase ml-4 cursor-pointer font-semibold">
            subscribe
          </button>
        </div>
      </div>
      <div className="border-t border-gray-500 pt-10">
        <p className="text-2xl font-semibold">
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
