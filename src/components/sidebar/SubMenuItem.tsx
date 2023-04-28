import { IMenu } from "./types";

const SubMenuItem: React.FC<IMenu> = (menu) => {
  const { name } = menu;
  return (
    <>
      <p className="text-sm">{name}</p>
    </>
  );
};

export default SubMenuItem;
