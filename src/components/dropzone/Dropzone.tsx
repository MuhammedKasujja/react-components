import { mergeClassNames } from "src/utils/utils";
import classes from "./Dropzone.module.scss";
import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";

type DropzoneProps = {
  hint?: string;
  onFiles(files: File[]): void;
  multipleFiles?: boolean;
};

const defaultProps: DropzoneProps = {
  hint: "SVG, PNG, JPG or GIF (MAX. 800x400px)",
  onFiles: (_) => {},
  multipleFiles: false,
};

const Dropzone: React.FC<DropzoneProps> = ({
  hint,
  onFiles,
  multipleFiles,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (multipleFiles) {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    } else {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }
  }, []);

  useEffect(() => {
    onFiles(files);
  }, [files]);

  const { getRootProps, getInputProps } = useDropzone({
    noClick: true,
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  const removeFile = (file: File) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.name !== file.name));
  };

  const thumbs = files.map((file) => (
    <div className={mergeClassNames(classes.thumbs)} key={file.name}>
      <div className={classes.thumbInner}>
        <img
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
      <svg
        className={mergeClassNames(classes.delete_icon)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="15px"
        height="15px"
        fill="red"
        onClick={() => removeFile(file)}
      >
        <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z" />
      </svg>
    </div>
  ));

  return (
    <div className={mergeClassNames(classes.dropzone)}>
      <label
        htmlFor="dropzone-file"
        className={mergeClassNames(classes.dropzone_container)}
        {...getRootProps()}
      >
        <div className={mergeClassNames(classes.dropzone_hint_container)}>
          <svg
            aria-hidden="true"
            className="w-6 h-6 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className={mergeClassNames(classes.dropzone_hint_action_hint)}>
            <span className="font-semibold text-sm">Click to upload</span> or
            drag and drop
          </p>
          <p className={mergeClassNames(classes.dropzone_hint_action_text)}>
            {hint}
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          {...getInputProps()}
        />
      </label>
      <div className={classes.thumbs_container}>{thumbs}</div>
    </div>
  );
};

Dropzone.defaultProps = defaultProps;

export default Dropzone;
