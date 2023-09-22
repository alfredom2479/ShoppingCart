import { useLoaderData } from "react-router-dom";
import CartItemCard from "../components/CartItemCard";
import { getCartItem } from "../storeapi";

export async function loader(){
  const cart  = JSON.parse(localStorage.getItem("mycart"));
  const cartItems = Object.entries(cart);

  console.log(cartItems);
  if(!Array.isArray(cartItems)){
    return [];
  }

  const cartItemsData = await Promise.all(
    cartItems.map((item) => getCartItem(item))
  )

  //console.log(cartItemsData);
  return cartItemsData
  
}

export default function CartPage(){

  const cartItemsData = useLoaderData();

  return(
    <>
    <form id="cart" className="bg-white/30 h-5/6 w-[95%] self-center flex items-center flex-col overflow-y-scroll">
      {cartItemsData.map((item)=>{
        return <CartItemCard key={item.id} itemData={item}/>
      })}
    </form>
      <div className="bg-black/50 my-4 w-[80%] self-center flex items-center justify-around">
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">Subtotal</p>
          <p className="text-green-500">$subprice</p>
        </div>
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">Tax & Fees</p>
          <p className="text-green-500">$t&fprice</p>
        </div>
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">Total</p>
          <p className="text-green-500">$totalprice</p>
        </div>
        <button type="submit" form="cart" onClick={()=>localStorage.clear()}
        className="bg-green-400/20 my-6 w-48 h-16 self-center text-3xl font-medium rounded-full border-black border-4 hover:bg-green-400/70">
          Check Out
        </button>
      </div>
      </>
  )
}