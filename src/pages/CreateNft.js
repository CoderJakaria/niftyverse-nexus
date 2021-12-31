import React from "react";

const CreateNft = () => {
  return (
    <section className="">
      <div className="max-w-5xl lg:mx-auto mx-5 p-[50px] rounded-[50px] border border-gray-300 my-[25px]">
        <div className="md:flex space-x-5 items-center">
          <div className="flex-[0.5]">
            <img
              src="/images/prod/child.png"
              alt=""
              className="rounded-md md:mb-0 mb-5"
            />
          </div>
          <div className="flex-[0.5]">
            <div className="flex space-x-3">
              <div>
                <label htmlFor="name">Item Name</label>
                <label htmlFor="name">Description</label>
                <label htmlFor="name">Item Price (In NIFTY)</label>
                <label htmlFor="name">External Link (If Any)</label>
              </div>

              <div>
                <input type="text" placeholder="Item Name" />
                <input type="text" placeholder="Description" />
                <input type="text" placeholder="Item Price" />
                <input type="text" placeholder="External Link" />
              </div>
            </div>

            <p className="text-base mb-5">
              Mint: Text, Image, Video, Audio, or 3D Model File types supported:
              JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size:
              100 MB
            </p>

            <div className="flex justify-between items-center">
              <button className="rounded-[40px] border border-gray-300 px-5 py-1">
                <label htmlFor="choosefile" className="m-0 p-0">
                  Choose File
                </label>
                <input type="file" id="choosefile" className="hidden" />
              </button>
              <button className="rounded-[40px] border border-gray-300 px-5 py-1">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNft;
