import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { getStoreItems } from "../storeapi";

export async function loader(){
  const storeItems = await getStoreItems(10);
  return storeItems;
}



export default function Catalog(){

  const storeItems = useLoaderData();
  return(
    <div className="bg-white/30 h-5/6 w-[90%] mt-6 self-center flex flex-wrap justify-center overflow-y-scroll">
      {storeItems.map((item)=> <ItemCard key={item.id} itemProps={item}/>)}
    </div>
  )
}