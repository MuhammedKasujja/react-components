import { mergeClassNames } from "src/utils/utils";
import classes from "./NavbarProfileMenu.module.scss";

const NavbarProfileMenu = () => {
  return (
    <div className={mergeClassNames(classes.right_menu)}>
      <p>Profile</p>
      <img
        className={mergeClassNames(classes.avatar)}
        src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
        alt="profile image"
      />
    </div>
  );
};

export default NavbarProfileMenu;
