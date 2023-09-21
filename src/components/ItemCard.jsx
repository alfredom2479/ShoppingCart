import PropTypes from "prop-types";
import {Form, redirect} from "react-router-dom";

export async function action({request}){

  let currCart = JSON.parse(localStorage.getItem("mycart"));
  console.log(currCart);

  const formData = await request.formData();
  let numOfItems = Number(formData.get("numOfItems")) || 0;
  const itemId = formData.get("itemid") || undefined;

  if(typeof numOfItems != "number"){
    numOfItems=0;
  }

  if(currCart && itemId){
      let currAmount = (Number(currCart[itemId]));
      if( typeof currAmount != "number") currAmount = 0;

      currCart[itemId] = (currAmount+numOfItems) || numOfItems;
  }
  else if(itemId){
    currCart = {};
    currCart[itemId] = numOfItems;
  }

  console.log(currCart);
  localStorage.setItem("mycart",JSON.stringify(currCart));
  
  //formData.get("not real field") returns null
  //localStorage.getItem("misnalgas") returns null
  //console.log(localStorage.getItem("misnalgas"));
  //console.log(request.url);
  return redirect("/shop");
  //return null;
}

export default function ItemCard({itemProps}){

  //console.log(itemProps.title);
  return (
    <div className="bg-black/80 h-80 w-64 m-6 flex justify-center items-center flex-col rounded-lg">
      <div className=" bg-white h-48 w-full flex justify-center ">
        <img src={itemProps.image} alt={itemProps.title}
          className="h-48"/>
      </div>
      <div className="text-zinc-100  w-48 text-center [&:not(:hover)]:truncate">
        {itemProps.title}
      </div>
      <div className="text-white">${itemProps.price}</div>
      <div className="flex">
        <Form method="post" action="/">
          <input className="w-14 text-center mt-2" 
            name="numOfItems" type="number" defaultValue={0} min="0" max="20">
          </input>
          <input type="hidden" name="itemid" value={itemProps.id}></input>
          <button className=" bg-red-400 w-20">Add</button>
        </Form>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  itemProps: PropTypes.object
}