
export async function getStoreItems(limitAmount){
  const url = `https://fakestoreapi.com/products?limit=${limitAmount}`;
  const res = await fetch(url);
  if(!res.ok){
    throw {
      message: "Failed to fetch store items",
      statusText: res.statusText,
      status: res.status
    };
  }
  const data = await res.json();
  return data;
}

export async function getCartItem(itemInfo){
  
  const url = `https://fakestoreapi.com/products/`+itemInfo[0];
  const res = await fetch(url);

  if(!res.ok){
    throw{
      message: "Failed to fetch store items",
      statusText: res.statusText,
      status: res.status
    };
  }

  const data = await res.json();

  data.totalPrice = data.price*itemInfo[1];
  data.itemCount = itemInfo[1];

  return data;
}