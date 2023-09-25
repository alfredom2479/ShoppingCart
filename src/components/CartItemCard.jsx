import { useState } from "react";
import PropTypes from "prop-types";


export default function CartItemCard({itemData}){

  const [itemCount, setItemCount] = useState(itemData.itemCount);
  const [isEditing, setIsEditing] = useState(false);

  async function handleClick(e ){
      if(!isEditing) e.preventDefault();

      const myId = itemData["id"];
      let newItemCount = Number(itemCount);

      if(newItemCount < 0){
        newItemCount = 0;
      }
      else if(newItemCount > 20){
        newItemCount = 20;
      }

      if(isEditing){
        setIsEditing(false);
        let currCart = JSON.parse(localStorage.getItem("mycart"));

        if(!currCart){
          currCart = {};
          currCart[myId] = newItemCount;
        }
        else{
          currCart[myId] = newItemCount;
        }
        console.log(currCart)
        localStorage.setItem("mycart",JSON.stringify(currCart))

        
      }
      else{
        setIsEditing(true);
      }
    }

  return(
    <div className="bg-black/80 h-64  my-2 p-4 w-[95%] flex items-center justify-around">
      <div className="bg-white h-32 w-44 flex justify-center">
        <img src={itemData.image} alt={itemData.title}/>
      </div>

      <div className="text-zinc-100 w-[40%] m-4 [&:not(:hover)]:truncate text-center">
        {itemData.title}
      </div>

      {/* <input type="number" name="itemid" defaultValue={3} min="0" max="20"/>  */}
      {isEditing ? 
        <div className="text-white w-[15%] flex justify-center">
          <input className="text-black" 
            type="number" defaultValue={itemCount} min={0} max={20} onChange={(e)=> setItemCount(e.target.value)}/>
          <button onClick={(e)=>handleClick(e)}>done</button>
        </div>
      :
        <div className="text-white w-[15%] flex justify-center">
          {itemData.itemCount}
          <button onClick={(e)=> handleClick(e)}>edit</button>
        </div>
      }
      

      <div className="text-white">
        ${itemData.totalPrice.toFixed(2)}
      </div>
    </div>
  )
}


CartItemCard.propTypes = {
  itemData: PropTypes.object
}