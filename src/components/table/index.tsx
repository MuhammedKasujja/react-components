import Table from "./Table";
import Pagination from "./pagination/Pagination";
import { useState } from "react";
import { PaginationProps } from "./pagination/Pagination.type";
import { TableProps } from "./Table.type";

type ISearchQuery = {
  order: string;
  column: string;
  length: number;
  query?: string;
};

type ITableProps<T extends Object> = {
  onSearch(query: ISearchQuery): void;
} & TableProps<T>;
//  & Omit<PaginationProps, "">;


const TableNew = <T extends Object>({
  data,
  columns,
  onSearch,
}: ITableProps<T>) => {
  const pagination: PaginationProps = {
    current_page: 1,
    from: 1,
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=3",
        label: "3",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=4",
        label: "4",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=5",
        label: "5",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=6",
        label: "6",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=7",
        label: "7",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=8",
        label: "8",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=9",
        label: "9",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=10",
        label: "10",
        active: false,
      },
      {
        url: null,
        label: "...",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=17",
        label: "17",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=18",
        label: "18",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/rides?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://127.0.0.1:8000/api/admin/rides?page=2",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 180,
  };
 
  return (
    <div>
      <div>
        <Table data={data} columns={columns} />
        <Pagination
          {...pagination}
          onLinkClicked={(link) => {
            console.log("onLinkClicked", link);
          }}
        ></Pagination>
      </div>
    </div>
  );
};

export default TableNew;
