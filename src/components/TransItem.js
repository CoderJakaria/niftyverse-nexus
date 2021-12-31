import React from "react";

const TransItem = ({ img1, name, timestamp, price, img2 }) => {
  return (
    <div className="border-b border-gray-200 mb-2 p-1">
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={img1}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <h4>{name}</h4>
        </div>
        <div>
          <p className="sm:text-base text-sm text-gray-400">{timestamp}</p>
        </div>
        <div className="flex items-center space-x-3">
          <h4 className="sm:text-lg text-sm">{price} NFT</h4>
          <img
            src={img2}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <p className="sm:text-base text-sm text-gray-400">Bought “Stratosense”</p>
    </div>
  );
};

export default TransItem;
