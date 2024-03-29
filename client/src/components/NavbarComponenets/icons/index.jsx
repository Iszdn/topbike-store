import React, { useContext } from "react";
import { BasketContext } from "../../../context/BasketContext";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { GrShop } from "react-icons/gr";
import { WishlidtContext } from "../../../context/WishlistContext";
import { Link } from "react-router-dom";
import "./index.scss"
import { AuthContext } from "../../../context/authContext";
import { CiLogin } from "react-icons/ci";
const Icons = () => {
  const { basket } = useContext(BasketContext);
  const { wishlist } = useContext(WishlidtContext);
  const { decodedToken } = useContext(AuthContext)
  return (
    <div className="icons">
      <span>
        <IoSearch />
      </span>
      {
        decodedToken ? ( <span>
          <Link to="/account"><IoPersonOutline /></Link>
        
      </span>) : ( <span><Link to="/login"><CiLogin /></Link></span> )
      }
     
      <span>
       <Link to="/wishlist"> <FiHeart /></Link>
        <span className="cirkle">{wishlist.length}</span>
      </span>
      <span>
        <Link to="/cart"><GrShop /> </Link>
        <span className="cirkle">{basket.length}</span>
      </span>
    </div>
  );
};

export default Icons;
