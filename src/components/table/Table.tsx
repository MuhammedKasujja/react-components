import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { TableProps } from "./Table.type";
import { mergeClassNames } from "src/utils/utils";
import classes from "./Table.module.scss";

const Table = <T extends Object>({
  data,
  columns,
  showFooter,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className={mergeClassNames(classes.table_main)}>
      <div className={mergeClassNames(classes.table_scroll_container)}>
        <div className={mergeClassNames(classes.container)}>
          <div className={mergeClassNames(classes.table_container)}>
            <table className={mergeClassNames(classes.table)}>
              <thead className={mergeClassNames(classes.table_head)}>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className={mergeClassNames(classes.table_head_row)}
                  >
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className={mergeClassNames(classes.table_row_header)}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className={mergeClassNames(classes.table_body)}>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className={mergeClassNames(classes.table_body_row)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        className={mergeClassNames(classes.table_row_data)}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              {showFooter ? (
                <tfoot className={mergeClassNames(classes.table_footer)}>
                  {table.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                      {footerGroup.headers.map((header) => (
                        <th key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              ) : null}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
