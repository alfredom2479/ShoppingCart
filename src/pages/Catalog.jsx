import { 
  useLoaderData, useOutletContext,
} from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { getStoreItems } from "../storeapi";

export async function loader(){
  const storeItems = await getStoreItems(20);
  return storeItems;
}



export default function Catalog(){

  const storeItems = useLoaderData();
  const [cartCount, setCartCount] = useOutletContext();

  //setCartCount(cartItemCount);

  return(
    <div className="bg-black/80 h-5/6 w-[95%] mt-2 self-center flex flex-wrap justify-center overflow-y-scroll  rounded-3xl ">
      {storeItems.map((item)=> <ItemCard key={item.id} itemProps={item} cartCount={cartCount} setCartCount={setCartCount}/>)}
    </div>
  )
}