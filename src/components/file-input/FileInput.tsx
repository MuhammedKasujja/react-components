import { mergeClassNames } from "src/utils/utils";
import classes from "./FileInput.module.scss";
import { ChangeEvent } from "react";

type FileInputProps = {
  hint?: string;
  title: string;
  handleChange(file: File | null | undefined): void;
};

const FileInput: React.FC<FileInputProps> = ({ hint, title, handleChange }) => {
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.files?.item(0))
  };
  return (
    <>
      <label
        className={mergeClassNames(
          classes.file_input,
          classes.file_input_label
        )}
        htmlFor="file_input"
      >
        {title}
      </label>
      <input
        className={mergeClassNames(
          classes.file_input,
          classes.file_input_input
        )}
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        onChange={onFileChange}
      ></input>
      {hint && (
        <p
          className={mergeClassNames(
            classes.file_input,
            classes.file_input_hint
          )}
          id="file_input_help"
        >
          {hint}
          {/* SVG, PNG, JPG or GIF (MAX. 800x400px). */}
        </p>
      )}
    </>
  );
};

export default FileInput;
