import { useEffect, useState } from "react";
import { 
  Outlet,
  NavLink,
  useActionData
} from "react-router-dom"

export default function NavLayout(){

  const [cartCount, setCartCount] = useState(0);
  const addedItems = useActionData();

  useEffect(()=>{
    if(addedItems && addedItems.itemsAdded){
      setCartCount(cartCount+addedItems)
    }
  },[addedItems,cartCount])

  let cart;
  try{
    cart = JSON.parse(localStorage.getItem("mycart"));
  }catch{
    cart = {};
  }

  useEffect(()=>{
    let cartItemCount = 0;
    if(!cart){
      cartItemCount = 0;
    }
    else{
      const itemsArr = Object.entries(cart);
      for(let i = 0; i < itemsArr.length; i++){
        cartItemCount += itemsArr[i][1];
      }
    }
    setCartCount(cartItemCount);
  },[cart])
  

  const activeStyle = {
    color: "rgb(253,186,116)",
    border: ".4rem solid rgb(253,186,116)",
    borderTop: "none",
    borderBottom: "none",
    padding: "0 2rem"
  }
  const notActiveStye = {
    padding: "0 2rem",
    color: "#8bc6ec",
  }

  return (
    <div className=" h-screen min-h-[400px] w-screen min-w-[700px] flex flex-col">
      <div className="h-1/6 min-h-24 w-full min-w[700px] flex text-4xl text-white items-center">
        <nav className=" w-full h-24 bg-black/90 flex items-center">
          <ul className="flex w-full items-center justify-center text-2xl  ">
            <li className="mx-6 font-bold">
              <NavLink to="/" style={({isActive}) => isActive? activeStyle : notActiveStye}>
                Home
              </NavLink>
            </li>
            <li className="mx-6 font-bold">
              <NavLink to="/shop" style={({isActive}) => isActive? activeStyle : notActiveStye}>
                Catalog
              </NavLink>
            </li>
            <li className="mx-6 font-bold relative">
              <NavLink to="/cart" style={({isActive}) => isActive? activeStyle : notActiveStye}>
                Cart
              </NavLink>
              <div className=" bg-orange-300 flex rounded-full w-6 h-6 text-center justify-center items-center text-black font-semibold text-[.95rem] absolute -bottom-4 -right-2">
                {cartCount}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet context={[cartCount, setCartCount]} />
    </div>
    
  )
}