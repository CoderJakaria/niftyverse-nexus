import React from "react";
import ProfileGallery from "../components/ProfileGallery";

const Profile = () => {
  return (
    <section>
      <div className="max-w-5xl lg:mx-auto md:mx-5 sm:mx-5 mx-0 ">
        <div className="md:flex py-5 md:space-x-5 space-x-0">
          <div className="flex-[0.4] flex flex-col items-center md:mt-auto mt-[70px]">
            <img
              src="https://images.unsplash.com/photo-1638913971789-667874197280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="h-[180px] w-[180px] rounded-full"
            />
            <h2 className="sm:text-4xl text-3xl font-medium text-black mb-10 mt-2 font-prata">
              David Banik
            </h2>

            <p className="pt-1 pb-5 px-2 border border-gray-200 rounded-[5px] text-center mb-1 sm:ml-0 ml-0 font-poppins w-full">
              A whole ‘nother wavelength of love and energy vibrating in a
              higher dimension of mind.
            </p>

            <div className="lg:flex space-x-1 w-full font-poppins">
              <div className="flex-[0.5] p-3 border border-gray-200 rounded-[5px] mb-1">
                <div className="flex items-center justify-center pr-4">
                  <p className="text-sm">0x2aA360Bb00e488627CADE</p>
                  <img
                    src="/images/icons/clipboards.png"
                    alt=""
                    className="w-5 h-5 ml-1 cursor-pointer"
                  />
                </div>
                <p className="text-center">Wallet Address</p>
              </div>
              <div className="flex-[0.5] flex items-center lg:justify-start justify-center border border-gray-200 p-3 rounded-[5px] space-x-3">
                <div className="flex flex-col items-center">
                  <h4>26</h4>
                  <p className="text-sm">Posts</p>
                </div>
                <div className="flex flex-col items-center">
                  <h4>2.2B NFT</h4>
                  <p className="text-sm">Vol Traded</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between space-x-5 my-5">
              <img
                src="/images/icons/fb.png"
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer"
              />
              <img
                src="/images/icons/insta.png"
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer"
              />
              <img
                src="/images/icons/twitter.png"
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>

          <div className="flex-[0.6]">
            <ProfileGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
