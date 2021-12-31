import React, { useState } from "react";
import HomeGellery from "../components/HomeGellery";
import HomeSide from "../components/HomeSide";

const Home = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <section className="relative">
      <div className="absolute lg:hidden top-5 left-5 cursor-pointer bg-black p-1 z-[200]">
        <img
          src="/images/icons/square.png"
          alt=""
          className="h-7 w-7"
          onClick={() => {
            setIsSidebar(!isSidebar);
          }}
        />
      </div>
      <div className="max-w-5xl mx-auto lg:flex ">
        <div
          className={`flex-[0.3] lg:block ${
            isSidebar ? "block px-3" : "hidden"
          } lg:static fixed h-full pr-5 overflow-auto h-screen left-0 top-0 bg-white z-[100]`}
        >
          <HomeSide />
        </div>

        <div className="flex-[0.7] lg:ml-10 mx-2">
          <HomeGellery />
        </div>
      </div>
    </section>
  );
};

export default Home;
