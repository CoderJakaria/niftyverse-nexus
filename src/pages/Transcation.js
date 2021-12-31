import React, { useState } from "react";
import MenuPop from "../components/MenuPop";
import TransItem from "../components/TransItem";

const Transcation = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  document.addEventListener("click", e => {
    if (showMenu === true) {
      setShowMenu(false);
    }
  });
  return (
    <section className="mt-[90px]">
      <div className="max-w-5xl lg:mx-auto sm:mx-5 mx-0  sm:py-[20px]  py-[10px] sm:px-[30px] px-[10px] m:rounded-[46px] border border-gray-300 my-[25px] font-poppins">
        <div className="md:flex md:space-x-5">
          <div className="flex-[0.5]">
            <div className="flex justify-between items-center mb-3 relative">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/prod/user.png"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h4 className="sm:text-lg text-sm">AndroidJones</h4>
              </div>
              <img
                src="/images/icons/option.png"
                alt=""
                className="w-5 h-5 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  setShowMenu(true);
                }}
              />
              {showMenu && <MenuPop />}
            </div>

            <img
              src="https://images.unsplash.com/photo-1638947604157-d259d219eeee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmZ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="rounded-md"
            />

            <div className="mt-3">
              <div className="flex justify-between w-full">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <img
                      src={`/images/icons/${
                        !isLiked ? "heart" : "heart-fill"
                      }.png`}
                      alt=""
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => {
                        setIsLiked(!isLiked);
                      }}
                    />
                    <p className="sm:text-base text-sm">824</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/images/icons/eye.png"
                      alt=""
                      className="w-5 h-5"
                    />
                    <p className="sm:text-base text-sm">824</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="sm:text-base text-sm sm:block hidden">
                    2,500,000 NFT
                  </p>
                  <button className="homecate sm:text-base text-sm">Buy</button>
                </div>
              </div>
            </div>

            <p className="sm:text-base text-sm">
              These are generations of landsacpes unreal! How do colors beam
              from electronics and organisms? Everlasting light, be my soul!
              #megavoid #deepthought
            </p>

            <span className="sm:text-base text-sm text-gray-400">
              2 hours ago
            </span>
          </div>

          <div className="flex-[0.5]">
            <p className="sm:text-lg text-base text-center sm:my-0 my-3">
              Trade History
            </p>

            <TransItem
              img1="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGJsb2NrY2hhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              name="Eternity"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
            <TransItem
              img1="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              name="Sunshine"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
            <TransItem
              img1="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGJsb2NrY2hhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              name="Eternity"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
            <TransItem
              img1="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              name="Sunshine"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
            <TransItem
              img1="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGJsb2NrY2hhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              name="Eternity"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transcation;
