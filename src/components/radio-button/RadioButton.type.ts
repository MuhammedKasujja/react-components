export type RadioButtonProps = {
  label: string;
  group: string;
  value?: string | number;
  onChange?(value:string | number): void,
  checked?: boolean
};
