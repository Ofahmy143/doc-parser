import { Viewer } from "@react-pdf-viewer/core";
import styled from "styled-components";

export const PictureBoxWrapper = styled.div`
  position: relative;
  width: 80svw;
  max-height: 80svh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  border-radius: 10px;

`;

export const UploadPlaceholder = styled.div`
  width: 100%;
  height: 70svh;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const StyledPdfViewer = styled(Viewer)`

`;

export const UploadScreen = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 5;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease; /* Add smooth transition effect */

  ${PictureBoxWrapper}:hover & {
    opacity: 1; /* Show the upload screen on hover */
  }

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  img {
    opacity: 0.5;
    width: 15%;
    height: auto;
    object-fit: contain;
  }
`;

export const ImageUploadInput = styled.input`
  width: 100%;
  height: 100%;
`;
