import { mergeClassNames } from "src/utils/utils";
import classes from "./RadioButton.module.scss";
import { RadioButtonProps } from "./RadioButton.type";

const RadioButton: React.FC<RadioButtonProps> = ({ label, group, value }) => {
  const radioButtonId =
    ((label && label.toLowerCase().split(" ").join("_")) ??
    new Date().toString()).concat(group) 
  return (
    <>
      <div className={mergeClassNames(classes.radio_button)}>
        <input
          checked
          id={radioButtonId}
          type="radio"
          value={value}
          name={group}
          className={mergeClassNames(classes.icon)}
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
