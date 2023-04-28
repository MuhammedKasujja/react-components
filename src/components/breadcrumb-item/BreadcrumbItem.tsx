import { BreadcrumbItemProps } from "./BreadcrumbItem.type";
import { mergeClassNames } from "src/utils/utils";

import classes from "./BreadcrumbItem.module.scss";

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { icon, isActive, label } = props;
  return (
    <div
      className={mergeClassNames(
        isActive ? classes.active : "",
        classes.breadcrumb_item
      )}
    >
      {label}
    </div>
  );
};

export default BreadcrumbItem;
