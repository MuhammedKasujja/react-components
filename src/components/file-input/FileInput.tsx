import { mergeClassNames } from "src/utils/utils";
import classes from "./FileInput.module.scss";
import { ChangeEvent, useState } from "react";

type FileInputProps = {
  hint?: string;
  title: string;
  preview?: boolean;
  handleChange(file: File | null | undefined): void;
};

const defaultFileInputProps: FileInputProps = {
  hint: undefined,
  title: "",
  preview: true,
  handleChange: (_) => {},
};

const FileInput: React.FC<FileInputProps> = ({
  hint,
  title,
  handleChange,
  preview,
}) => {
  const [filePreview, setFilePreview] = useState("");
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    handleChange(file);
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <label
        className={mergeClassNames(
          classes.file_input,
          preview ? classes.file_input_preview : classes.file_input_label
        )}
        htmlFor="file_input"
      >
        {preview ? (
          filePreview ? (
            <img
              src={filePreview}
              alt="selected image"
              className={mergeClassNames(classes.placeholder)}
            />
          ) : (
            <p className={mergeClassNames(classes.placeholder)}>{title}</p>
          )
        ) : (
          title
        )}
      </label>
      <input
        className={mergeClassNames(
          preview ? "hidden" : classes.file_input,
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
          id="file_input"
        >
          {hint}
          {/* SVG, PNG, JPG or GIF (MAX. 800x400px). */}
        </p>
      )}
    </>
  );
};

FileInput.defaultProps = defaultFileInputProps;

export default FileInput;
