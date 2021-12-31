import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-300 py-2 fixed z-[1000] w-full bg-white top-0">
      <div className="max-w-5xl lg:mx-auto mx-3 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="site-logo"
              className="w-[64px] h-[64px]"
            />
            <h3 className="sm:block hidden text-[30px] ml-2 font-normal text-black font-prata">
              Niftyverse
            </h3>
          </div>
        </Link>

        <div className="flex items-center space-x-5 ">
          <div className="flex items-center justify-between bg-white rounded-[40px] border border-gray-300 px-3 py-1 sm:block hidden">
            <input
              type="text"
              className="border-none outline-none m-0 sm:w-auto w-[140px]"
            />
            <img src="/images/icons/search.png" alt="" className="w-5 h-5" />
          </div>

          <Link to="/create-nft">
            {" "}
            <img src="/images/icons/more.png" alt="" className="w-5 h-5" />
          </Link>
          <Link to="/transcation">
            <img src="/images/icons/folder.png" alt="" className="w-5 h-5" />
          </Link>
          <Link to="/profile">
            <img src="/images/icons/user.png" alt="" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
