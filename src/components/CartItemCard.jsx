


export default function CartItemCard(){

  return(
    <div className="bg-black/80 h-64  my-2 w-[80%] flex items-center justify-around">
      <div className="bg-white h-48 w-44 flex justify-center">
        {/* img goes here */}
      </div>
      <div className="text-zinc-100 w-48 m-4 [&:not(:hover)]:truncate text-center">
        title goes here ajdshfapouehpiehklds faksdlfadsh
      </div>
      <div className="text-white">
        $price
      </div>
      <input type="number" name="itemid" defaultValue={3} min="0" max="20"/> 
    </div>
  )
}
