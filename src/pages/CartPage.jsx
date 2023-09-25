import { useLoaderData } from "react-router-dom";
import CartItemCard from "../components/CartItemCard";
import { getCartItem } from "../storeapi";

export async function loader(){
  const cart  = JSON.parse(localStorage.getItem("mycart"));
  if (!cart) return [];
  const cartItems = Object.entries(cart);

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
  console.log(cartItemsData);
  const subtotal = cartItemsData.reduce((acc, item)=> acc + item.totalPrice, 0);
  const roundedSubtotal = Math.round(subtotal * 100) /100;
  roundedSubtotal.toFixed(2);

  const tax = Math.round(((subtotal * .11)+ Number.EPSILON) *  100) / 100;
  tax.toFixed(2)

  const finalPrice = Math.round((subtotal + tax) * 100) /100;
  finalPrice.toFixed(2);

  return(
    <>
    <form id="cart" className=" h-5/6 w-[95%] self-center flex items-center flex-col  overflow-y-auto">
      {cartItemsData.map((item)=>{
        return <CartItemCard key={item.id} itemData={item}/>
      })}
    </form>
      <div className="bg-black my-4 w-[80%] self-center flex items-center justify-around">
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">Subtotal</p>
          <p className="text-green-500">${roundedSubtotal}</p>
        </div>
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">Tax & Fees</p>
          <p className="text-green-500">${tax}</p>
        </div>
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">Total</p>
          <p className="text-green-500">${finalPrice}</p>
        </div>
        <button type="submit" form="cart" onClick={()=>localStorage.clear()}
        className="bg-green-400/90 my-6 w-48 h-16 self-center text-3xl font-medium rounded-full border-black border-4 hover:bg-green-400/70">
          Check Out
        </button>
      </div>
      </>
  )
}