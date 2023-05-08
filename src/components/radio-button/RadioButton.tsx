import { mergeClassNames } from "src/utils/utils";
import classes from "./RadioButton.module.scss";
import { RadioButtonProps } from "./RadioButton.type";

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  group,
  value,
  onChange,
  checked,
}) => {
  const radioButtonId = (
    label && label.toLowerCase().split(" ").join("_")
  ).concat(group);
  return (
    <>
      <div className={mergeClassNames(classes.radio_button)}>
        <input
          defaultChecked={checked}
          id={radioButtonId}
          type="radio"
          value={value ?? label}
          name={group}
          className={mergeClassNames(classes.icon)}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        <label
          htmlFor={radioButtonId}
          className={mergeClassNames(classes.label)}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default RadioButton;
