import { NavLink } from "react-router-dom";

export default function Home(){

  return (
     <div className=" h-5/6  flex items-center justify-center white">

        <div className="w-[20rem] h-[20rem] bg-[#8bc6ec]/40 text-white flex items-center justify-center text-5xl flex-col font-black rounded-full">
          Fake Store
          <NavLink to="/shop" className="bg-orange-300/70 mt-8 text-white text-center text-2xl border-solid border-orange-300 w-32 border-4 rounded-lg hover:bg-orange-300 ">
            Shop
          </NavLink>
        </div>
     </div>
  );
}