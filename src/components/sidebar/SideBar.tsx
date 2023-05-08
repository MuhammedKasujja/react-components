import SideBarMenuItem from "./sidebar-menu-item/SideBarMenuItem";
import menus from "./Menus";
import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { mergeClassNames } from "src/utils/utils";
import { useSidebarContext } from "../narbar/context";

const SideBar: React.FC = () => {
  const [selectedMenu, setActive] = useState<string | undefined>();
  const { visible } = useSidebarContext()

  const menuContent = menus.map((item, index) => {
    if (item.navheader)
      return (
        <p
          className={mergeClassNames(classes.sidebar, classes.hearder)}
          key={item.navheader}
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
            key={index}
            selected={selectedMenu === item.name}
          />
        </div>
      );
    }
  });
  return (
    <>{visible ?
      <div className={mergeClassNames(classes.sidebar, classes.body)}>
        {menuContent}
      </div> : null}
    </>
  );
};

export default SideBar;
