export type LinkProps = {
  active: boolean;
  label: string;
  url: string | null;
};
export interface PaginationProps {
  to: number;
  from: number;
  current_page: number;
  per_page: number;
  total: number;
  next_page_url: string;
  prev_page_url: string | null;
  links: Array<LinkProps>;
}

export interface IPaginationProps extends PaginationProps {
  onLinkClicked(url: string): void;
}
