import ItemCard from "../components/ItemCard";


export default function Catalog(){

  return(
    <div className="bg-white/30 h-5/6 w-4/5 mt-6 self-center flex flex-wrap justify-center overflow-y-scroll">
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
    </div>
  )
}