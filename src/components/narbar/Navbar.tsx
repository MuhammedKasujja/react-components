import { mergeClassNames } from "src/utils/utils";

import classes from "./Narbar.module.scss";
import { useState } from "react";
import { SidebarContext } from "./context";

type NavbarProps = {
  leftMenu?: React.ReactNode;
  profileMenu: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ leftMenu, profileMenu }) => {
  const [visible, setVisible] = useState(true);

  return (
    <SidebarContext.Provider value={{ visible }}>
      <nav className={mergeClassNames(classes.navbar)}>
        <div className={mergeClassNames(classes.navbar_menu)}>
          <div
            className="cursor-pointer select-none"
            onClick={() => {
              setVisible((prev) => !prev);
              console.log({ visible });
            }}
          >
            <i>&#8694;</i>
          </div>
          {leftMenu}
        </div>
        {profileMenu}
      </nav>
    </SidebarContext.Provider>
  );
};

export default Navbar;
