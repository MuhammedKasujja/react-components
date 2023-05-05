import RadioButton from "../radio-button/RadioButton";
import { RadioButtonProps } from "../radio-button/RadioButton.type";

type RadioGroupOptions = Omit<RadioButtonProps, "group">;

type RadioGroupProps = {
  variant?: "horizontal" | "vertical";
  name: string;
  options: RadioGroupOptions[];
};

const defaultRadioGroupProps: RadioGroupProps = {
  variant: "horizontal",
  name: "",
  options: [],
};

const RadioGroup: React.FC<RadioGroupProps> = ({ variant, name, options }) => {
  return (
    <div
      className={variant === "horizontal" ? "flex flex-row gap-2" : "flex flex-col gap-2"}
    >
      {options.map((opt) => (
        <RadioButton label={opt.label} value={opt.value} group={name} />
      ))}
    </div>
  );
};

RadioGroup.defaultProps = defaultRadioGroupProps;

export default RadioGroup;
