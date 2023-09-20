
export default function ItemCard(){

  return (
    <div className="bg-black/80 h-80 w-64 m-6 flex justify-center items-center flex-col">
      <div className="bg-white/40 h-48 w-48"></div>
      <div className="text-zinc-100">Title</div>
      <div className="text-white">$4</div>
      <div className="flex">
        <form action="">
          <input className="w-14 text-center" 
            name="numOfItems" type="number" defaultValue={0} min="0" max="20">
          </input>
          <input type="hidden" name="itemid" value="temp1234"></input>
          <button className=" bg-red-400 w-20">Add</button>
        </form>
      </div>
    </div>
  )
}