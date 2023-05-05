import RadioButton from "../radio-button/RadioButton";
import { RadioButtonProps } from "../radio-button/RadioButton.type";

type RadioGroupOptions = Omit<RadioButtonProps, "group" | "onChange" | "checked">;

type RadioGroupProps = {
  variant?: "horizontal" | "vertical";
  name: string;
  options: RadioGroupOptions[];
  onChange?(value: RadioGroupOptions["value"]): void;
  value?: RadioGroupOptions["value"]
};

const defaultRadioGroupProps: RadioGroupProps = {
  variant: "horizontal",
  name: "",
  options: [],
  onChange: () => {},
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  variant,
  name,
  options,
  onChange,
  value
}) => {
  return (
    <div
      className={
        variant === "horizontal" ? "flex flex-row gap-2" : "flex flex-col gap-2"
      }
    >
      {options.map((opt, index) => (
        <RadioButton
          key={index}
          label={opt.label}
          value={opt.value}
          group={name}
          checked={value === opt.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

RadioGroup.defaultProps = defaultRadioGroupProps;

export default RadioGroup;
