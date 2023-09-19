import { 
  Outlet,
  NavLink
} from "react-router-dom"

export default function NavLayout(){

  return (
    <div className=" h-screen min-h-[400px] w-screen min-w-[700px] flex flex-col">
      <div className="h-1/6 min-h-24 w-full min-w[700px] flex text-4xl text-white items-center">
        <nav className=" w-full bg-black/50">
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
      <Outlet />
    </div>
    
  )
}