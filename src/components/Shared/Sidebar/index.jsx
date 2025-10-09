import { BurgerIcon } from "../Icons";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-[100px] h-screen">
      <div className="flex flex-col justify-between items-center bg-[#f1f4f5] h-full w-full">
        <div className="mt-6">
          <h1 className="text-3xl font-extralight">3D</h1>
        </div>
        <div className="-rotate-90">
          <h1 className="text-2xl text-nowrap">Dembee's blogs</h1>
        </div>
        <div className="mb-8">
          <BurgerIcon className="size-7" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
