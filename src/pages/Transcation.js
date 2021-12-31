import React, { useState } from "react";
import TransItem from "../components/TransItem";

const Transcation = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <section>
      <div className="max-w-5xl lg:mx-auto mx-5 py-[20px] px-[30px] rounded-[46px] border border-gray-300 my-[25px]">
        <div className="md:flex md:space-x-5">
          <div className="flex-[0.5]">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/prod/user.png"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h4>AndroidJones</h4>
              </div>
              <img src="/images/icons/option.png" alt="" className="w-5 h-5" />
            </div>

            <img src="/images/prod/bow.png" alt="" className="rounded-md" />

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
                    <p>824</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/images/icons/eye.png"
                      alt=""
                      className="w-5 h-5"
                    />
                    <p>824</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <p>2,500,000 NFT</p>
                  <p>Buy</p>
                </div>
              </div>
            </div>

            <p className="text-base">
              These are generations of landsacpes unreal! How do colors beam
              from electronics and organisms? Everlasting light, be my soul!
              #megavoid #deepthought
            </p>

            <span className="text-base text-gray-400">2 hours ago</span>
          </div>

          <div className="flex-[0.5]">
            <p className="text-lg text-center">Trade History</p>

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
