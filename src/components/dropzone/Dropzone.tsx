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

  const thumbs = files.map((file) => (
    <div className={classes.thumbs} key={file.name}>
      <div className={classes.thumbInner}>
        <img
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
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
            className="w-10 h-10 mb-3 text-gray-400"
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
            <span className="font-semibold">Click to upload</span> or drag and
            drop
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
