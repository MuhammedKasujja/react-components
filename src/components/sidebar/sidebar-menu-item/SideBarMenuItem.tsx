import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { MenuItem } from "../types";
import { mergeClassNames } from "src/utils/utils";
import classes from "./SideBarMenuItem.module.scss";

const SideBarMenuItem: React.FC<MenuItem> = (item) => {
  const { icon, name, gate, selected } = item;
  const [active, setActive] = useState(selected);
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>();

  // const navigate = useNavigate();

  const handleClickScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    setSelectedMenu(undefined);
    if (!selected) setActive(false);
    if (active && !item.submenu) {
      // navigate(item.url);
    }
  }, [selected]);

  return (
    <>
      <div
        className={mergeClassNames(
          classes.sidebar_menu_item,
          selected ? classes.sidebar_menu_item_selected : "",
          selected && !item.submenu ? classes.active : "",
        )}
      >
        <div
          className={`flex justify-between p-2 select-none ${
            selected ? "text-[#5A8DEE]" : ""
          }`}
          id={item.name}
          onClick={() => {
            setActive((prev) => !prev);
            if (!item.submenu) handleClickScroll(item.name);
          }}
        >
          <p className="p-1">{name}</p>
          {item.submenu && (
            <span className="text-3xl rotate-90">
              {active ? <span>&#8249;</span> : <span>&#8250;</span>}
            </span>
          )}
        </div>
        {active && (
          <div className="last:pb-1">
            {item.submenu && <hr className="border-1 border-[#464d5c]" />}
            {item.submenu?.map((menu) => (
              <p
                className={`text-left cursor-pointer p-2 select-none ${
                  selectedMenu === menu.name
                    ? "bg-[#464d5c] text-[#5A8DEE]" //"bg-[#5a8dee] text-[#5A8DEE] opacity-10"
                    : ""
                }`}
                id={menu.name}
                key={menu.name}
                onClick={() => {
                  setSelectedMenu(menu.name);
                  handleClickScroll(menu.name);
                  // navigate(menu.url);
                }}
              >
                <span className="pr-2">&#62;</span>
                {menu.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SideBarMenuItem;
