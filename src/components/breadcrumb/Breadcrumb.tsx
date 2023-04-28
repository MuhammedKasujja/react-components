import React, { Children } from "react";

import { BreadcrumbProps } from "./Breadcrumb.type";
import BreadcrumbItem from "../breadcrumb-item/BreadcrumbItem";

const Breadcrumb = (props: BreadcrumbProps & React.ComponentProps<"div">) => {
  const { items } = props;
  return (
    <div className="flex gap-2">
      {items.map((item, index) => {
        const isLast = Array.isArray(item) && index === item?.length - 1;
        return (
          <BreadcrumbItem
            label={item.label}
            isActive={item.isActive}
            icon={item.icon}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Breadcrumb;
