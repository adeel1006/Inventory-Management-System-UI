import React from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

export default function UploadBtn() {
  return (
    <div>
      <label
        for="upload-btn"
        className="upload-img-btn"
        style={{
          padding: "12%",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <DriveFolderUploadIcon />
        Upload
      </label>
      <input id="upload-btn" type="file" hidden />
    </div>
  );
}
