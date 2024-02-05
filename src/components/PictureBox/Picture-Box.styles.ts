import styled from "styled-components";

export const PictureBoxWrapper = styled.div`
  position: relative;
  width: 80svw;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  /* border: 1px solid rgba(255, 255, 255, 0.5); */
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 10px;
  iframe {
    width: 100%;
    min-height: 70svh;
    height: auto;
    max-height: 70svh;
    object-fit: contain;
    z-index: 1;
  }
  div {
    width: 100%;
    height: 70svh;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
  & > :first-child {
    align-self: flex-end;
  }
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
