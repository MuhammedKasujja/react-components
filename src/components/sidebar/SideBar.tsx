import SideBarMenuItem from "./SideBarMenuItem";
import menus from "./Menus";
import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { mergeClassNames } from "src/utils/utils";

const SideBar: React.FC = () => {
  const [selectedMenu, setActive] = useState<string | undefined>();

  const menuContent = menus.map((item) => {
    if (item.navheader)
      return (
        <p
          className={mergeClassNames(classes.sidebar, classes.hearder)}
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
      <div className={mergeClassNames(classes.sidebar, classes.body)}>
        {menuContent}
      </div>
    </>
  );
};

export default SideBar;
