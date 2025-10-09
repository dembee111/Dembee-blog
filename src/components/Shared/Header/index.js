import { BurgerIcon } from "@/components/Shared/Icons";
const Header = () => {
  return (
    <div>
      <div className="p-[20px] flex justify-between items-center relative">
        <h1 className="text-2xl text-nowrap items-start relative  text-[#1c1c1c] p-[8px]">
          Dembee's{" "}
          <span className="text-sm absolute top-2 ml-0.5 ">/blogs</span>
        </h1>
        <BurgerIcon className="size-7" />
      </div>
    </div>
  );
};

export default Header;
