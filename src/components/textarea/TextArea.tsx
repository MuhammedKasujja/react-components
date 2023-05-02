import { mergeClassNames } from "src/utils/utils";
import classes from "./TextArea.module.scss";

type TextAreaProps = {
  rows?: number;
  label: string;
};

const TextArea = (
  props: TextAreaProps & Omit<React.ComponentProps<"textarea">, "size">
) => {
  return (
    <>
      <label
        htmlFor="message"
        className={mergeClassNames(classes.textarea, classes.textarea_label)}
      >
        {props.label}
      </label>
      <textarea
        id="message"
        rows={props.rows ?? 4}
        className={mergeClassNames(classes.textarea, classes.textarea_body)}
        placeholder={props.placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
