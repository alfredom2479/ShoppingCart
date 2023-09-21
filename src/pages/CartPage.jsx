import CartItemCard from "../components/CartItemCard";

export default function CartPage(){

  return(
    <>
    <form id="cart" className="bg-white/30 h-5/6 w-[95%] self-center flex items-center flex-col overflow-y-scroll">
      <CartItemCard/>
      <CartItemCard/>
      <CartItemCard/>
      <CartItemCard/>
    </form>
      <div className="bg-black/50 my-4 w-[80%] self-center flex items-center justify-around">
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">subtotal</p>
          <p className="text-green-500">$subprice</p>
        </div>
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">tax & fees</p>
          <p className="text-green-500">$t&fprice</p>
        </div>
        <div className="text-white flex flex-col items-center">
          <p className="font-medium text-2xl">total</p>
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