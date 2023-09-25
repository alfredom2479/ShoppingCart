import { 
  useLoaderData,
  useOutletContext
} from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { getStoreItems } from "../storeapi";

export async function loader(){
  const storeItems = await getStoreItems(20);
  return storeItems;
}



export default function Catalog(){

  const storeItems = useLoaderData();
  const setCartCount = useOutletContext();

  const cart = JSON.parse(localStorage.getItem("mycart"));
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



  return(
    <div className="bg-black/80 h-5/6 w-[95%] mt-2 self-center flex flex-wrap justify-center overflow-y-scroll  rounded-3xl ">
      {storeItems.map((item)=> <ItemCard key={item.id} itemProps={item}/>)}
    </div>
  )
}