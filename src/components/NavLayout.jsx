import { 
  Outlet,
  NavLink
} from "react-router-dom"

export default function NavLayout(){

  return (
    <div className="h-full ">
      <div className="h-16 w-full bg-black/50 mt-16 flex text-4xl text-white items-center">
        <nav className="w-full">
          <ul className="flex w-full items-center justify-center text-2xl  ">
            <li className="mx-10">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mx-10">
              <NavLink to="/shop">Catalog</NavLink>
            </li>
            <li className="mx-10">
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-full">
        <Outlet />
      </div>
    </div>
    
  )
}