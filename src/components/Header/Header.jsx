import { IoSearchOutline } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import HeaderButton from "./HeaderButton";
import ModeTabs from "./ModeTabs";
import Tabs from "./Tabs";

const Header = () => {
  return (
    <div className="flex justify-between items-center pt-7">
      <div>
        <h1 className=" font-semibold text-black text-4xl pl-10">Company Name Here</h1>
      </div>
      <div className="flex justify-end items-center gap-4">
        <HeaderButton icon={<IoSearchOutline/>}/>
        <HeaderButton icon={<LuFilter/>}/>
        <Tabs />
        <ModeTabs/>
      </div>
    </div>
  );
};

export default Header;
