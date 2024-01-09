import React, { useContext } from "react";
import { BasketContext } from "../../../context/BasketContext";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { GrShop } from "react-icons/gr";
const Icons = () => {
  const { basket } = useContext(BasketContext);
  return (
    <div className="icons">
      <span>
        <IoSearch />
      </span>
      <span>
        <IoPersonOutline />
      </span>
      <span>
        <FiHeart />
        <span className="cirkle">{basket.length}</span>
      </span>
      <span>
        <GrShop />
        <span className="cirkle">{basket.length}</span>
      </span>
    </div>
  );
};

export default Icons;
