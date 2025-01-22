import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between mx-20 mt-4">
        <h1 className="text-4xl font-bold">Recipe Calories</h1>
        <div className="text-2xl flex gap-4">
          <button className="btn hover:bg-slate-200 rounded-xl px-2">Home</button>
          <button className="btn hover:bg-slate-200 rounded-xl px-2">Recipes</button>
          <button className="btn hover:bg-slate-200 rounded-xl px-2">About</button>
          <button className="btn hover:bg-slate-200 rounded-xl px-2">Search</button>
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-slate-100 rounded-3xl py-2 px-10 pl-6 pr-14 flex items-center gap-2 ">
            <IoIosSearch />
            <span>Search</span>
          </div>
          <div className="text-3xl bg-green-500 px-1 py-1 rounded-full">
            <FaRegFaceFrownOpen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
