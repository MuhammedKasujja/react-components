import { IBreadcrumbItemProps } from "./BreadcrumbItem.type";
import { mergeClassNames } from "src/utils/utils";

import classes from "./BreadcrumbItem.module.scss";

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = (props) => {
  const { icon, isActive, label, isLast } = props;
  return (
    <div
      className={mergeClassNames(
        classes.breadcrumb_item,
        isActive ? classes.active : "",
      )}
    >
      {label}
      {!isLast && (
        <span
          className={mergeClassNames(classes.icon)}
        >
          {/* {">"} */}
        </span>
      )}
    </div>
  );
};

export default BreadcrumbItem;
