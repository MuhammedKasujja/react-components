import { mergeClassNames } from "src/utils/utils";
import classes from "./TextArea.module.scss";

type TextAreaProps = {
  rows?: number;
  label: string;
};

const TextArea = (
  props: TextAreaProps & React.ComponentProps<"textarea">
) => {
  return (
    <>
      <label
        htmlFor={props.label}
        className={mergeClassNames(classes.textarea, classes.textarea_label)}
      >
        {props.label}
      </label>
      <textarea
        id={props.label}
        onChange={props.onChange}
        rows={props.rows ?? 4}
        className={mergeClassNames(classes.textarea, classes.textarea_body)}
        placeholder={props.placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
