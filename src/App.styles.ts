import styled from "styled-components";

interface AppWrapperProps {
  isOutput: boolean;
}

export const AppWrapper = styled.main<AppWrapperProps>`
  width: 98svw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.isOutput ? 'space-between' : 'center')};
  height: 100svh;
`;

export const OutputImg = styled.img`
  max-width: 80%;
  height: auto;
  max-height: 90svh;
  object-fit: contain;
`;
