import { mergeClassNames } from "src/utils/utils";
import { IPaginationProps } from "./Pagination.type";
import classes from "./Pagination.module.scss";
import { useEffect, useState } from "react";

const Pagination: React.FC<IPaginationProps> = ({
  to,
  total,
  from,
  prev_page_url,
  next_page_url,
  current_page,
  links,
  onLinkClicked,
}) => {
  const [activeLink, setActivelink] = useState<string | null>();

  useEffect(() => {
    activeLink && onLinkClicked(activeLink);
  }, [activeLink]);

  return (
    <>
      <nav className={mergeClassNames(classes.pagination)}>
        <span className={mergeClassNames(classes.page_stats)}>
          Showing {from} - {to} of {total} entries
        </span>
        <a
          className={mergeClassNames(classes.btn_previous)}
          onClick={(_) => setActivelink(prev_page_url)}
        >
          {"<<"}
        </a>
        {links.slice(1, -1).map((link) => (
          <div
            key={link.label}
            className={mergeClassNames(classes.pagination_link)}
            onClick={(_) => setActivelink(link.url)}
          >
            {link.label}
          </div>
        ))}
        <a
          className={mergeClassNames(classes.btn_next)}
          onClick={(_) => setActivelink(next_page_url)}
        >
          {">>"}
        </a>
      </nav>
    </>
  );
};

export default Pagination;
