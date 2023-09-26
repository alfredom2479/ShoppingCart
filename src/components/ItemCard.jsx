import PropTypes from "prop-types";
//import { useState } from "react";
import {Form, redirect} from "react-router-dom";

export async function action({request}){

  let currCart;
  try{
    currCart = JSON.parse(localStorage.getItem("mycart"));
  }catch{
    currCart = {};
  }

  //console.log(currCart);

  const formData = await request.formData();
  let numOfItems = Number(formData.get("numOfItems")) || 0;
  const itemId = formData.get("itemid") || undefined;

  if(typeof numOfItems != "number"){
    numOfItems=0;
  }

  if(numOfItems <1) return redirect("/shop");

  if(currCart && itemId){
      let currAmount = (Number(currCart[itemId]));
      if( typeof currAmount != "number") currAmount = 0;

      currCart[itemId] = (currAmount+numOfItems) || numOfItems;
  }
  else if(itemId){
    currCart = {};
    currCart[itemId] = numOfItems;
  }

  //console.log(currCart);
  localStorage.setItem("mycart",JSON.stringify(currCart));
  
  //formData.get("not real field") returns null
  //localStorage.getItem("misnalgas") returns null
  return {itemsAdded: numOfItems};
}

export default function ItemCard({itemProps}){

  //const [itemCount, setItemCount] = useState(0);
  //console.log(itemProps.title);
  return (
    <div className="bg-black/80 h-80 w-64 m-6 flex justify-center items-center flex-col rounded-lg border-solid border-orange-300 border-2">
      <div className=" bg-white h-48 w-full flex justify-center ">
        <img src={itemProps.image} alt={itemProps.title}
          className="h-48"/>
      </div>
      <div className="text-zinc-100  w-48 text-center [&:not(:hover)]:truncate">
        {itemProps.title}
      </div>
      <div className="text-white">${itemProps.price}</div>
      <div className="flex">
        <Form method="post" action="/shop">
          <input className="w-14 text-center mt-2" 
            name="numOfItems" type="number" defaultValue={0} min="0" max="20">
          </input>
          <input type="hidden" name="itemid" value={itemProps.id} ></input>
          <button className=" bg-orange-300 w-20 hover:bg-[#8bc6ec]"
            type="submit" >
            Add
          </button>
        </Form>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  itemProps: PropTypes.object,
//  cartCount: PropTypes.number,
 // setCartCount: PropTypes.func

}