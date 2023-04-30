import { IBreadcrumbItemProps } from "./BreadcrumbItem.type";
import { mergeClassNames } from "src/utils/utils";

import classes from "./BreadcrumbItem.module.scss";

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = (props) => {
  const { icon, isActive, label, isLast } = props;
  return (
    <div
      className={mergeClassNames(
        isActive ? classes.active : "",
        classes.breadcrumb_item
      )}
    >
      {label}
      {!isLast && <span className="pl-1 text-black">{'>'}</span>}
    </div>
  );
};

export default BreadcrumbItem;
