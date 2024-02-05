// import AppButton from "../Button/Button.component";
import { ChangeEvent, useRef, useState } from "react";
import "./Picture-Box.styles";
import {
  ImageUploadInput,
  PictureBoxWrapper,
  StyledPdfViewer,
  UploadPlaceholder,
  UploadScreen,
} from "./Picture-Box.styles";
import uploadIcon from "/upload.png";
import AppButton from "../Button/Button.component";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

type PictureBoxProps = {
  ImageFile: File | null;
  handleImageFileChange: (file: File | null) => void;
};
function PictureBox({ ImageFile, handleImageFileChange }: PictureBoxProps) {
  const [ImageSrc, setImageSrc] = useState<string>("");
  // const [ImageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref for the file input element
  const newPlugin = defaultLayoutPlugin();

  const handleUploadClick = () => {
    // Trigger the file input dialog when Upload Screen is clicked
    if (fileInputRef?.current) fileInputRef?.current.click();
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      handleImageFileChange(selectedFile);
    }
  };
  return (
    <PictureBoxWrapper>
      {ImageSrc ? (
      <StyledPdfViewer fileUrl={ImageSrc} plugins={[newPlugin]} />
        // <iframe src={ImageSrc} width="100%" height="100%"></iframe>
      ) : (
        <UploadPlaceholder>Press Here to upload a document</UploadPlaceholder>
      )}
      {!ImageFile && (
        <UploadScreen onClick={handleUploadClick}>
          <ImageUploadInput
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <img src={uploadIcon} alt="" />
        </UploadScreen>
      )}
      {ImageFile && (
        <>
          <AppButton label="Upload Again" clickHandler={handleUploadClick} />
          <ImageUploadInput
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </>
      )}
    </PictureBoxWrapper>
  );
}

export default PictureBox;
