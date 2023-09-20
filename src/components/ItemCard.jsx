import PropTypes from "prop-types";
import {Form, redirect} from "react-router-dom";

export async function action({request}){
  let formData = await request.formData();
  console.log(formData.has("numOfItems"));
  console.log(formData.get(""))
  console.log(request.url);
  return redirect("/shop");
}

export default function ItemCard({itemProps}){

  console.log(itemProps.title);
  return (
    <div className="bg-black/80 h-80 w-64 m-6 flex justify-center items-center flex-col">
      <div className=" h-48 w-48 flex justify-center">
        <img src={itemProps.image} alt={itemProps.title}
          className="h-48"/>
      </div>
      <div className="text-zinc-100  w-48 text-center [&:not(:hover)]:truncate">
        {itemProps.title}
      </div>
      <div className="text-white">${itemProps.price}</div>
      <div className="flex">
        <Form method="post" action="/">
          <input className="w-14 text-center" 
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