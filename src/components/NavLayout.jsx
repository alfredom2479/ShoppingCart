import { useEffect, useState } from "react"
import { 
  Outlet,
  NavLink
} from "react-router-dom"

export default function NavLayout(){

  const [cartCount, setCartCount] = useState(0);

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
    padding: "0 2rem"
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
            <li className="mx-6 font-bold">
              <NavLink to="/cart" style={({isActive}) => isActive? activeStyle : notActiveStye}>
                Cart
              </NavLink>
            </li>
            <li className=" bg-blue-300 flex rounded-full w-8 h-8 text-center justify-center items-center text-white font-bold">
                {cartCount}
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
    
  )
}