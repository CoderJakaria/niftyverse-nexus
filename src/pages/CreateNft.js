import React, { useState } from "react";
import PostPop from "../components/PostPop";

const CreateNft = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [btnText, setBtnText] = useState("Post");
  return (
    <section className="mt-[90px]">
      <PostPop showPopup={showPopup} setShowPopup={setShowPopup} />
      <div className="max-w-5xl lg:mx-auto sm:mx-5 mx-0 sm:p-[40px] p-[15px] sm:rounded-[50px] border border-gray-300 my-[25px]">
        <div className="md:flex sm:space-x-5 items-center">
          <div className="flex-[0.5]">
            <img
              src="/images/prod/child.png"
              alt=""
              className="rounded-md md:mb-0 mb-5"
            />
          </div>
          <div className="flex-[0.5] font-poppins">
            <div className="flex space-x-3 relative">
              <div>
                <label htmlFor="name" className="sm:text-base text-sm">
                  Item Name
                </label>
                <hr className="absolute w-full bg-gray-200" />
                <label htmlFor="name" className="sm:text-base text-sm">
                  Description
                </label>
                <hr className="absolute w-full bg-gray-200" />
                <label htmlFor="name" className="sm:text-base text-sm">
                  Price (In NIFTY)
                </label>
                <hr className="absolute w-full bg-gray-200" />
                <label htmlFor="name" className="sm:text-base text-sm">
                  External Link
                </label>
                <hr className="absolute w-full bg-gray-200" />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Item Name"
                  className="sm:text-base text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="sm:text-base text-sm"
                />
                <input
                  type="text"
                  placeholder="Item Price"
                  className="sm:text-base text-sm"
                />
                <input
                  type="text"
                  placeholder="External Link"
                  className="sm:text-base text-sm"
                />
              </div>
            </div>

            <p className="sm:text-base text-sm mb-5">
              Mint: Text, Image, Video, Audio, or 3D Model File types supported:
              JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size:
              100 MB
            </p>

            <div className="flex justify-between items-center">
              <button className="rounded-[40px] border border-gray-300 px-5 py-1">
                <label
                  htmlFor="choosefile"
                  className="m-0 p-0 sm:text-base text-sm"
                >
                  Choose File
                </label>
                <input type="file" id="choosefile" className="hidden" />
              </button>
              <button
                className="rounded-[40px] border sm:text-base text-sm border-gray-300 px-5 py-1"
                onClick={() => {
                  setBtnText("NFT Posting");
                  setTimeout(() => {
                    setShowPopup(true);
                    setBtnText("Post");
                  }, 3000);
                }}
              >
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNft;
