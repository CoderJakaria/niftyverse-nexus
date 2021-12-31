import React from "react";
import { useNavigate } from "react-router-dom";

const ProdItem = ({ img, comp }) => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src={img}
        alt=""
        className={comp ? comp : "w-full h-[150px] object-cover"}
        onClick={() => navigate("/transcation")}
      />
    </>
  );
};

export default ProdItem;
