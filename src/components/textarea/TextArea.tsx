import { mergeClassNames } from "src/utils/utils";
import classes from "./TextArea.module.scss";
import { ChangeEvent } from "react";

type TextAreaProps = {
  rows?: number;
  label: string;
  onChange(value: string): void;
};

const TextArea = (props: TextAreaProps & Omit<React.ComponentProps<"textarea">, "onChange" >) => {
  
  const onValueChage =(event: ChangeEvent<HTMLTextAreaElement>)=>{
    props.onChange(event.target.value)
  }
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
        onChange={onValueChage}
        rows={props.rows ?? 4}
        className={mergeClassNames(classes.textarea, classes.textarea_body)}
        placeholder={props.placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
