import SideBarMenuItem from "./SideBarMenuItem";
import menus from "./Menus";
import { useState } from "react";

const SideBar: React.FC = () => {
  const [selectedMenu, setActive] = useState<string | undefined>();

  const menuContent = menus.map((item) => {
    if (item.navheader)
      return (
        <p
          className="text-white px-2 py-2 text-left uppercase decoration-4"
          key={item.name}
        >
          {item.navheader}
        </p>
      );
    else {
      return (
        <div onClick={() => setActive(item.name)} key={item.name}>
          <SideBarMenuItem
            name={item.name!}
            submenu={item.submenu}
            url={item.url!}
            icon={item.icon}
            gate={item.gate}
            key={item.name}
            selected={selectedMenu === item.name}
          />
        </div>
      );
    }
  });
  return (
    <>
      <div className="w-80 bg-[#1a233a] p-4 rounded-none overflow-y-scroll text-[#8a99b5] hover:overflow-y-auto scrollbar-thumb-[#8a99b5] scrollbar-thin">
        {menuContent}
      </div>
    </>
  );
};

export default SideBar;
