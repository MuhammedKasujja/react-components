import { ColumnDef } from "@tanstack/react-table";

export type TableProps<T extends Object> ={
    data: T[],
    columns: ColumnDef<T>[],
    showFooter?: boolean
    showNavigation?: boolean
}