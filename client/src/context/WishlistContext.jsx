import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


export const WishlidtContext=createContext()

const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useLocalStorage("wishlist")

    function addWish(product) {
        const existWish=wishlist.findIndex(x=>x._id===product._id)
if (existWish===-1) {
    setWishlist([...wishlist,{...product}])
    console.log(wishlist);
}

    }
    function deleteWish(product) {
      const deletedWish=wishlist.filter(x=>x._id!==product._id)
      setWishlist(deletedWish)
    }
    const data={
        wishlist, setWishlist,addWish,deleteWish
    }
  return (
    <WishlidtContext.Provider value={data}>
{children}
    </WishlidtContext.Provider>
  )
}

export default WishlistProvider