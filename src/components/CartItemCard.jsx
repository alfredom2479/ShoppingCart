import PropTypes from "prop-types";


export default function CartItemCard({itemData}){

  return(
    <div className="bg-black/80 h-64  my-2 w-[80%] flex items-center justify-around">
      <div className="bg-white h-48 w-44 flex justify-center">
        <img src={itemData.image} alt={itemData.title}/>
      </div>
      <div className="text-zinc-100 w-48 m-4 [&:not(:hover)]:truncate text-center">
        {itemData.title}
      </div>
      <div className="text-white">
        ${itemData.totalPrice}
      </div>
      <input type="number" name="itemid" defaultValue={3} min="0" max="20"/> 
    </div>
  )
}


CartItemCard.propTypes = {
  itemData: PropTypes.object
}