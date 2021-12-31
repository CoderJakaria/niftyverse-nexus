import React from "react";
import "../styles/home.css";
import ProdItem from "./ProdItem";

const ProfileGallery = () => {
  return (
    <div className="profile_gallery grid lg:grid-cols-4 grid-cols-3 gap-1 h-[84vh] mt-[60px] overflow-auto">
      <ProdItem
        img="/images/premium/1.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/2.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/1.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/2.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />

      <ProdItem
        img="/images/premium/2.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/3.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/2.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/3.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />

      <ProdItem
        img="/images/premium/1.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/2.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/1.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/2.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />

      <ProdItem
        img="/images/premium/2.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/3.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/2.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/premium/3.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
    </div>
  );
};

export default ProfileGallery;
