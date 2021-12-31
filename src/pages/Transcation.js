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
              src="https://s3-alpha-sig.figma.com/img/2721/764d/59516fb48f33e2c4c187868ef5951c1b?Expires=1641772800&Signature=fvzSiEVVcG~iETKdwCnHcHwqMka4m2ySguaXLIFsRE1qQqtkw~xIToiL70MleKgiLAGTNKaZZcejkQmV20ZZIvyCT3NZPKPtuV60WQ4xKe0f~nsDu~NApIF5aTXKsBfWUu7PhhRTkyZLuaRHNsD0zNpG9K8KNb1zTzuTzzbe08Jk2-7gZilcshwqRvzPLpn~0mfqMWHnCk7KXdXtam6NE7VapWEvUyQeGzzU203YeLY7oSJmD2G3Z2hS6DnGgrJxcVMDLnOxn1NVeTCY5J-SYCzwq99AWsHr1evCjVdEgbLTr5oKRFcEA7qegRtwNBSyuN7Zb2rrgPw5mD~AmZeQ0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
              img1="/images/prod/bow2.png"
              name="Eternity"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
            <TransItem
              img1="/images/prod/anime.png"
              name="Sunshine"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
            <TransItem
              img1="/images/prod/bow2.png"
              name="Eternity"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
            <TransItem
              img1="/images/prod/anime.png"
              name="Sunshine"
              timestamp="4.57pm"
              price="20000"
              img2="/images/prod/vision.jpg"
            />
            <TransItem
              img1="/images/prod/bow2.png"
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
