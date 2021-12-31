import React from "react";
import "../styles/home.css";
import ProdItem from "./ProdItem";

const HomeGellery = () => {
  return (
    <div className="home_gallery  grid grid-cols-6 gap-1 grid-flow-row-dense h-[84vh] mt-[95px] overflow-auto">
      <ProdItem
        img="/images/prod/1.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/2.png"
        alt=""
        comp="w-full h-full object-cover col-start-2 col-end-4 row-start-1 row-end-3"
      />
      <ProdItem
        img="/images/prod/3.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/4.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/5.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/6.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/7.jpg"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/8.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/9.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/10.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/11.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/12.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/1.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/2.png"
        alt=""
        comp="w-full h-full object-cover col-start-5 col-end-7 row-start-3 row-end-5"
      />
      <ProdItem
        img="/images/prod/3.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/4.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/5.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
      <ProdItem
        img="/images/prod/6.png"
        alt=""
        // className="w-full h-[150px] object-cover"
      />
    </div>
  );
};

export default HomeGellery;
